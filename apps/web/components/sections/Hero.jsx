import ScrollReveal from '../ui/ScrollReveal'

function TrustBadge({ label, sublabel }) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30">
      <div className="flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full border border-primary/20">
        <span className="font-serif text-[9px] font-semibold uppercase leading-tight tracking-widest text-primary">
          {label}
        </span>
        <span className="mt-0.5 font-serif text-[7px] uppercase tracking-wider text-primary/60">
          {sublabel}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-background px-6 pb-32 pt-20 lg:px-12">
      <div className="mx-auto max-w-content">
        <ScrollReveal>
          {/* Eyebrow */}
          <p className="mb-6 font-sans text-sm uppercase tracking-[0.25em] text-muted">
            Ancient Ayurvedic Wellness
          </p>

          {/* Headline */}
          <h1 className="font-serif text-6xl font-normal leading-[1.1] text-foreground md:text-7xl lg:text-[5.5rem]">
            Ancient Wisdom.
            <br />
            Modern Balance.
          </h1>

          {/* Body */}
          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-muted">
            AyurshuddhiWellness Ayurveda can help balance your mind, body, and personalised treatments.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover"
            >
              Book your Life →
            </a>
            <a
              href="#about"
              className="rounded-full border border-border px-7 py-3 font-sans text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
            >
              My Hero CTA →
            </a>
          </div>
        </ScrollReveal>

        {/* Trust badges — bottom right */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex justify-end gap-4 lg:mt-12">
            <TrustBadge label="100%" sublabel="Organic" />
            <TrustBadge label="GMP" sublabel="Certified" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
