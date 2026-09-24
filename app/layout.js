import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const SITE_URL = "https://jrrecyclingsolutionsltd.com.bd/";
const DEFAULT_TITLE = "E-Waste Recycling And Management | JR Recycling Solutions BD";
const DEFAULT_DESCRIPTION =
  "Choose JR Recycling Solutions for e-waste recycling and management in Bangladesh, with safe collection, processing, recycling and disposal support for firms.";

export const metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Jr recycling solution Ltd",
    url: SITE_URL,
    title: "Jr Recycling Is the Best E-Waste Recycling Company in Bangladesh",
    description:
      "JR Recycling Solution Ltd, the best e-waste recycling company, is pioneering in addressing Dhaka's e-waste crisis through innovative recycling and disposal solutions.",
    images: [`${SITE_URL}jr.png`],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jrrecycling",
    description:
      "At jr recycling solution ltd, we offer top-notch, eco-friendly e-waste management services across bangladesh, ensuring safe and efficient recycling of all electronic waste.",
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WP3G7BWZ');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              name: "Jr recycling solution Ltd",
              alternateName: "jrrecyclingsolutionltd",
              url: "https://jrrecyclingsolutionsltd.com.bd/",
              logo: "https://jrrecyclingsolutionsltd.com.bd/_next/image?url=/_next/static/media/jr-logo-white.e0360d2b.png&w=640&q=75",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+8801713368998",
                contactType: "customer service",
                contactOption: "TollFree",
                areaServed: "BD",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/jr.enterprise7",
                "",
                "https://www.instagram.com/jrrecyclingsolutionsltd/",
                "https://www.youtube.com/channel/UCqUClhgegFb7rUwYs8L2wDw",
                "https://www.linkedin.com/company/jrrecyclingsolutions/",
              ],
            }),
          }}
        />
      </head>

      <body className={`${roboto.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WP3G7BWZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <section className="justify-center z-[90000000000] content-center flex place-content-center place-items-center items-center">
          <Header />
        </section>
        <div className="bg-white font-roboto">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-22SQS76D6R" />
    </html>
  );
}
