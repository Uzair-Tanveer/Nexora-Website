'use client'

import { useState } from 'react'
import { Stethoscope, Trees, Scale, Store, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const industries = [
  {
    id: 'medical',
    icon: Stethoscope,
    label: 'Medical & dental',
    headline: 'Keep patient data safe and your front desk moving.',
    body: 'Healthcare practices handle some of the most sensitive data there is. We help you protect it, document it, and stay ready for a HIPAA audit.',
    points: [
      'HIPAA security risk assessment',
      'Encrypted workstations & secure email',
      'EHR and practice software support',
      'Website with online appointment requests',
    ],
  },
  {
    id: 'trades',
    icon: Trees,
    label: 'Contractors & trades',
    headline: 'Spend your time on job sites, not tech support.',
    body: 'Landscapers, builders, and home-service pros need reliable devices in the field and a website that turns searches into booked jobs.',
    points: [
      'Laptop, tablet & phone setup for crews',
      'Cloud file sharing for estimates & photos',
      'Website with quote request forms',
      'Google Business Profile & local SEO',
    ],
  },
  {
    id: 'professional',
    icon: Scale,
    label: 'Legal & financial',
    headline: 'Confidentiality your clients can count on.',
    body: 'Law and accounting firms are prime targets for wire fraud and email compromise. We lock down accounts and help you meet the FTC Safeguards Rule.',
    points: [
      'Written information security program (WISP)',
      'MFA and email impersonation protection',
      'Secure client document portals',
      'Business continuity for tax season',
    ],
  },
  {
    id: 'retail',
    icon: Store,
    label: 'Retail & hospitality',
    headline: 'Uptime at the register, trust at checkout.',
    body: 'When the POS or Wi-Fi goes down, so does revenue. We keep systems running and card data handled the right way.',
    points: [
      'POS, network & guest Wi-Fi separation',
      'PCI DSS readiness guidance',
      'Backup internet & continuity planning',
      'Website with menus, hours & online ordering',
    ],
  },
]

export function Industries() {
  const [active, setActive] = useState(industries[0].id)
  const current = industries.find((i) => i.id === active) ?? industries[0]

  return (
    <section id="industries" aria-labelledby="industries-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          id="industries-title"
          eyebrow="Industries"
          title="Tailored to how your business actually works."
          description="Every industry has its own risks, regulations, and day-to-day tech headaches. We meet you where you are."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-[260px_1fr]">
          <div role="tablist" aria-label="Industries" className="flex gap-2 overflow-x-auto md:flex-col">
            {industries.map((industry) => {
              const selected = industry.id === active
              return (
                <button
                  key={industry.id}
                  type="button"
                  role="tab"
                  id={`tab-${industry.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${industry.id}`}
                  onClick={() => setActive(industry.id)}
                  className={cn(
                    'flex shrink-0 items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors',
                    selected
                      ? 'border-border bg-card text-foreground'
                      : 'border-transparent text-muted-foreground hover:bg-card/50 hover:text-foreground',
                  )}
                >
                  <industry.icon className={cn('size-4', selected && 'text-brand')} aria-hidden="true" />
                  {industry.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="rounded-xl border border-border bg-card p-8 md:p-10"
          >
            <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{current.headline}</h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{current.body}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border bg-background p-4 text-sm"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
