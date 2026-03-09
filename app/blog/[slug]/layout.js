"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getSinglePost } from "@/customFunctions/getSinglePost";
import React, { useEffect, useState } from "react";
import favIcon from "@/app/favicon.ico";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

function Layout({ children, params }) {
  const post = getSinglePost(params.slug);

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  if (hasWindow) {
    return (
      <html lang="en" className={poppins.className}>
        <head>
          <title>{post.title}</title>
          <meta name="description" content={post.excerpt} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href={favIcon} sizes="any" />
          <link
            rel="canonical"
            href="https://jrrecyclingsolutionsltd.com.bd/blog"
          />
        </head>
        <section className="justify-center content-center flex place-content-center place-items-center items-center">
          <Header />
        </section>
        <body>{children}</body>
        <Footer />
      </html>
    );
  }
}

export default Layout;
