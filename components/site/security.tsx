import { FileText, Radar, LifeBuoy, Siren, GraduationCap, ClipboardCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'

const frameworks = ['NIST CSF', 'CIS Controls', 'HIPAA', 'PCI DSS', 'FTC Safeguards', 'SOC 2 Readiness']

export function Security() {
  return (
    <section id="security" aria-labelledby="security-title" className="relative border-b border-border">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          id="security-title"
          eyebrow="Cybersecurity & GRC"
          title="Security isn't a product. It's a plan."
          description="Small businesses are now the most common target of cyberattacks. We assess where you stand, document how you'll respond, and help you meet the regulations that apply to your industry."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <article className="flex flex-col justify-between rounded-xl border border-border bg-card p-8 md:col-span-4">
            <div>
              <Radar className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Risk &amp; vulnerability assessments</h3>
              <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                A clear-eyed review of your devices, accounts, network, and vendors. You get a prioritized,
                plain-English report — what to fix first, what it costs, and why it matters.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border font-mono text-xs">
              {[
                { level: 'Critical', count: 2, color: 'text-destructive' },
                { level: 'Moderate', count: 7, color: 'text-amber-400' },
                { level: 'Low', count: 12, color: 'text-muted-foreground' },
              ].map((row) => (
                <div key={row.level} className="bg-background p-4">
                  <div className="text-muted-foreground">{row.level}</div>
                  <div className={`mt-1 text-2xl font-semibold ${row.color}`}>{row.count}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 md:col-span-2">
            <LifeBuoy className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Business continuity plans</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If ransomware, a fire, or a failed server hit tomorrow, how long until you&apos;re back open? We
              write the playbook and test it.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 md:col-span-2">
            <Siren className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Incident response</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Step-by-step procedures for who to call and what to do when something goes wrong.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 md:col-span-2">
            <FileText className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Policies &amp; procedures</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Acceptable use, password, access control, and data retention policies written for your business.
            </p>
          </article>

          <article className="rounded-xl border border-border bg-card p-8 md:col-span-2">
            <GraduationCap className="size-6 text-brand" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-semibold tracking-tight">Staff training</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Practical phishing and security awareness training your team will actually remember.
            </p>
          </article>

          <article className="flex flex-col gap-6 rounded-xl border border-border bg-card p-8 md:col-span-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <ClipboardCheck className="size-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Compliance readiness</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Aligned to the frameworks auditors, insurers, and regulators look for.
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {frameworks.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
