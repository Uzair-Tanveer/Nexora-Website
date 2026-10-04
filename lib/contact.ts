export const SERVICE_OPTIONS = ['IT support', 'Cybersecurity & GRC', 'Website'] as const

export const INDUSTRY_OPTIONS = [
  'Healthcare / medical office',
  'Legal / accounting',
  'Construction / landscaping / trades',
  'Retail / restaurant',
  'Nonprofit',
  'Other',
] as const

export type ContactField = 'name' | 'email' | 'phone' | 'company' | 'industry' | 'services' | 'message'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<ContactField, string>>
}
