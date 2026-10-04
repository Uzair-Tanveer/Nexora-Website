import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'We only have a handful of employees. Do we really need cybersecurity?',
    a: 'Yes — small businesses are targeted precisely because attackers expect weaker defenses. The good news is that a few well-chosen controls (MFA, backups, training, and a plan) prevent the vast majority of incidents, and they are affordable.',
  },
  {
    q: 'What does a risk assessment actually involve?',
    a: 'We review your devices, user accounts, network, cloud services, vendors, and existing policies, then score the risks by likelihood and impact. You receive a written report with a prioritized remediation plan written in plain English.',
  },
  {
    q: 'Do you offer one-time help or only monthly plans?',
    a: 'Both. Many clients start with a single project — a new office setup, a data migration, a website, or an assessment — and later move to a monthly plan for ongoing support and security monitoring.',
  },
  {
    q: 'Can you help us meet HIPAA, PCI, or FTC Safeguards requirements?',
    a: 'We help you understand which requirements apply, close the gaps, and produce the documentation (risk analysis, policies, incident response plans) that auditors and insurers ask for. Formal certification is performed by independent auditors.',
  },
  {
    q: 'Do you build websites for any kind of business?',
    a: 'From doctors’ offices to landscape contractors, we design fast, secure, mobile-friendly sites with the features your customers need — appointment requests, quote forms, menus, galleries, and more — and we host and maintain them for you.',
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions, answered."
          description="Don't see yours? Reach out — we're happy to talk it through."
        />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 pr-10 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
