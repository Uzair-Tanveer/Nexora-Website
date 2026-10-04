import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 font-semibold tracking-tight', className)}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-foreground">
        <path d="M12 2 3 5.5v6.2c0 5.2 3.8 9.4 9 10.3 5.2-.9 9-5.1 9-10.3V5.5L12 2Zm0 4.2 5 2v3.5c0 3-2 5.6-5 6.4V6.2Z" />
      </svg>
      <span>Nexora Services</span>
    </span>
  )
}
