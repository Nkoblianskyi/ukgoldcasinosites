"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
              <span className="font-serif font-bold text-sm text-accent">18+</span>
            </div>
            <h2 className="font-serif font-bold text-lg text-primary-foreground">Age Verification</h2>
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
            This website is strictly for individuals aged 18 or over. By using our site, you confirm you meet this legal requirement.
          </p>
          <div className="space-y-3 border-t border-border pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              All featured casinos are licensed by the UK Gambling Commission, ensuring player protection and responsible gambling standards.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gambling should be for entertainment only. Never bet with money you cannot afford to lose.
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              For support with gambling issues: BeGambleAware.org, GamCare.org.uk, or call the National Gambling Helpline: <strong className="text-muted-foreground">0808 8020 133</strong>.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-accent text-accent-foreground text-sm font-sans font-semibold tracking-wide hover:bg-accent/90 transition-colors duration-200"
            >
              I Am 18 or Over
            </button>
          </div>
        </div>

        <div className="h-px bg-accent/30" />
      </div>
    </div>
  )
}
