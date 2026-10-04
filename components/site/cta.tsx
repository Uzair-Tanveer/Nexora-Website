import { Mail, Phone } from 'lucide-react'
import { ContactForm } from './contact-form'

export function Cta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand/25 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-28 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div className="flex flex-col">
          <h2 id="contact-title" className="text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
            Find out where you stand — for free.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Request a no-obligation assessment. In about an hour, we&apos;ll review your IT, security, and website
            and hand you a clear list of next steps.
          </p>
          <ul className="mt-10 flex flex-col gap-4 text-sm">
            <li>
              <a
                href="tel:+15555550123"
                className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                (555) 555-0123
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@nexoraservices.com"
                className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                hello@nexoraservices.com
              </a>
            </li>
          </ul>
        </div>
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
