import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Responsible Gaming | UKGoldCasinoSites.com",
  description:
    "ukgoldcasinosites.com is firmly committed to responsible gambling. Discover protective tools, warning signs, and trusted UK support organisations to help you stay in control.",
}

const TOOLS = [
  {
    label: "Deposit Limits",
    body: "All UKGC-licensed operators must offer daily, weekly, and monthly deposit limits. Set these before you begin playing to keep your spending firmly within a budget you are comfortable with.",
  },
  {
    label: "Reality Checks",
    body: "Reality check notifications remind you how long you have been playing during a session. Use these prompts to take regular breaks and maintain a clear perspective on your gambling.",
  },
  {
    label: "Time-Out Periods",
    body: "If you need a short break, casinos offer time-out suspensions from 24 hours to six weeks. Your account is fully suspended and no marketing is sent during this period.",
  },
  {
    label: "Self-Exclusion",
    body: "Self-exclusion closes your account for a minimum of six months. UKGC-licensed operators must honour exclusion requests and are prohibited from contacting you with promotions.",
  },
]

const WARNING_SIGNS = [
  "Spending more than you can comfortably afford to lose",
  "Gambling to escape personal problems or relieve stress",
  "Chasing losses by increasing your stakes",
  "Concealing the extent of your gambling from family or friends",
  "Neglecting work, family, or personal responsibilities",
  "Borrowing money or selling possessions to fund gambling",
  "Feeling anxious, irritable, or low when not gambling",
  "Repeatedly attempting and failing to cut back or stop",
]

const ORGANISATIONS = [
  {
    name: "BeGambleAware",
    description: "Free, confidential advice, support, and counselling. Call the National Gambling Helpline free on 0808 8020 133.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
  },
  {
    name: "GamCare",
    description: "The leading provider of information, advice, and support for anyone affected by problem gambling in the UK.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
  },
  {
    name: "GamStop",
    description: "Register with GamStop to self-exclude from all UKGC-licensed gambling websites and applications simultaneously, free of charge.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
  },
  {
    name: "Gambling Therapy",
    description: "Free online support and counselling for anyone affected by problem gambling, available globally.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
  },
]

export default function ResponsibleGamingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-[57px] md:pt-[65px] bg-primary border-b border-accent/30">
        <div className="h-1 w-full bg-accent" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-accent">Player Welfare</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-4 text-balance leading-tight">
            Responsible Gaming
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-lg">
            Gambling should always be an enjoyable leisure activity. At ukgoldcasinosites.com, we are firmly committed to promoting safe, controlled, and responsible play for every UK player.
          </p>
        </div>
        <div className="h-px w-full bg-accent/15" />
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-14">

            {/* Commitment */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent" />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Gambling in Control</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Gambling is a legitimate form of entertainment enjoyed safely by millions of UK adults. However, for some individuals it can become harmful. We take our duty of care seriously and actively encourage every visitor to wager responsibly, within their means, and exclusively for entertainment.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  We exclusively feature UKGC-licensed operators, all of whom are required by law to provide comprehensive responsible gambling provisions. If you are ever concerned about your habits, please make use of the resources below without delay.
                </p>
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent" />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Responsible Gambling Tools</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border border-border/60">
                {TOOLS.map((tool, i) => (
                  <div
                    key={i}
                    className={`bg-card p-5 md:p-6
                      ${i % 2 !== 0 ? "border-l border-border/60" : ""}
                      ${i >= 2 ? "border-t border-border/60" : ""}
                    `}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1.5 h-1.5 bg-accent shrink-0" />
                      <h3 className="font-serif font-bold text-sm text-foreground">{tool.label}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{tool.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent" />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Warning Signs</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-sans">
                Recognising the signs of problem gambling is the first step towards regaining control. Seek support if you identify with any of the following:
              </p>
              <div className="border border-border/60">
                {WARNING_SIGNS.map((sign, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 bg-card px-5 py-3.5 hover:bg-secondary/20 transition-colors
                      ${i !== 0 ? "border-t border-border/50" : ""}
                    `}
                  >
                    <div className="w-1 h-1 bg-accent/60 mt-2 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">{sign}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support organisations */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-accent" />
                <h2 className="font-serif font-bold text-xl md:text-2xl text-foreground">Support Organisations</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 border border-border/60">
                {ORGANISATIONS.map((org, i) => (
                  <Link
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-card p-5 md:p-6 flex flex-col gap-3 group hover:bg-secondary/20 transition-colors
                      ${i % 2 !== 0 ? "border-l border-border/60" : ""}
                      ${i >= 2 ? "border-t border-border/60" : ""}
                    `}
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={120}
                      height={36}
                      className="object-contain h-7 w-auto opacity-50 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"
                    />
                    <div>
                      <p className="font-serif font-bold text-sm text-foreground mb-1 group-hover:text-accent transition-colors">{org.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">{org.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div className="border border-border/60 bg-card">
              <div className="h-1 w-full bg-accent" />
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6 md:p-8">
                  <p className="text-[8px] font-sans font-bold tracking-[0.4em] uppercase text-accent/60 mb-2">Need Help Now?</p>
                  <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                    Free, Confidential Support - 24/7
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    The National Gambling Helpline provides free, confidential support, information, and counselling around the clock for anyone concerned about their own gambling or that of someone close to them.
                  </p>
                </div>
                <div className="md:w-52 shrink-0 flex flex-col justify-center items-center bg-secondary/40 border-t border-border/60 md:border-t-0 md:border-l md:border-border/60 p-6 md:p-8 gap-1.5">
                  <p className="font-serif font-bold text-3xl text-accent leading-none">0808 8020 133</p>
                  <p className="text-[9px] text-muted-foreground font-sans text-center mt-1">
                    Free from UK landlines &amp; mobiles
                  </p>
                </div>
              </div>
              <div className="px-6 md:px-8 py-4 border-t border-border/60">
                <p className="text-[9px] text-muted-foreground/40 leading-relaxed font-sans">
                  18+ only. Gambling can be addictive. Please play responsibly. All operators listed on ukgoldcasinosites.com hold valid UKGC licences.
                </p>
              </div>
              <div className="h-px w-full bg-accent/15" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
