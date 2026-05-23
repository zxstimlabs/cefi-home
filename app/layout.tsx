import { Geist_Mono, Noto_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "CeFi.vn",
  description: "Minh bạch hoá dữ liệu của tài chính tập trung",
  metadataBase: new URL("https://www.cefi.vn"),
  openGraph: {
    title: "CeFi.vn",
    description: "Minh bạch hoá dữ liệu của tài chính tập trung",
    url: "https://www.cefi.vn",
    siteName: "CeFi.vn",
    images: [
      {
        url: "/cefi-vn-tbn.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CeFi.vn",
    description: "Minh bạch hoá dữ liệu của tài chính tập trung",
    creator: "@zxstim",
    images: ["/cefi-vn-tbn.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
