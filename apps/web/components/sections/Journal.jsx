import ScrollReveal from '../ui/ScrollReveal'

export default function Journal() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-12 lg:gap-0">
        {/* Left — text content */}
        <ScrollReveal className="lg:col-span-7 lg:pr-20">
          <p className="mb-4 font-sans text-sm uppercase tracking-[0.25em] text-muted">
            From the Journal
          </p>
          <h2 className="font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
            Rooted in tradition.
            <br />
            Written for the curious.
          </h2>

          <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-muted">
            Explore ancient Ayurvedic wisdom through modern stories — seasonal
            rituals, herbal spotlights, and guides to mindful living.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover"
          >
            Read more →
          </a>
        </ScrollReveal>

        {/* Right — blog card */}
        <ScrollReveal className="lg:col-span-5" delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            {/* Journal label bar */}
            <div className="bg-background px-5 py-2.5">
              <span className="font-sans text-xs uppercase tracking-widest text-muted">
                Journal
              </span>
            </div>

            {/* Image placeholder */}
            <div className="flex aspect-[16/10] items-center justify-center bg-[#E8E4DD]">
              <span className="font-sans text-sm text-muted">
                Blog post image
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="font-sans text-xs uppercase tracking-widest text-primary">
                Sample post
              </span>
              <h3 className="mt-2 font-serif text-lg font-normal leading-snug text-foreground">
                The Morning Ritual: How Dinacharya Transforms Your Day
              </h3>
              <a
                href="#"
                className="mt-4 inline-block font-sans text-sm text-primary underline underline-offset-4 transition-all duration-300 hover:text-primary-hover"
              >
                Read more →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
