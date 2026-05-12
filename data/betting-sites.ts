export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  welcomeOffer: string
  terms: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
}

const defaultTerms =
  "18+ | T&Cs apply on operator site | BeGambleAware.org | Please gamble responsibly | Wagering requirements apply"

const rawSites: Omit<BettingSite, "score">[] = [
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    bonus: "£20 Bonus + 50 Free Spins",
    welcomeOffer: "Deposit £10 & Get £20 Casino Bonus + 50 Free Spins",
    terms: defaultTerms,
    features: ["Premium Slots", "Live Roulette", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/",
    reviews: 5081,
  },
  {
    id: "betfred",
    name: "Betfred Casino",
    logo: "/betfred.webp",
    bonus: "200 Free Spins",
    welcomeOffer: "Stake £10 & Get 200 Free Spins",
    terms: defaultTerms,
    features: ["Fast Payouts", "Live Casino", "Exclusive Slots"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/",
    reviews: 4815,
  },
  {
    id: "midnite",
    name: "Midnite Casino",
    logo: "/midnite.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Wager £20 and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Modern Interface", "Fast Withdrawals", "Exclusive Games"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com/",
    reviews: 6137,
  },

  {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    bonus: "£50 Casino Bonus",
    welcomeOffer: "Bet £10 & Get £50 Casino Bonus",
    terms: defaultTerms,
    features: ["UK Licensed", "Live Dealers", "500+ Slots"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://boylesports.com",
    reviews: 4918,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    bonus: "100 Free Spins",
    welcomeOffer: "Play £10 on Slots and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Live Casino", "Jackpot Slots", "VIP Programme"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/",
    reviews: 5037,
  },
]

export const bettingSites: BettingSite[] = rawSites.map((site, index) => ({
  ...site,
  score: Math.round((9.8 - index * 0.1) * 10) / 10,
}))
