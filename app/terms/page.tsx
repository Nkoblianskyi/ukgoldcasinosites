import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms & Conditions | UKGoldCasinoSites.com",
  description:
    "Full terms and conditions for ukgoldcasinosites.com - covering eligibility, affiliate disclosure, 18+ rules, responsible gambling, and your legal rights as a UK player.",
}

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing and using ukgoldcasinosites.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy in their entirety. If you do not agree with any part of these terms, you must discontinue use of our website immediately. We reserve the right to amend these terms at any time without prior notice; your continued use of the site following any revision constitutes your acceptance of the updated terms.",
  },
  {
    title: "Nature of Our Service",
    body: "ukgoldcasinosites.com is an independent editorial comparison and information service. We do not operate as a casino, accept or place wagers, hold a gambling licence, or provide any gambling services. We publish independent editorial reviews, operator comparisons, bonus analyses, and links to third-party UK Gambling Commission licensed casino operators. We are not responsible for the services, content, promotions, security, or conduct of any third-party casino accessed through our site.",
  },
  {
    title: "Age Requirement - 18+ Only",
    intro: "Gambling is strictly prohibited for persons under the age of 18. This is not a recommendation - it is a legal requirement under UK law.",
    items: [
      ["You Must Be 18 or Over", "By using this website, you confirm that you are at least 18 years of age. We reserve the right to request proof of age at any time and to restrict access where age cannot be verified. If you are under 18, you must leave this website immediately."],
      ["Underage Gambling Is Illegal", "Under the Gambling Act 2005, it is a criminal offence to gamble under the age of 18 in the United Kingdom. All operators listed on our site are required to implement robust age verification checks before allowing any player to deposit or gamble."],
      ["Parental Controls", "If you share a device with minors, we strongly recommend installing parental control software such as Gamban, Net Nanny, or Cybersitter to prevent access to gambling-related content. The UK Gambling Commission provides a list of approved parental control tools at gamblingcommission.gov.uk."],
      ["Operator Responsibilities", "Every casino operator featured on ukgoldcasinosites.com holds a valid UKGC licence and is legally obligated to perform identity and age verification before permitting any player to wager real money. Operators who fail these obligations face significant regulatory sanctions."],
    ],
  },
  {
    title: "Responsible Gambling",
    intro: "We are committed to the promotion of responsible gambling. Gambling should always be an enjoyable leisure activity - never a way to generate income or escape problems.",
    items: [
      ["Know Your Limits", "Set strict deposit limits, session time limits, and loss limits before you begin playing. Every UKGC-licensed casino is legally required to offer these tools free of charge within your account settings. Review and update your limits regularly."],
      ["Self-Exclusion — GamStop", "GamStop (gamstop.co.uk) is a free, UK-wide self-exclusion scheme. Registering with GamStop will block you from all UKGC-licensed gambling sites for a minimum of 6 months. This is the most effective immediate step if you feel gambling is becoming a problem."],
      ["Reality Checks", "All UKGC-licensed operators must provide session reminders showing how long you have been playing and how much you have spent. Enable these notifications and take them seriously."],
      ["Cooling-Off Periods", "If you feel you need a break but do not want full self-exclusion, you can request a temporary account suspension (cooling-off period) of 24 hours, 1 week, 1 month, or longer directly from your casino account."],
      ["Seek Help Immediately If You Need It", "If gambling is causing you financial, emotional, or relationship problems, free confidential support is available 24 hours a day, 7 days a week. Do not wait — contact one of the organisations listed below."],
    ],
  },
  {
    title: "Problem Gambling Support Organisations",
    intro: "The following organisations provide free, confidential support to anyone affected by problem gambling in the United Kingdom.",
    contacts: [
      { name: "BeGambleAware", desc: "The UK's leading responsible gambling charity. Free helpline and live chat.", phone: "0808 8020 133", url: "begambleaware.org" },
      { name: "GamCare", desc: "Specialist counselling, support groups, and a 24/7 national helpline.", phone: "0808 8020 133", url: "gamcare.org.uk" },
      { name: "Gamblers Anonymous UK", desc: "Peer support meetings across the UK for problem gamblers.", phone: "0330 094 0322", url: "gamblersanonymous.org.uk" },
      { name: "Gambling Therapy", desc: "International online support service, available in multiple languages.", phone: "Online only", url: "gamblingtherapy.org" },
      { name: "National Gambling Helpline", desc: "Free, confidential advice available 24 hours a day, 7 days a week.", phone: "0808 8020 133", url: "begambleaware.org" },
    ],
  },
  {
    title: "Geographic Restrictions",
    body: "Our service is primarily intended for adult users located in the United Kingdom. Gambling laws and regulations vary significantly between jurisdictions. It is your sole responsibility to determine whether accessing gambling-related content and using casino services is lawful in your jurisdiction before proceeding. We make no representation that our content complies with laws of countries outside the United Kingdom.",
  },
  {
    title: "Affiliate Disclosure",
    body: "ukgoldcasinosites.com participates in affiliate marketing programmes operated by the casino operators featured on our site. When you click an operator link on our website and subsequently register or make a qualifying deposit, we may receive a commission from that operator. This commercial arrangement does not influence our editorial reviews, gold ratings, or rankings, which are determined solely by our independent assessment criteria. All affiliate relationships are clearly disclosed in accordance with the UK CAP Code and relevant ASA guidelines.",
  },
  {
    title: "Accuracy of Information",
    body: "We make every reasonable effort to ensure that all information published on ukgoldcasinosites.com - including casino welcome bonuses, wagering requirements, game libraries, and operator features - is accurate and current at the time of publication. However, casino offers, terms, and features change frequently and without notice. We cannot guarantee that all information is up to date at all times. You must verify the current terms and conditions directly with the casino operator before registering, depositing, or claiming any bonus.",
  },
  {
    title: "Intellectual Property",
    body: "All content on ukgoldcasinosites.com, including but not limited to text, editorial reviews, graphics, brand identity, and site architecture, is the intellectual property of ukgoldcasinosites.com or its licensed content suppliers and is protected under UK and international copyright, trade mark, and related laws. You may not reproduce, redistribute, scrape, republish, or commercially exploit any content from this website without prior written consent from ukgoldcasinosites.com.",
  },
  {
    title: "Limitation of Liability",
    body: "ukgoldcasinosites.com is provided on an 'as is' and 'as available' basis without any warranty of any kind. To the fullest extent permitted by applicable UK law, we expressly disclaim all liability for any direct, indirect, incidental, consequential, or punitive losses or claims arising from: your use of or inability to use this website; reliance on any information provided on this website; use of third-party casino sites accessed via links on our website; or any gambling losses incurred at any operator we feature or review. This limitation does not affect your statutory rights as a UK consumer.",
  },
  {
    title: "Governing Law & Jurisdiction",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. You agree to submit to the exclusive jurisdiction of the courts of England and Wales in connection with any disputes arising under or in connection with these terms or your use of ukgoldcasinosites.com.",
  },
  {
    title: "Contact",
    body: "For questions, concerns, or legal correspondence regarding these Terms and Conditions, please contact our legal team at: legal@ukgoldcasinosites.com. We aim to respond to all enquiries within 5 business days.",
  },
]

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-foreground/70 font-sans">
            Effective: <span className="text-accent font-semibold">2026</span>
            <span className="mx-2 opacity-30">·</span>
            ukgoldcasinosites.com
            <span className="mx-2 opacity-30">·</span>
            <span className="text-accent font-semibold">18+ Only · Gambling Can Be Addictive · Play Responsibly</span>
          </p>
        </div>
        <div className="h-px w-full bg-accent/15" />
      </section>

      {/* 18+ WARNING BANNER */}
      <section className="bg-accent/10 border-b border-accent/40">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 border-2 border-accent flex items-center justify-center">
              <span className="font-serif font-bold text-sm text-accent leading-none">18+</span>
            </div>
            <p className="text-sm text-foreground/90 font-sans leading-relaxed">
              <strong className="text-foreground">This website is strictly for adults aged 18 and over.</strong>{" "}
              Gambling is prohibited for anyone under 18 years of age. If you are struggling with gambling, free confidential help is available 24/7:{" "}
              <strong className="text-accent">BeGambleAware.org · 0808 8020 133</strong>
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <div className="border-l-[3px] border-accent bg-secondary/30 px-5 py-4 mb-10">
              <p className="text-sm text-foreground/85 leading-relaxed font-sans">
                Please read these Terms and Conditions carefully before using{" "}
                <strong className="text-foreground">ukgoldcasinosites.com</strong>. These terms govern your access to and use of our gold-standard UK casino comparison service and constitute a legally binding agreement. By continuing to use this site you confirm you are aged 18 or over and agree to these terms in full.
              </p>
            </div>

            <div className="space-y-12">
              {SECTIONS.map((section, idx) => (
                <div key={section.title} id={`section-${idx + 1}`}>

                  {/* Section heading row */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-serif text-xs font-bold text-accent leading-none mt-1.5 shrink-0 w-6 tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-serif font-bold text-lg md:text-xl text-foreground mb-1">{section.title}</h2>
                      <div className="h-px bg-border/60" />
                    </div>
                  </div>

                  <div className="pl-10">
                    {/* Optional intro sentence above items */}
                    {"intro" in section && section.intro && (
                      <p className="text-sm text-foreground/85 leading-relaxed font-sans mb-4 font-medium">
                        {section.intro}
                      </p>
                    )}

                    {/* Plain body paragraph */}
                    {"body" in section && section.body && (
                      <p className="text-sm text-foreground/80 leading-relaxed font-sans">{section.body}</p>
                    )}

                    {/* Card items */}
                    {"items" in section && section.items && (
                      <div className="border border-border/60">
                        {section.items.map(([title, desc], i) => (
                          <div
                            key={title}
                            className={`flex gap-3 bg-card px-4 py-4 ${i !== 0 ? "border-t border-border/50" : ""}`}
                          >
                            <div className="w-0.5 shrink-0 bg-accent self-stretch" />
                            <div>
                              <p className="font-serif font-semibold text-sm text-accent mb-1">{title}</p>
                              <p className="text-sm text-foreground/80 leading-relaxed font-sans">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Support contacts */}
                    {"contacts" in section && section.contacts && (
                      <div className="border border-border/60">
                        {section.contacts.map((org, i) => (
                          <div
                            key={org.name}
                            className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-card px-4 py-4 ${i !== 0 ? "border-t border-border/50" : ""}`}
                          >
                            <div className="w-0.5 shrink-0 bg-accent self-stretch hidden md:block" />
                            <div className="flex-1">
                              <p className="font-serif font-semibold text-sm text-accent mb-0.5">{org.name}</p>
                              <p className="text-xs text-foreground/75 font-sans">{org.desc}</p>
                            </div>
                            <div className="text-right shrink-0">
                              <p className="font-sans font-bold text-sm text-foreground">{org.phone}</p>
                              <p className="text-[10px] text-accent/80 font-sans">{org.url}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom reminder */}
            <div className="mt-14 border border-accent/40 bg-accent/5 px-6 py-5">
              <p className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-accent mb-2">
                Remember
              </p>
              <p className="text-sm text-foreground/80 font-sans leading-relaxed">
                Gambling should be fun. Never gamble with money you cannot afford to lose. If you feel gambling is affecting your life, call the <strong className="text-foreground">National Gambling Helpline free on 0808 8020 133</strong> — available 24 hours a day, 7 days a week. You can also self-exclude from all UK gambling sites instantly at <strong className="text-foreground">GamStop.co.uk</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
