import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  fallback: ["ui-monospace", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"]
});

export const metadata = {
  title: "1 𝓺𝓳𝓬's blog",
  description:
    "1 𝓺𝓳𝓬 is the Founder, a software engineer, and the creator of 2qjc, 3qjc, 4qjc and other open source libraries.",
  openGraph: {
    title: "1 𝓺𝓳𝓬's blog",
    description:
      "1 𝓺𝓳𝓬 is the Founder, a software engineer, and the creator of 2qjc, 3qjc, 4qjc and other open source libraries.",
    url: "https://1qjc.bet",
    siteName: "1 𝓺𝓳𝓬's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@0x1qjc",
    creator: "@0x1qjc",
  },
  metadataBase: new URL("https://1qjc.bet"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${geist.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
