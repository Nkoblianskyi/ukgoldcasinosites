"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-3 h-3">
            <Star className="w-3 h-3 text-muted-foreground/20" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-3 h-3 text-accent" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

const RANK_LABELS = [
  "Gold Selection",
  "Highly Commended",
  "Editorial Choice",
  "Club Favourite",
  "Distinguished Pick",
]

export function GoldCasinoList() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-8 h-px bg-accent" />
          <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
            Gold-Rated Operators
          </span>
          <div className="flex-1 h-px bg-border/50" />
          <span className="text-[9px] font-sans text-muted-foreground/40 tracking-wide">
            UKGC Verified
          </span>
        </div>

        {/* Table header (desktop only) */}
        <div className="hidden md:flex items-center border border-border/50 border-b-0 bg-secondary/50">
          <div className="w-12 shrink-0 px-4 py-2.5 border-r border-border/50">
            <span className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">#</span>
          </div>
          <div className="w-48 shrink-0 px-5 py-2.5 border-r border-border/50">
            <span className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">Operator</span>
          </div>
          <div className="flex-1 px-6 py-2.5 border-r border-border/50">
            <span className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">Welcome Offer</span>
          </div>
          <div className="w-32 shrink-0 px-4 py-2.5 border-r border-border/50 text-center">
            <span className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">Score</span>
          </div>
          <div className="w-36 shrink-0 px-4 py-2.5" />
        </div>

        {/* Rows */}
        <div className="border border-border/50 flex flex-col">
          {bettingSites.map((site, index) => {
            const isTop = index === 0
            const rankLabel = RANK_LABELS[index] ?? `Ranked #${index + 1}`

            return (
              <div
                key={site.id}
                className={`
                  animate-fade-in-up
                  ${isTop ? "border-l-[3px] border-l-accent" : "border-l-[3px] border-l-transparent"}
                  ${index !== 0 ? "border-t border-t-border/50" : ""}
                `}
                style={{ animationDelay: `${index * 60}ms` }}
              >

                {/* ── DESKTOP ── */}
                <div className="hidden md:flex items-stretch min-h-[96px] bg-card hover:bg-secondary/20 transition-colors group">

                  {/* Rank */}
                  <div className="w-12 shrink-0 border-r border-border/50 flex flex-col items-center justify-center gap-1 bg-secondary/30">
                    <span className="font-serif font-bold text-lg text-foreground leading-none">{index + 1}</span>
                    {isTop && (
                      <span className="text-[7px] font-sans font-bold tracking-widest uppercase text-accent leading-none">
                        GOLD
                      </span>
                    )}
                  </div>

                  {/* Logo — white background, tall cell, large image */}
                  <div className="w-48 shrink-0 border-r border-border/50 bg-white flex items-center justify-center px-4 py-3">
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={170}
                      height={70}
                      className="object-contain max-h-16 w-full"
                    />
                  </div>

                  {/* Offer */}
                  <div className="flex-1 border-r border-border/50 flex flex-col justify-center px-6 py-4 gap-1.5">
                    <p className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-muted-foreground">
                      Welcome Offer
                    </p>
                    <p className="font-serif font-bold text-2xl md:text-3xl text-accent leading-tight">{site.bonus}</p>
                    <p className="text-sm text-foreground/80 font-sans leading-snug">{site.welcomeOffer}</p>
                    <p className="text-[9px] font-sans text-accent/70 tracking-wide mt-0.5 uppercase font-semibold">{rankLabel}</p>
                  </div>

                  {/* Score */}
                  <div className="w-32 shrink-0 border-r border-border/50 flex flex-col items-center justify-center gap-1.5 px-3 py-4">
                    <span className="font-serif font-bold text-2xl text-foreground leading-none">{site.score.toFixed(1)}</span>
                    <StarRating rating={site.score} />
                    <span className="text-[9px] text-muted-foreground font-sans">{site.reviews.toLocaleString()}</span>
                  </div>

                  {/* CTA */}
                  <div className="w-36 shrink-0 flex flex-col items-center justify-center px-4 py-4 gap-2">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-2.5 text-[10px] font-sans font-bold tracking-[0.18em] uppercase transition-all duration-200 bg-accent text-accent-foreground hover:bg-accent/85"
                    >
                      Claim Offer
                    </Link>
                    <p className="text-[9px] text-foreground/65 font-sans text-center">18+ · T&amp;Cs Apply</p>
                  </div>

                </div>

                {/* ── MOBILE ── */}
                <div className="md:hidden flex flex-col bg-card">

                  {/* Row 1 — Rank + Logo + Score */}
                  <div className="flex items-stretch border-b border-border/40" style={{ minHeight: 72 }}>
                    <div className="w-9 shrink-0 flex items-center justify-center border-r border-border/40 bg-secondary/40">
                      <span className="font-serif font-bold text-sm text-foreground">{index + 1}</span>
                    </div>
                    <div className="w-[40%] bg-white flex items-center justify-center px-3 py-3 border-r border-border/40">
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={140}
                        height={54}
                        className="object-contain max-h-12 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-3 py-2 gap-1">
                      <span className="font-serif font-bold text-xl text-foreground leading-none">{site.score.toFixed(1)}</span>
                      <StarRating rating={site.score} />
                    </div>
                  </div>

                  {/* Row 2 — Offer + CTA */}
                  <div className="flex items-stretch" style={{ minHeight: 64 }}>
                    <div className="flex-1 flex flex-col justify-center px-4 py-3 border-r border-border/40 gap-0.5">
                      <p className="text-[8px] font-sans font-bold tracking-[0.25em] uppercase text-muted-foreground">Offer</p>
                      <p className="font-serif font-bold text-xl text-accent leading-tight">{site.bonus}</p>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-28 shrink-0 flex items-center justify-center text-[10px] font-sans font-bold tracking-[0.15em] uppercase transition-colors bg-accent text-accent-foreground hover:bg-accent/85"
                    >
                      Claim
                    </Link>
                  </div>

                  {/* Row 3 — Terms */}
                  <div className="px-4 py-2 bg-secondary/20 border-t border-border/40">
                    <p className="text-[9px] text-foreground/60 font-sans text-center">
                      18+ · T&amp;Cs Apply
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/30" />
          <p className="text-[9px] text-muted-foreground font-sans text-center tracking-wide">
            All operators hold valid UKGC licences · Rankings reflect independent editorial assessment
          </p>
          <div className="h-px flex-1 bg-border/30" />
        </div>

      </div>
    </section>
  )
}
