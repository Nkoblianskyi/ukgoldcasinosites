"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">

      {/* Top 4px gold bar */}
      <div className="h-1 w-full bg-accent" />

      <div className="bg-primary border-t border-accent/20 shadow-2xl">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 justify-between">

            {/* Left — text */}
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-4 h-px bg-accent" />
                <p className="text-[9px] font-sans font-bold tracking-[0.35em] uppercase text-accent">
                  Cookie Notice — ukgoldcasinosites.com
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                We use cookies to enhance your experience, serve personalised content, and analyse site traffic. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-accent hover:text-accent/70 underline underline-offset-2 transition-colors"
                >
                  Cookie Policy
                </Link>{" "}
                for full details.
              </p>
            </div>

            {/* Right — actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={declineAll}
                className="px-5 py-2.5 text-xs font-sans font-semibold text-muted-foreground border border-border/60 hover:border-muted-foreground/40 hover:text-foreground transition-all duration-200 tracking-wide"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2.5 text-xs font-sans font-bold bg-accent text-accent-foreground hover:bg-accent/85 transition-colors tracking-widest uppercase"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
