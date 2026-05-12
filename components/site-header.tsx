import Link from "next/link"

/** Roulette wheel casino logo icon */
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
      {/* Outer ring */}
      <circle cx="16" cy="16" r="15" stroke={gold} strokeWidth="1.5" />
      {/* Inner ring */}
      <circle cx="16" cy="16" r="10.5" stroke={gold} strokeWidth="1" />
      {/* Wheel spokes — 8 spokes */}
      {[0,45,90,135,180,225,270,315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 16 + Math.cos(rad) * 10.5
        const y1 = 16 + Math.sin(rad) * 10.5
        const x2 = 16 + Math.cos(rad) * 5.5
        const y2 = 16 + Math.sin(rad) * 5.5
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={gold} strokeWidth="1" />
      })}
      {/* Alternating pocket fills between spokes */}
      {[22.5,112.5,202.5,292.5].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const r = 12.75
        const x = 16 + Math.cos(rad) * r
        const y = 16 + Math.sin(rad) * r
        return <circle key={angle} cx={x} cy={y} r="1.6" fill={gold} opacity="0.75" />
      })}
      {/* Centre hub */}
      <circle cx="16" cy="16" r="5" fill={dark} stroke={gold} strokeWidth="1" />
      <circle cx="16" cy="16" r="2.5" fill={gold} />
      <circle cx="16" cy="16" r="1" fill={dark} />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary border-b border-accent/30">
      {/* Top gold bar */}
      <div className="h-1 w-full bg-accent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* LEFT - Brand mark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="UKGoldCasinoSites - Home"
          >
            <CasinoLogo className="w-8 h-8 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col leading-none select-none">
              <span className="font-serif font-bold text-accent uppercase text-base md:text-lg leading-none tracking-tight">
                UK Gold Casino Sites
              </span>
            </div>
          </Link>

          {/* CENTER — Nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about-us" },
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms" },
              { label: "Responsible Gaming", href: "/responsible-gaming" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans text-muted-foreground hover:text-accent transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT — Trust badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="hidden md:inline-block border border-accent px-2 py-1 text-[9px] font-bold tracking-widest text-accent uppercase">
              18+
            </span>
            <span className="text-[10px] font-sans text-white tracking-widest uppercase">
              UKGC
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
