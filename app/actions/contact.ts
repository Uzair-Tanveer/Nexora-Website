'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { contactSubmissions } from '@/lib/db/schema'
import { SERVICE_OPTIONS, type ContactField, type ContactState } from '@/lib/contact'

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((v) => (v === '' ? null : v))

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  phone: optionalText(40),
  company: optionalText(160),
  industry: optionalText(80),
  services: z.array(z.enum(SERVICE_OPTIONS)).max(SERVICE_OPTIONS.length),
  message: z.string().trim().min(10, 'Tell us a bit more (at least 10 characters).').max(4000),
})

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (String(formData.get('website') ?? '') !== '') {
    return { status: 'success' }
  }

  const parsed = contactSchema.safeParse({
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    phone: String(formData.get('phone') ?? ''),
    company: String(formData.get('company') ?? ''),
    industry: String(formData.get('industry') ?? ''),
    services: formData.getAll('services').map(String),
    message: String(formData.get('message') ?? ''),
  })

  if (!parsed.success) {
    const fieldErrors: ContactState['fieldErrors'] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { status: 'error', message: 'Please fix the highlighted fields.', fieldErrors }
  }

  try {
    await db.insert(contactSubmissions).values(parsed.data)
    return { status: 'success' }
  } catch (error) {
    console.error('Failed to save contact submission:', error)
    return { status: 'error', message: 'Something went wrong. Please try again or call us directly.' }
  }
}
