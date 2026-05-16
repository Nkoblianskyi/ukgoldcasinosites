import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Cookie Policy | UKGoldCasinoSites.com",
  description:
    "How ukgoldcasinosites.com uses cookies and similar tracking technologies, and how you can manage your preferences - in compliance with PECR and UK GDPR.",
}

const SECTIONS = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small text files placed on your device when you visit a website. They are used to make websites function correctly, provide a personalised experience, and supply operators with valuable usage analytics. Cookies typically contain a unique identifier and may record information about your preferences and interactions with the site.",
  },
  {
    title: "Types of Cookies We Use",
    body: null,
    grid: [
      {
        label: "Strictly Necessary Cookies",
        body: "Essential for website functionality and cannot be disabled. They activate in response to actions such as setting privacy preferences or completing forms.",
      },
      {
        label: "Performance & Analytics Cookies",
        body: "Help us understand how visitors interact with our site by collecting anonymous statistical data - visit counts, traffic sources, and popular content areas.",
      },
      {
        label: "Functional Cookies",
        body: "Enable enhanced functionality and personalisation, such as remembering your language or region. Declining these may impair some site features.",
      },
      {
        label: "Targeting & Advertising Cookies",
        body: "Deployed by our advertising partners to build interest profiles and present relevant advertisements. They do not store directly identifiable personal information.",
      },
    ],
  },
  {
    title: "First-Party vs Third-Party Cookies",
    body: "First-party cookies are set directly by ukgoldcasinosites.com for site functionality and analytics. Third-party cookies are set by external services such as Google Analytics, social media platforms, and advertising networks — each governed by their respective privacy policies.",
  },
  {
    title: "How to Manage Cookies",
    body: null,
    grid: [
      {
        label: "Via Our Cookie Banner",
        body: "On your first visit, a consent banner allows you to accept or decline non-essential cookies. Update your preferences at any time via the Cookie Policy link in our footer.",
      },
      {
        label: "Via Your Browser Settings",
        body: "Modern browsers allow you to view and delete existing cookies, block third-party cookies, or block all cookies. Blocking all cookies may impair site functionality.",
      },
      {
        label: "Advertising Opt-Out",
        body: "To opt out of interest-based advertising from participating companies, visit the Digital Advertising Alliance at youronlinechoices.com/uk.",
      },
    ],
  },
  {
    title: "Third-Party Services We Use",
    body: "We use cookies from: Google Analytics (traffic and usage analysis), social media platforms (content sharing integrations), advertising networks (campaign performance), and affiliate partners (referral and conversion tracking).",
  },
  {
    title: "Cookie Lifespan",
    body: "Session cookies are temporary and deleted automatically when you close your browser. Persistent cookies remain on your device for a predetermined period - from days to years - or until you manually delete them.",
  },
  {
    title: "Updates to This Policy",
    body: "We may periodically update this Cookie Policy to reflect changes in our practices, technologies, or regulatory requirements. Material changes will be indicated by an updated effective date at the top of this page.",
  },
  {
    title: "Contact Us",
    body: "For questions about our cookie practices or to exercise your data rights, contact us at: cookies@ukgoldcasinosites.com.",
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-[57px] md:pt-[65px] bg-primary border-b border-accent/30">
        <div className="h-1 w-full bg-accent" />
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-accent" />
            <span className="text-[9px] font-sans font-bold tracking-[0.4em] uppercase text-accent">Legal Document</span>
          </div>
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-3 text-balance leading-tight">
            Cookie Policy
          </h1>
          <p className="text-[11px] text-muted-foreground font-sans">
            Effective: <span className="text-accent font-semibold">2026</span>
            <span className="mx-2 text-border">·</span>
            <span className="text-accent/50">ukgoldcasinosites.com</span>
          </p>
        </div>
        <div className="h-px w-full bg-accent/15" />
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <div className="border-l-[3px] border-accent bg-secondary/30 px-5 py-4 mb-10">
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                This Cookie Policy explains how <span className="text-foreground font-semibold">ukgoldcasinosites.com</span> uses cookies and similar tracking technologies when you visit our site, in compliance with the Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
              </p>
            </div>

            <div className="space-y-10">
              {SECTIONS.map((section, idx) => (
                <div key={section.title}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-serif text-[9px] font-bold text-accent/40 leading-none mt-1.5 shrink-0 w-6">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-serif font-bold text-lg md:text-xl text-foreground mb-1">{section.title}</h2>
                      <div className="h-px bg-border/60" />
                    </div>
                  </div>
                  <div className="pl-10">
                    {section.body && (
                      <p className="text-sm text-muted-foreground leading-relaxed font-sans">{section.body}</p>
                    )}
                    {section.grid && (
                      <div className="grid grid-cols-1 md:grid-cols-2 border border-border/60">
                        {section.grid.map((item, i) => (
                          <div
                            key={item.label}
                            className={`bg-card p-4 md:p-5
                              ${i % 2 !== 0 ? "border-l border-border/60" : ""}
                              ${i >= 2 ? "border-t border-border/60" : ""}
                            `}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 bg-accent shrink-0" />
                              <h3 className="font-serif font-semibold text-sm text-foreground">{item.label}</h3>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed font-sans">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
