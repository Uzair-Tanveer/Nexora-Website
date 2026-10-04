import { SectionHeading } from './section-heading'

const steps = [
  {
    n: '01',
    title: 'Assess',
    body: 'A free walkthrough of your devices, accounts, network, and website to see where you stand today.',
  },
  {
    n: '02',
    title: 'Plan',
    body: 'A prioritized roadmap with clear costs — quick wins first, bigger projects scheduled around your business.',
  },
  {
    n: '03',
    title: 'Implement',
    body: 'We set it up, lock it down, and document everything so nothing lives only in someone’s head.',
  },
  {
    n: '04',
    title: 'Support',
    body: 'Ongoing help when you need it, plus periodic reviews to keep your security and systems current.',
  },
]

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="From chaos to confidence in four steps."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col bg-background p-8">
              <span className="font-mono text-sm text-brand">{step.n}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
