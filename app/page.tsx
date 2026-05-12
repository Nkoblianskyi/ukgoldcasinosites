"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GoldCasinoList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { ClubFaqSection } from "@/components/faq-section"
import { bettingSites } from "@/data/betting-sites"
import { Star, Shield, Clock, Lock, Award } from "lucide-react"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-3.5 h-3.5">
            <Star className="w-3.5 h-3.5 text-muted-foreground/20" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-3.5 h-3.5 text-accent" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const topSite = bettingSites[0]
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[57px] md:pt-[65px]">

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  HERO - strict heights: 250px mobile / 350px tablet / 400px desktop max */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden border-b border-accent/25"
          style={{ height: "clamp(250px, 40vw, 400px)" }}
        >
          {/* Background image */}
          <Image
            src="/casino-hero.jpg"
            alt="Luxury casino gaming floor with roulette wheels, gold chip stacks and green baize tables"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Layered dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/20" />
          {/* Bottom rule */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-accent" />
              <span className="text-[9px] md:text-[10px] font-sans font-bold tracking-[0.4em] uppercase text-accent">
                Independent Casino Comparison - UK
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.05] text-foreground mb-3 md:mb-5 text-balance">
              Britain&apos;s Gold&#8209;Standard<br />
              Casino Directory
            </h1>

            {/* Sub-copy */}
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 max-w-sm font-sans">
              Every UKGC-licensed operator independently assessed - bonuses, payouts, game libraries, and support scored by our editorial board.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {[
                { icon: <Shield className="w-3 h-3" aria-hidden="true" />, label: "UKGC Verified" },
                { icon: <Award className="w-3 h-3" aria-hidden="true" />, label: "Expert Rated" },
                { icon: <Lock className="w-3 h-3" aria-hidden="true" />, label: "Secure & Safe" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 border border-accent/40 bg-primary/60 px-2.5 py-1.5 text-accent">
                  {b.icon}
                  <span className="text-[9px] font-sans font-semibold tracking-wide uppercase">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-accent/50 shrink-0" aria-hidden="true" />
              <span className="text-[9px] text-muted-foreground/60 font-sans">
                Updated: <span className="text-accent">{currentDate}</span>
              </span>
              <span className="text-muted-foreground/20 text-xs">·</span>
              <button
                onClick={() => setIsAdvertiserModalOpen(true)}
                className="text-[9px] text-muted-foreground hover:text-accent transition-colors font-sans underline underline-offset-2"
              >
                Advertiser Disclosure
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  CASINO LIST */}
        {/* ═══════════════════════════════════════════════════════ */}
        <div id="casino-sites">
          <GoldCasinoList />
        </div>


        {/* ═══════════════════════════════════════════════════════ */}
        {/*  OUR REVIEW PROCESS — horizontal numbered rail          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 bg-secondary/15 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
                Our Review Process
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            <div className="relative">
              {/* Connecting line behind steps */}
              <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-accent/25 z-0" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 relative z-10">
                {[
                  { n: "01", heading: "Licence Check", body: "We verify the operator holds a live UKGC licence before anything else." },
                  { n: "02", heading: "Bonus Audit", body: "Every welcome offer is dissected - wagering terms, game restrictions, expiry." },
                  { n: "03", heading: "Payout Test", body: "Real withdrawal requests submitted across multiple banking methods." },
                  { n: "04", heading: "Game Library", body: "Over 50 categories checked including live tables, RNG slots, and jackpots." },
                  { n: "05", heading: "Final Score", body: "All findings compiled into a single editorial score - no paid influence." },
                ].map((step, i) => (
                  <div key={i} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:px-3">
                    {/* Number badge */}
                    <div className="shrink-0 w-14 h-14 border-2 border-accent bg-background flex items-center justify-center">
                      <span className="font-serif font-bold text-lg text-accent leading-none">{step.n}</span>
                    </div>
                    <div className="md:text-center">
                      <p className="font-serif font-bold text-sm text-foreground mb-1">{step.heading}</p>
                      <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  WHY IT MATTERS — 3-col feature cards                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
                Why It Matters
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
              {[
                {
                  n: "I",
                  heading: "Your Money Is Protected",
                  body: "UKGC-licensed casinos must keep player funds in segregated accounts. If the operator goes into administration, your balance is ringfenced - not used to pay company debts.",
                  note: "Fund segregation mandated by UK law",
                },
                {
                  n: "II",
                  heading: "Fair Play Is Enforced",
                  body: "Every game RNG is independently certified by accredited labs such as eCOGRA or iTech Labs. Results cannot be manipulated - operators face immediate licence revocation for non-compliance.",
                  note: "Independent RNG certification required",
                },
                {
                  n: "III",
                  heading: "Withdrawals Cannot Be Blocked",
                  body: "Licensed operators are legally bound to process all legitimate withdrawals within five business days. Delays without cause are reportable directly to the Gambling Commission.",
                  note: "Enforceable withdrawal rights",
                },
              ].map((card, i) => (
                <div key={i} className="bg-card border-t-4 border-t-accent p-6 md:p-8 flex flex-col gap-4">
                  <span className="font-serif font-bold text-4xl text-accent/20 leading-none select-none">
                    {card.n}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-lg text-foreground mb-3 leading-snug">
                      {card.heading}
                    </h3>
                    <p className="text-[12px] md:text-sm text-muted-foreground leading-relaxed font-sans">
                      {card.body}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <span className="text-[9px] font-sans font-bold tracking-[0.25em] uppercase text-accent/70">
                      {card.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  GOLD STANDARD CHECKLIST                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-12 md:py-16 bg-secondary/15 border-b border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
                Gold Standard Checklist
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground text-balance">
                Gold-Rated vs. Unvetted Operators
              </h2>
              <p className="text-xs text-muted-foreground font-sans md:text-right max-w-xs">
                What separates a verified Gold listing from an operator we decline to feature.
              </p>
            </div>

            {/* Table */}
            <div className="border border-border/60 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-[1fr_80px_80px] bg-card border-b border-border/60">
                <div className="py-3 px-5 text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">
                  Criterion
                </div>
                <div className="py-3 px-3 text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-accent text-center border-l border-border/60">
                  Gold Rated
                </div>
                <div className="py-3 px-3 text-[9px] font-sans font-bold tracking-[0.2em] uppercase text-muted-foreground text-center border-l border-border/60">
                  Others
                </div>
              </div>
              {/* Rows */}
              {[
                { criterion: "Valid UKGC Licence - verified on public register", gold: true, other: false },
                { criterion: "Wagering requirement 35× or below", gold: true, other: false },
                { criterion: "E-wallet withdrawals processed within 4 hours", gold: true, other: false },
                { criterion: "Dedicated UK player support - 24 / 7", gold: true, other: false },
                { criterion: "GamStop self-exclusion integration", gold: true, other: false },
                { criterion: "No withdrawal fees on any banking method", gold: true, other: false },
                { criterion: "Independently certified RNG across all games", gold: true, other: false },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1fr_80px_80px] border-b border-border/50 last:border-0 ${
                    i % 2 === 0 ? "bg-background" : "bg-secondary/20"
                  }`}
                >
                  <div className="py-3.5 px-5 text-xs text-foreground/80 font-sans">
                    {row.criterion}
                  </div>
                  <div className="py-3.5 px-3 border-l border-border/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">✓</span>
                  </div>
                  <div className="py-3.5 px-3 border-l border-border/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-muted-foreground/40">✕</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
                      {/* ═══════════════════════════════════════════════════════ */}
        {/*  OUR PICK — Featured spotlight (index 0) */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-10 md:py-16 bg-secondary/20 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
                Our Selection
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            <h2 className="font-serif font-bold text-xl md:text-3xl text-foreground mb-8 text-balance">
              The Gold Pick - {topSite.name}
            </h2>

            {/* Featured card */}
            <div className="border border-accent/40 bg-card flex flex-col md:flex-row">

              {/* Left — logo zone: solid white, large logo */}
              <div className="md:w-64 shrink-0 bg-white border-b border-border/50 md:border-b-0 md:border-r border-border/50 flex items-center justify-center p-8">
                <Image
                  src={topSite.logo}
                  alt={`${topSite.name} logo`}
                  width={210}
                  height={80}
                  className="object-contain max-h-20 w-full"
                />
              </div>

              {/* Right — details */}
              <div className="flex-1 flex flex-col md:flex-row">

                {/* Info block */}
                <div className="flex-1 p-6 md:p-8 border-b border-border/50 md:border-b-0 md:border-r border-border/50">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-accent">
                      Gold Selection No. 1
                    </span>
                  </div>
                  <p className="font-serif font-bold text-2xl md:text-3xl text-accent mb-1 leading-tight">
                    {topSite.bonus}
                  </p>
                  <p className="text-sm text-foreground/80 font-sans mb-5">{topSite.welcomeOffer}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif font-bold text-2xl text-foreground leading-none">{topSite.score.toFixed(1)}</span>
                    <StarRating rating={topSite.score} />
                    <span className="text-[11px] text-muted-foreground font-sans">{topSite.reviews.toLocaleString()} reviews</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {topSite.features.map((f) => (
                      <span key={f} className="text-[10px] font-sans border border-accent/40 px-2 py-1 text-foreground/75">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA block */}
                <div className="md:w-44 shrink-0 flex flex-col items-center justify-center p-6 gap-3">
                  <div className="text-center mb-2">
                    <p className="text-[9px] font-sans font-bold tracking-[0.25em] uppercase text-accent/60 mb-1">Exclusive Offer</p>
                    <div className="w-8 h-px bg-accent/40 mx-auto" />
                  </div>
                  <Link
                    href={topSite.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-3 bg-accent text-accent-foreground text-xs font-sans font-bold tracking-widest uppercase hover:bg-accent/85 transition-colors"
                  >
                    Claim Offer
                  </Link>
                  <p className="text-[9px] text-muted-foreground font-sans text-center leading-tight">
                    18+ · T&amp;Cs Apply<br />BeGambleAware.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  FAQ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <ClubFaqSection />

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  RESPONSIBLE GAMING FOOTER STRIP */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-6 bg-secondary/30 border-t border-border/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[10px] text-muted-foreground/50 font-sans max-w-2xl mx-auto leading-relaxed">
              18+ only · Gambling can be addictive - please play responsibly ·{" "}
              <Link href="/responsible-gaming" className="text-accent/70 hover:text-accent underline underline-offset-2 transition-colors">
                Responsible Gaming
              </Link>{" "}
              · BeGambleAware.org · GamStop.co.uk ·{" "}
              <button
                onClick={() => setIsAgeModalOpen(true)}
                className="text-accent/70 hover:text-accent underline underline-offset-2 transition-colors"
              >
                Age Verification
              </button>
            </p>
          </div>
        </section>

      </div>

      <SiteFooter />

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
    </main>
  )
}
