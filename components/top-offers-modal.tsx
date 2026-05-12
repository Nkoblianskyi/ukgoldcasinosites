"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const stepped = Math.round(((rating / 10) * 5) / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-4 h-4">
            <Star className="w-4 h-4 text-muted-foreground/20" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-4 h-4 text-accent" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
    >
      <div className="relative w-full max-w-sm bg-card overflow-hidden animate-scale-in shadow-2xl border border-border/60">

        {/* Top gold bar */}
        <div className="h-1 w-full bg-accent" />

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-start justify-between border-b border-border/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-px bg-accent" />
              <p className="text-[8px] font-sans font-bold tracking-[0.35em] uppercase text-accent">
                Gold Selection - Exclusive Offer
              </p>
            </div>
            <h2 className="font-serif font-bold text-xl text-foreground leading-tight">
              Top UK Casino Pick
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-accent transition-colors duration-200 p-1 ml-4 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Logo zone - solid white, tall, large logo */}
        <div className="bg-white border-b border-border/50 flex items-center justify-center px-8 py-6 h-36">
          <Image
            src={topSite.logo || "/placeholder.svg"}
            alt={`${topSite.name} logo`}
            width={240}
            height={96}
            className="object-contain max-h-20 w-full"
          />
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col gap-5">

          {/* Score row */}
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-3xl text-foreground leading-none">{topSite.score.toFixed(1)}</span>
            <div className="flex flex-col gap-1">
              <StarRating rating={topSite.score} />
              <span className="text-[10px] text-muted-foreground font-sans">{topSite.reviews.toLocaleString()} verified reviews</span>
            </div>
          </div>

          {/* Bonus strip */}
          <div className="border-l-[3px] border-l-accent bg-secondary/40 px-4 py-3">
            <p className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-accent mb-1">
              Casino Welcome Bonus
            </p>
            <p className="font-serif font-bold text-xl text-foreground leading-tight">{topSite.bonus}</p>
            <p className="text-sm text-foreground/75 font-sans mt-0.5">{topSite.welcomeOffer}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 text-xs font-sans font-bold tracking-widest uppercase hover:bg-accent/85 transition-colors"
          >
            Claim Casino Bonus Now
          </Link>

          <p className="text-[10px] text-muted-foreground font-sans text-center leading-relaxed">
            18+ · Terms &amp; Conditions Apply · BeGambleAware.org
          </p>
        </div>

        {/* Bottom gold rule */}
        <div className="h-px w-full bg-accent/30" />

      </div>
    </div>
  )
}
