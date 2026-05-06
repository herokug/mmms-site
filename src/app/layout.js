import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BackgroundFX } from "@/components/background-fx";
import { StartupSplash } from "@/components/startup-splash";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sinhalaIsiwara = localFont({
  src: "../../public/fonts/UN-Isiwara.ttf",
  variable: "--font-sinhala-isiwara",
  display: "swap",
});

const sinhalaGanganee = localFont({
  src: "../../public/fonts/UN-Ganganee.ttf",
  variable: "--font-sinhala-ganganee",
  display: "swap",
});

export const metadata = {
  title: "Mathara Malli Music Studio",
  description:
    "Music Production • Recording • Foley • Mixing & Mastering — Dematapitiya, Sri Lanka",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sinhalaIsiwara.variable} ${sinhalaGanganee.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StartupSplash />
          <SiteHeader />
          <BackgroundFX />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
