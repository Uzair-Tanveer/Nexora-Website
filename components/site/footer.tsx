import { Logo } from './logo'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'IT Support', href: '#services' },
      { label: 'Cybersecurity & GRC', href: '#security' },
      { label: 'Websites', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', href: '#industries' },
      { label: 'Process', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@nexoraservices.com', href: 'mailto:hello@nexoraservices.com' },
      { label: '(555) 555-0123', href: 'tel:+15555550123' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            IT support, cybersecurity, and websites for small businesses.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-medium">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mt-16 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Nexora Services. All rights reserved.</p>
        <p className="font-mono">Secure by default.</p>
      </div>
    </footer>
  )
}
