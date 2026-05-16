import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | UKGoldCasinoSites - The Gold Standard in UK Casino Reviews",
  description:
    "Learn how our independent editorial board selects, tests, and gold-rates UKGC-licensed casino operators. Committed to transparency, accuracy, and responsible gambling advocacy.",
}

const PILLARS = [
  {
    label: "UKGC Licensed Only",
    body: "Every operator we gold-rate holds a current UK Gambling Commission licence - guaranteeing the highest standards of player protection, fund segregation, and independently audited fair gaming.",
  },
  {
    label: "UK Player Focused",
    body: "We prioritise casinos that understand British gaming culture, accept GBP deposits, offer UK-friendly payment methods, and provide localised support for British players exclusively.",
  },
  {
    label: "Rigorous Editorial Reviews",
    body: "Our analysts conduct thorough hands-on assessments of every platform - game quality, bonus terms, withdrawal speed, and support responsiveness all tested personally before publication.",
  },
  {
    label: "Exclusive Member Offers",
    body: "We negotiate enhanced welcome packages and exclusive promotions unavailable through other channels, maximising value for discerning UK players who rely on our recommendations.",
  },
]

const METHODOLOGY = [
  ["Licensing & Security", "UKGC licence verification, SSL encryption, independent RNG auditing, and confirmation of customer fund segregation."],
  ["Welcome Bonuses", "Full bonus value assessment including wagering requirements, game contribution rates, and realistic completion terms."],
  ["Game Library", "Slot diversity, live dealer provision, progressive jackpots, RTP rates, and software provider credentials."],
  ["Payment Methods", "UK-friendly options, withdrawal processing speeds, and complete fee transparency."],
  ["Mobile Experience", "Native application quality, browser-based responsiveness, and full game availability on mobile."],
  ["Customer Support", "Live chat availability and response times, email quality, and UK-trained support agent access."],
  ["Responsible Gaming", "Deposit limits, cooling-off periods, self-exclusion integration, and prominence of support signposting."],
]

const PRINCIPLES = [
  ["Transparency", "We explain our testing methodology and ranking criteria openly. You understand precisely how every gold rating is earned."],
  ["Editorial Independence", "Our assessments remain wholly impartial. Affiliate commissions are received but never influence our editorial conclusions."],
  ["Continuous Review", "The casino industry evolves rapidly. We reassess every listed operator regularly to ensure ratings remain current."],
  ["Responsible Gaming", "We actively promote responsible gambling and prominently signpost BeGambleAware, GamCare, and GamStop throughout our platform."],
]

export default function AboutUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO — strict height */}
      <section
        className="relative bg-primary border-b border-accent/30 pt-[57px] md:pt-[65px]"
        style={{ minHeight: "clamp(160px, 20vw, 240px)" }}
      >
        <div className="h-1 w-full bg-accent" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-accent">
                About UKGoldCasinoSites
              </span>
            </div>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-4 text-balance leading-tight">
              The Gold Standard in<br />UK Casino Reviews
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-lg">
              Britain&apos;s independent authority on UKGC-licensed casino operators - helping UK players identify genuinely exceptional experiences through rigorous, uncompromising analysis.
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-accent/15" />
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 max-w-4xl space-y-14">

          {/* Mission */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Clarity in a Complex Market</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                At ukgoldcasinosites.com, we have established the United Kingdom&apos;s premier destination for gold-standard casino evaluation. In a crowded marketplace, our editorial board cuts through marketing noise to identify genuinely exceptional casino experiences for British players.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Whether your passion lies in slots, live blackjack, roulette, or progressive jackpots, we direct you only to operators that deliver outstanding value, a superior game library, and first-class service worthy of a gold rating.
              </p>
            </div>
          </div>

          {/* Pillars — strict grid */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">What Distinguishes Our Approach</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-border/60">
              {PILLARS.map((p, i) => (
                <div
                  key={i}
                  className={`bg-card p-5 md:p-6
                    ${i % 2 !== 0 ? "border-l border-border/60" : ""}
                    ${i >= 2 ? "border-t border-border/60" : ""}
                  `}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 bg-accent shrink-0" />
                    <h3 className="font-serif font-bold text-sm text-foreground">{p.label}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Our Review Methodology</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
              Behind every gold rating lies a comprehensive evaluation framework developed by industry veterans. We assess each operator across seven critical dimensions:
            </p>
            <div className="border border-border/60">
              {METHODOLOGY.map(([title, desc], i) => (
                <div
                  key={i}
                  className={`flex gap-4 bg-card px-5 py-4 hover:bg-secondary/30 transition-colors
                    ${i !== 0 ? "border-t border-border/50" : ""}
                  `}
                >
                  <div className="w-0.5 shrink-0 bg-accent/40 self-stretch" />
                  <div>
                    <p className="font-serif font-semibold text-xs text-accent mb-0.5">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-accent" />
              <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Our Core Principles</h2>
            </div>
            <div className="border border-border/60">
              {PRINCIPLES.map(([title, desc], i) => (
                <div
                  key={i}
                  className={`flex gap-4 bg-card px-5 py-4 hover:bg-secondary/30 transition-colors
                    ${i !== 0 ? "border-t border-border/50" : ""}
                  `}
                >
                  <div className="w-0.5 shrink-0 bg-accent/60 self-stretch" />
                  <div>
                    <p className="font-serif font-semibold text-sm text-foreground mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funding model */}
          <div className="border border-border/60 bg-card">
            <div className="h-1 w-full bg-accent" />
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6 md:p-8">
                <p className="text-[8px] font-sans font-bold tracking-[0.4em] uppercase text-accent/60 mb-2">How We Are Funded</p>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">Free for All UK Players</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Our platform is sustained through affiliate partnerships with casino operators, who provide commission when visitors register via our links. This enables comprehensive, independent analysis at no cost to our readers - with no paywalled or restricted content.
                </p>
              </div>
              <div className="md:w-56 shrink-0 flex flex-col justify-center bg-secondary/40 border-t border-border/60 md:border-t-0 md:border-l md:border-l-border/60 p-6 md:p-8 gap-2">
                <p className="font-serif font-bold text-sm text-accent">Editorial Integrity</p>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Commercial relationships never compromise our rankings, determined solely by platform quality and objective editorial assessment.
                </p>
              </div>
            </div>
            <div className="h-px w-full bg-accent/15" />
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
