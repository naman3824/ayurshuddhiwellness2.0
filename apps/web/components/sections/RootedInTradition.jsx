import ScrollReveal from '../ui/ScrollReveal'

export default function RootedInTradition() {
  return (
    <section id="about" className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-12 lg:gap-0">
        {/* Left — product image placeholder */}
        <ScrollReveal className="lg:col-span-7">
          <div className="flex aspect-[3/4] max-h-[600px] items-center justify-center rounded-2xl bg-[#E8E4DD]">
            <span className="font-sans text-sm text-muted">Apothecary product image</span>
          </div>
        </ScrollReveal>

        {/* Right — text content */}
        <ScrollReveal className="lg:col-span-5 lg:pl-20" delay={0.15}>
          <h2 className="font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
            Rooted in tradition.
            <br />
            Designed for your life.
          </h2>

          <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-muted">
            AyurshuddhiWellness is a few words about holistic meditation and improve your mind, with organic set of treatments.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover"
            >
              Book Now →
            </a>
            <a
              href="#"
              className="font-sans text-sm text-foreground underline underline-offset-4 transition-all duration-300 hover:text-primary"
            >
              Read more →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
