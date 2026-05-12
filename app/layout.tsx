import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "UKGoldCasinoSites | Best UK Gold-Rated Casinos 2025 | ukgoldcasinosites.com",
  description:
    "The definitive guide to the finest UK-licensed casinos. Gold-rated reviews, exclusive member bonuses and UKGC-verified operators - curated by the editorial board at ukgoldcasinosites.com.",
  keywords:
    "UK gold casino sites, best UK casinos 2025, UK casino comparison, UKGC licensed casinos, UK casino bonuses, ukgoldcasinosites, gold rated casinos UK",
  metadataBase: new URL("https://ukgoldcasinosites.com"),
  openGraph: {
    title: "UKGoldCasinoSites | Best UK Gold-Rated Casinos 2025",
    description:
      "The definitive guide to the finest UK-licensed casinos. Gold-rated reviews, exclusive member bonuses and UKGC-verified operators.",
    url: "https://ukgoldcasinosites.com",
    siteName: "UKGoldCasinoSites",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
