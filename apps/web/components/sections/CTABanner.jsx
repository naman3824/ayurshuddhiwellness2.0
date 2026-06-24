import ScrollReveal from '../ui/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="bg-primary px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-content text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl font-normal text-white md:text-4xl">
            Begin your wellness journey.
          </h2>

          <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-white/70">
            Whether you seek balance through Ayurveda, purification through
            Panchakarma, or stillness through Yoga — your path starts here.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 font-sans text-sm font-medium text-primary transition-all duration-300 hover:bg-white/90"
          >
            Book a Consultation
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
