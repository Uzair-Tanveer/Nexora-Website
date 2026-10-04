import {
  Stethoscope,
  Trees,
  Scale,
  Calculator,
  UtensilsCrossed,
  Store,
  HardHat,
  Smile,
  Home,
  Wrench,
} from 'lucide-react'

const items = [
  { icon: Stethoscope, label: 'Medical practices' },
  { icon: Trees, label: 'Landscape contractors' },
  { icon: Scale, label: 'Law firms' },
  { icon: Calculator, label: 'Accounting & tax' },
  { icon: Smile, label: 'Dental offices' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Store, label: 'Retail shops' },
  { icon: HardHat, label: 'Construction' },
  { icon: Home, label: 'Real estate' },
  { icon: Wrench, label: 'Home services' },
]

export function IndustryStrip() {
  return (
    <section aria-label="Industries we serve" className="border-b border-border py-10">
      <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
        Built for the businesses that keep Main Street running
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <ul className="animate-marquee flex w-max gap-12">
          {[...items, ...items].map((item, i) => (
            <li
              key={`${item.label}-${i}`}
              aria-hidden={i >= items.length}
              className="flex items-center gap-2.5 whitespace-nowrap text-muted-foreground"
            >
              <item.icon className="size-5" aria-hidden="true" />
              <span className="text-sm font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
