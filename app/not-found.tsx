import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-sm text-pretty text-muted-foreground">
        The link may be outdated. Head back to the Nexora Services homepage.
      </p>
      <Link
        href="/"
        className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  )
}
