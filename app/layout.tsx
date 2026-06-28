import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO, PERSON } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { default: SEO.title, template: `%s | ${PERSON.name}` },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: PERSON.name, url: SEO.url }],
  creator: PERSON.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.url,
    title: SEO.title,
    description: SEO.description,
    siteName: PERSON.name,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SEO.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: SEO.twitterHandle,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: { canonical: SEO.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PERSON.name,
              url: SEO.url,
              email: PERSON.email,
              jobTitle: PERSON.role,
              worksFor: { "@type": "Organization", name: "Sky Infoways" },
              address: { "@type": "PostalAddress", addressLocality: "Surat", addressCountry: "IN" },
              sameAs: [PERSON.social.github, PERSON.social.linkedin].filter(Boolean),
              knowsAbout: ["Next.js","React","Node.js","TypeScript","PostgreSQL","MongoDB","Docker","Kubernetes"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
