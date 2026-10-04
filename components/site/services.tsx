import { Laptop, ShieldCheck, Globe, Check } from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: Laptop,
    name: 'IT Support',
    tagline: 'Technology that just works.',
    description:
      'On-site and remote help for the everyday problems that slow your team down — fixed fast, explained plainly.',
    items: [
      'Troubleshooting & help desk',
      'New computer setup & configuration',
      'Data transfers & migrations',
      'Wi-Fi, printers & network setup',
      'Microsoft 365 & Google Workspace',
      'Backup setup & monitoring',
    ],
  },
  {
    icon: ShieldCheck,
    name: 'Cybersecurity & GRC',
    tagline: 'Protection you can prove.',
    description:
      'Governance, risk, and compliance work that turns security from a worry into a documented, defensible plan.',
    items: [
      'Risk & vulnerability assessments',
      'Business continuity & disaster recovery',
      'Incident response planning',
      'Security policies & procedures',
      'Compliance readiness (HIPAA, PCI, FTC)',
      'Security awareness training',
    ],
  },
  {
    icon: Globe,
    name: 'Websites',
    tagline: 'A front door worth walking through.',
    description:
      'Fast, secure, mobile-friendly websites that help customers find you, trust you, and get in touch.',
    items: [
      'Custom design for your brand',
      'Mobile-first & lightning fast',
      'Local SEO & Google Business setup',
      'Booking, quote & contact forms',
      'Secure hosting & SSL included',
      'Ongoing updates & maintenance',
    ],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="One partner for everything technology."
          description="Stop juggling a computer guy, a web designer, and a security consultant. We handle all three — and they work together."
        />

        <div className="mt-14 grid overflow-hidden rounded-xl border border-border md:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.name}
              className={`group relative flex flex-col bg-card/40 p-8 transition-colors hover:bg-card ${
                i > 0 ? 'border-t border-border md:border-l md:border-t-0' : ''
              }`}
            >
              <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background">
                <service.icon className="size-5 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.name}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">{service.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
