"use client"

import { useState } from "react"

const FAQS = [
  {
    id: "faq-1",
    question: "How does UKGoldCasinoSites select its gold-rated operators?",
    answer:
      "Our editorial board applies a rigorous 30-point assessment to every operator, covering UKGC licensing status, financial security, game library breadth, software quality, welcome bonus value, wagering transparency, withdrawal speeds, and customer support quality. Only operators that pass every criterion earn a gold rating on ukgoldcasinosites.com.",
  },
  {
    id: "faq-2",
    question: "Are all listed casinos legal and fully licensed for UK players?",
    answer:
      "Without exception. Every operator featured on ukgoldcasinosites.com holds a current licence issued by the UK Gambling Commission — the strictest regulatory body in the world for online gambling. Licensed casinos must segregate player funds, enforce responsible gambling tools, and submit to regular independent audits. Your money and personal data are protected under UK law.",
  },
  {
    id: "faq-3",
    question: "What kinds of welcome bonuses do gold-rated UK casinos offer?",
    answer:
      "Gold-rated operators typically offer matched deposit bonuses (100% up to £100–£500), free spins bundles on premium slots, cashback on initial losses, and no-deposit welcome credits. Our editorial team scrutinises every offer for wagering requirements, time limits, and game restrictions before recommending it.",
  },
  {
    id: "faq-4",
    question: "How do I claim a welcome bonus from one of your listings?",
    answer:
      "Click the 'Claim Offer' button alongside any listed operator, which takes you directly to their registration page. Complete account verification with accurate personal details, make a qualifying deposit, and follow any opt-in steps in the offer terms. Promo codes, where required, are noted on each listing.",
  },
  {
    id: "faq-5",
    question: "Which payment methods are accepted at UK casinos?",
    answer:
      "All gold-rated casinos accept Visa and Mastercard debit cards, as well as e-wallets including PayPal, Skrill, and Neteller. Bank transfers, Paysafecard, Apple Pay, and Google Pay are also widely supported. Note that UK regulations prohibit the use of credit cards for gambling since April 2020.",
  },
  {
    id: "faq-6",
    question: "Can I access gold-rated casinos on my mobile device?",
    answer:
      "Yes. All recommended operators offer a full-featured mobile experience via a dedicated iOS and Android application or a responsive browser site. You can play the complete game library, manage deposits and withdrawals, claim bonuses, and contact support directly from any modern smartphone or tablet.",
  },
  {
    id: "faq-7",
    question: "What authority does the UK Gambling Commission have?",
    answer:
      "The UK Gambling Commission is the statutory body responsible for licensing all gambling operators serving UK customers. It operates under the Gambling Act 2005 and enforces standards covering game fairness, player protection, anti-money laundering, and responsible gambling. Operators who breach UKGC requirements face significant fines and licence revocation.",
  },
  {
    id: "faq-8",
    question: "Where can I find support for responsible gambling?",
    answer:
      "All UKGC-licensed casinos must offer deposit limits, session time limits, reality checks, cooling-off periods, and self-exclusion. For independent support, contact BeGambleAware.org (0808 8020 133, free, 24/7), GamCare.org.uk, or Gambling Therapy. To self-exclude from all UK-licensed gambling sites simultaneously, register with GamStop.co.uk.",
  },
]

export function ClubFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1")

  return (
    <section className="py-10 md:py-16 bg-secondary/10 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-accent" />
          <span className="text-[10px] font-sans font-bold tracking-[0.38em] uppercase text-accent">
            Member Enquiries
          </span>
          <div className="flex-1 h-px bg-border/50" />
        </div>

        {/* Two-column layout: title left, questions right */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">

          {/* Left — sticky label + description */}
          <div className="md:w-56 shrink-0">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              Frequently<br />Asked<br />Questions
            </h2>
            <div className="h-px bg-accent/40 mb-4" />
            <p className="text-xs text-muted-foreground leading-relaxed font-sans">
              Everything you need to know about gold-rated UK casino operators, bonuses, payments, and responsible play.
            </p>
          </div>

          {/* Right — FAQ rows */}
          <div className="flex-1 border border-border/50">
            {FAQS.map((faq, i) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className={`${i !== 0 ? "border-t border-border/50" : ""}`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className={`w-full flex items-start justify-between gap-4 px-5 py-4 text-left transition-colors
                      ${isOpen ? "bg-secondary/40" : "bg-card hover:bg-secondary/20"}
                    `}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-[9px] font-sans font-bold text-accent/40 tracking-widest mt-1 shrink-0 w-5 leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif font-semibold text-sm text-foreground leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`text-accent/60 shrink-0 mt-0.5 text-lg leading-none font-sans font-light transition-transform duration-200
                        ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 bg-secondary/40 border-t border-border/50">
                      <div className="pl-8">
                        <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
