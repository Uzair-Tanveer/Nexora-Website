import { ArrowRight, CheckCircle2, AlertTriangle, Circle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const checks = [
  { label: 'Multi-factor authentication', status: 'pass' },
  { label: 'Offsite backups verified', status: 'pass' },
  { label: 'Endpoint protection on 14/14 devices', status: 'pass' },
  { label: 'Business continuity plan', status: 'warn' },
  { label: 'Staff phishing training', status: 'pending' },
] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#security"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
            Now offering HIPAA &amp; FTC Safeguards readiness reviews
            <ArrowRight className="size-3" aria-hidden="true" />
          </a>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tighter sm:text-6xl md:text-7xl">
            The IT department your business never had.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nexora Services gives small businesses enterprise-grade IT support, cybersecurity, and a modern
            website — without the enterprise price tag or the jargon.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className={cn(buttonVariants(), 'h-11 w-full px-6 text-base sm:w-auto')}>
              Get a free security assessment
            </a>
            <a
              href="#services"
              className={cn(buttonVariants({ variant: 'outline' }), 'h-11 w-full px-6 text-base sm:w-auto')}
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="rounded-xl border border-border bg-card/80 shadow-2xl shadow-brand/10 backdrop-blur">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">posture-report.pdf</span>
            </div>
            <div className="grid gap-6 p-6 md:grid-cols-[180px_1fr]">
              <div className="flex flex-col justify-center rounded-lg border border-border bg-background/60 p-5">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Security score
                </span>
                <span className="mt-2 text-5xl font-semibold tracking-tighter">
                  82<span className="text-xl text-muted-foreground">/100</span>
                </span>
                <span className="mt-2 text-xs text-success">+37 since onboarding</span>
              </div>
              <ul className="flex flex-col divide-y divide-border">
                {checks.map((check) => (
                  <li key={check.label} className="flex items-center justify-between gap-4 py-2.5 text-sm">
                    <span>{check.label}</span>
                    {check.status === 'pass' && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-success">
                        <CheckCircle2 className="size-3.5" aria-hidden="true" /> Pass
                      </span>
                    )}
                    {check.status === 'warn' && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-400">
                        <AlertTriangle className="size-3.5" aria-hidden="true" /> Draft
                      </span>
                    )}
                    {check.status === 'pending' && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <Circle className="size-3.5" aria-hidden="true" /> Scheduled
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
