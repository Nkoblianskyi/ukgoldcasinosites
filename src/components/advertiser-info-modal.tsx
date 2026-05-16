"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md bg-card animate-scale-in shadow-2xl">
        <div className="h-px bg-accent" />

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center border border-accent/50 bg-accent/10">
              <Info className="w-4 h-4 text-accent" aria-hidden="true" />
            </div>
            <h2 className="font-serif font-bold text-lg text-primary-foreground">Advertiser Disclosure</h2>
          </div>
          <button
            onClick={onClose}
            className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <p className="text-sm font-serif font-semibold text-foreground leading-snug">
            EliteUKCasinoSites.com is a free comparison service helping UK players find the best UKGC-licensed casinos.
          </p>
          <div className="space-y-3 border-t border-border pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We may receive affiliate commissions when you register with featured casinos through our links. These partnerships help us provide free editorial content and exclusive bonuses, but never influence our rankings or reviews.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All featured casinos hold valid UK Gambling Commission licences, ensuring full player protection.
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Casino offers change regularly. Always verify current terms directly with the operator before claiming. Gamble responsibly - BeGambleAware.org.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-semibold tracking-wide border border-primary-foreground/20 hover:bg-primary/90 transition-colors duration-200"
            >
              Understood
            </button>
          </div>
        </div>

        <div className="h-px bg-accent/30" />
      </div>
    </div>
  )
}
