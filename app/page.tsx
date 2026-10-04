import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { IndustryStrip } from '@/components/site/industry-strip'
import { Services } from '@/components/site/services'
import { Security } from '@/components/site/security'
import { Industries } from '@/components/site/industries'
import { Process } from '@/components/site/process'
import { Faq } from '@/components/site/faq'
import { Cta } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IndustryStrip />
        <Services />
        <Security />
        <Industries />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
