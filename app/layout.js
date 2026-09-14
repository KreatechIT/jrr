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

export const metadata = {
  title: "E-Waste Recycling And Management | JR Recycling Solutions BD",
  description:
    "Choose JR Recycling Solutions for e-waste recycling and management in Bangladesh, with safe collection, processing, recycling and disposal support for firms.",
  alternates: {
    canonical: "https://jrrecyclingsolutionsltd.com.bd/",
  },
};

export default function RootLayout({ children, params }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jrrecycling" />
        <meta
          name="twitter:description"
          content="At jr recycling solution ltd, we offer top-notch, eco-friendly e-waste management services across bangladesh, ensuring safe and efficient recycling of all electronic waste."
        />
        <meta
          name="twitter:app:name:iphone"
          content="Jrrecycling solution ltd"
        />
        <meta name="twitter:app:id:iphone" content="" />
        <meta name="twitter:app:name:ipad" content="Jrrecycling solution ltd" />
        <meta name="twitter:app:id:ipad" content="" />
        <meta
          name="twitter:app:name:googleplay"
          content="Jrrecycling solution ltd"
        />
        <meta name="twitter:app:id:googleplay" content="" />
        <meta name="twitter:app:country" content="Bangladesh" />

        <meta
          property="og:title"
          content="Jr Recycling Is the Best E-Waste Recycling Company in Bangladesh"
        />
        <meta property="og:site_name" content="Jr recycling solution Ltd" />
        <meta
          property="og:url"
          content="https://jrrecyclingsolutionsltd.com.bd/"
        />
        <meta
          property="og:description"
          content="JR Recycling Solution Ltd, the best e-waste recycling company, is pioneering in addressing Dhaka's e-waste crisis through innovative recycling and disposal solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL to your image here" />
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
