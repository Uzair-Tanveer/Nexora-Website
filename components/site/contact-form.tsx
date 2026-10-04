'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitContact } from '@/app/actions/contact'
import { INDUSTRY_OPTIONS, SERVICE_OPTIONS, type ContactState } from '@/lib/contact'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 aria-[invalid=true]:border-destructive'

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState)
  const errors = state.fieldErrors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card/80 px-6 py-16 text-center backdrop-blur"
      >
        <CheckCircle2 className="size-10 text-success" aria-hidden="true" />
        <h3 className="text-2xl font-semibold tracking-tight">Thanks — we got your request.</h3>
        <p className="max-w-md text-pretty text-muted-foreground">
          Someone from Nexora Services will reach out within one business day to schedule your free assessment.
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-xl border border-border bg-card/80 p-6 text-left shadow-2xl shadow-brand/10 backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputClass}
            placeholder="Jane Smith"
          />
        </Field>
        <Field id="email" label="Work email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass}
            placeholder="jane@company.com"
          />
        </Field>
        <Field id="phone" label="Phone" optional error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={inputClass}
            placeholder="(555) 555-0123"
          />
        </Field>
        <Field id="company" label="Business name" optional error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            className={inputClass}
            placeholder="Smith Family Dental"
          />
        </Field>
      </div>

      <Field id="industry" label="Industry" optional error={errors.industry}>
        <select id="industry" name="industry" defaultValue="" className={cn(inputClass, 'appearance-none')}>
          <option value="">Select your industry</option>
          {INDUSTRY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm font-medium">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <label
              key={option}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground has-[:checked]:border-brand has-[:checked]:bg-brand/10 has-[:checked]:text-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring/30"
            >
              <input type="checkbox" name="services" value={option} className="sr-only" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="message" label="Tell us about your business" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClass, 'resize-y')}
          placeholder="How many employees and computers, what's frustrating you, any deadlines or compliance requirements…"
        />
      </Field>

      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col-reverse items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p role="alert" aria-live="polite" className="text-sm text-destructive">
          {state.status === 'error' ? state.message : null}
        </p>
        <Button type="submit" disabled={pending} className="h-11 w-full px-6 text-base sm:w-auto">
          {pending ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Send aria-hidden="true" />}
          {pending ? 'Sending…' : 'Request my assessment'}
        </Button>
      </div>
    </form>
  )
}
