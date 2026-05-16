import Link from "next/link"
import Image from "next/image"

/** Roulette wheel casino logo icon — matches header */
function CasinoLogo({ className }: { className?: string }) {
  const gold = "hsl(42,68%,48%)"
  const dark = "hsl(42,68%,22%)"
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="15" stroke={gold} strokeWidth="1.5" />
      <circle cx="16" cy="16" r="10.5" stroke={gold} strokeWidth="1" />
      {[0,45,90,135,180,225,270,315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 16 + Math.cos(rad) * 10.5
        const y1 = 16 + Math.sin(rad) * 10.5
        const x2 = 16 + Math.cos(rad) * 5.5
        const y2 = 16 + Math.sin(rad) * 5.5
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={gold} strokeWidth="1" />
      })}
      {[22.5,112.5,202.5,292.5].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const r = 12.75
        const x = 16 + Math.cos(rad) * r
        const y = 16 + Math.sin(rad) * r
        return <circle key={angle} cx={x} cy={y} r="1.6" fill={gold} opacity="0.75" />
      })}
      <circle cx="16" cy="16" r="5" fill={dark} stroke={gold} strokeWidth="1" />
      <circle cx="16" cy="16" r="2.5" fill={gold} />
      <circle cx="16" cy="16" r="1" fill={dark} />
    </svg>
  )
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Responsible Gaming", href: "/responsible-gaming" },
]

const TRUST_LOGOS = [
  { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/" },
  { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/" },
  { src: "/gordon.png", alt: "Gambling Therapy", href: "https://gordonmoody.org.uk/" },
  { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-accent/30">

      {/* 3px gold rule */}
      <div className="h-1 w-full bg-accent" />

      <div className="container mx-auto px-4 pt-10 pb-6">

        {/* Three-column editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border/50">

          {/* COL 1 — Brand + tagline */}
          <div className="p-6 md:p-8 border-b border-border/50 md:border-b-0 md:border-r border-border/50 flex flex-col gap-5">
            <Link href="/" aria-label="UKGoldCasinoSites home" className="flex items-center gap-3 group">
              <CasinoLogo className="w-9 h-9 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
              <div className="flex flex-col gap-0.5">
                <span className="font-serif font-bold text-accent text-2xl leading-none uppercase tracking-tight">
                  UK Gold Casino Sites
                </span>
                <span className="text-[9px] font-sans tracking-[0.25em] uppercase text-foreground/60">
                  ukgoldcasinosites.com
                </span>
              </div>
            </Link>

            <div className="h-px bg-border/50" />

            <p className="text-xs text-foreground/75 leading-relaxed font-sans">
              Britain&apos;s independent gold-standard casino comparison platform. Every operator rigorously assessed, UKGC-verified, and curated for discerning UK players.
            </p>

            <div className="mt-auto pt-4 border-t border-border/40">
              <p className="text-[9px] font-sans font-bold tracking-[0.25em] uppercase text-accent mb-1">
                Gambling Helpline - Free 24/7
              </p>
              <p className="font-serif font-bold text-lg text-accent">0808 8020 133</p>
            </div>
          </div>

          {/* COL 2 — Navigation */}
          <div className="p-6 md:p-8 border-b border-border/50 md:border-b-0 md:border-r border-border/50">
            <p className="text-[9px] font-sans font-bold tracking-[0.35em] uppercase text-accent mb-4">
              Site Pages
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col divide-y divide-border/40">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2.5 text-xs text-foreground/80 hover:text-accent transition-colors font-sans group"
                    >
                      {item.label}
                      <span className="w-0 group-hover:w-4 h-px bg-accent transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* COL 3 — Responsible gaming notice */}
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <p className="text-[9px] font-sans font-bold tracking-[0.35em] uppercase text-accent mb-0">
              Responsible Gaming
            </p>
            <p className="text-xs text-foreground/75 leading-relaxed font-sans">
              All operators listed on ukgoldcasinosites.com hold valid UK Gambling Commission licences. Gambling is prohibited for persons under 18 years of age.
            </p>
            <p className="text-xs text-foreground/75 leading-relaxed font-sans">
              Never stake more than you can comfortably afford to lose. Use deposit limits, reality checks, and self-exclusion tools - all available inside your casino account.
            </p>
            <div className="mt-auto pt-4 border-t border-border/40">
              <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-accent">
                When the fun stops - Stop.
              </p>
            </div>
          </div>

        </div>

        {/* Trust logos row */}
        <div className="py-7 border-x border-b border-border/50">
          <p className="text-center text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-foreground/50 mb-5">
            Verified &amp; Endorsed By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {TRUST_LOGOS.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.alt}
                className="opacity-90 hover:opacity-100 transition-opacity duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  className="object-contain h-7 w-auto"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-5">
          <p className="text-[10px] text-foreground/60 leading-relaxed text-center max-w-2xl mx-auto mb-4 font-sans">
            <strong className="text-foreground/80">ukgoldcasinosites.com</strong> is an independent affiliate comparison service. Commission may be received when you register through our links. All listed operators hold valid UKGC licences. 18+ only. T&amp;Cs apply.
          </p>
          <div className="h-px bg-border/40 mb-4" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-[10px] font-sans text-foreground/60">
            <span>&copy; {year} ukgoldcasinosites.com &mdash; All rights reserved.</span>
            <div className="flex items-center gap-3">
              <span className="text-accent font-semibold tracking-widest uppercase">UKGC Licensed</span>
              <span>·</span>
              <span className="text-accent font-bold">18+</span>
              <span>·</span>
              <span className="text-foreground/70">BeGambleAware.org</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
