import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | UKGoldCasinoSites.com",
  description:
    "How ukgoldcasinosites.com collects, uses, and protects your personal data in compliance with UK GDPR and the Data Protection Act 2018.",
}

const SECTIONS = [
  {
    title: "Information We Collect",
    body: null,
    items: [
      ["Personal Identifiers", "If you contact our editorial team or subscribe to updates, we may collect your name, email address, and any information you voluntarily provide."],
      ["Usage Data", "We automatically collect data about your interactions with our site: pages viewed, time on site, referring sources, browser type, device type, and IP address."],
      ["Cookies & Tracking", "We use cookies and similar technologies to enhance your browsing experience. See our Cookie Policy for full details."],
    ],
  },
  {
    title: "How We Use Your Information",
    body: "We use collected information to: operate and improve our website; personalise your experience; send editorial updates (with your consent); respond to enquiries; analyse usage patterns; comply with legal obligations; and detect and prevent fraud or security threats.",
  },
  {
    title: "Legal Basis for Processing",
    body: null,
    items: [
      ["Consent", "Where you have given explicit permission, such as for newsletter subscriptions or marketing communications."],
      ["Legitimate Interests", "Where processing is necessary for our business operations, provided your rights are not overridden by those interests."],
      ["Legal Obligation", "Where we must comply with applicable UK law and regulatory requirements."],
    ],
  },
  {
    title: "Information Sharing & Disclosure",
    body: "We do not sell, trade, or rent your personal information to third parties. We may share data only with: trusted service providers assisting with hosting and analytics (bound by confidentiality agreements); legal authorities when required by UK law; and in the event of a business transfer, subject to equivalent privacy protections.",
  },
  {
    title: "Data Security",
    body: "We implement robust technical and organisational measures including SSL encryption, secure server infrastructure, strict access controls, and regular security reviews. No internet transmission is entirely secure, but we apply industry best-practice safeguards at all times.",
  },
  {
    title: "Data Retention",
    body: "We retain personal information only as long as necessary to fulfil the purposes outlined in this policy, or as required by UK law. When data is no longer needed, we securely delete or anonymise it in accordance with our internal retention schedule.",
  },
  {
    title: "Your Rights Under UK GDPR",
    body: null,
    items: [
      ["Right of Access", "Request a copy of the personal data we hold about you."],
      ["Right to Rectification", "Correct inaccurate or incomplete personal information."],
      ["Right to Erasure", "Request deletion of your data where no legitimate basis for retention exists."],
      ["Right to Restrict Processing", "Limit how we use your data in certain circumstances."],
      ["Right to Data Portability", "Receive your data in a structured, machine-readable format."],
      ["Right to Object", "Object to processing based on legitimate interests or direct marketing."],
      ["Right to Withdraw Consent", "Withdraw previously given consent at any time without detriment."],
    ],
  },
  {
    title: "Third-Party Links",
    body: "Our website links to external casino operators and third-party services. We are not responsible for the privacy practices of those external sites. We recommend reviewing their individual privacy policies before providing personal information.",
  },
  {
    title: "Children's Privacy",
    body: "Our website is intended exclusively for individuals aged 18 and over. We do not knowingly collect personal information from anyone under 18. If you believe we have inadvertently done so, contact us immediately and we will remove the data.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Material changes will be communicated by updating the effective date and, where appropriate, by prominent notice on our site.",
  },
  {
    title: "Contact Us",
    body: "To exercise your data rights or raise a question, contact us at: privacy@ukgoldcasinosites.com. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
                At <span className="text-foreground font-semibold">ukgoldcasinosites.com</span>, safeguarding your privacy is our paramount concern. This Privacy Policy outlines how we collect, use, store, and protect your personal information in full compliance with UK GDPR and the Data Protection Act 2018.
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
                    {section.items && (
                      <div className="border border-border/60">
                        {section.items.map(([title, desc], i) => (
                          <div
                            key={title}
                            className={`flex gap-3 bg-card px-4 py-3.5 ${i !== 0 ? "border-t border-border/50" : ""}`}
                          >
                            <div className="w-0.5 shrink-0 bg-accent/40 self-stretch" />
                            <div>
                              <p className="font-serif font-semibold text-xs text-accent mb-0.5">{title}</p>
                              <p className="text-xs text-muted-foreground leading-relaxed font-sans">{desc}</p>
                            </div>
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
