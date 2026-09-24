import React from "react";

export const metadata = {
  title: "About Us | JR Recycling Solutions Bangladesh",
  description:
    "Learn about us at JR Recycling Solutions, a trusted e-waste recycling company in Bangladesh offering safe, responsible and eco-friendly recycling services.",
  alternates: {
    canonical: "https://jrrecyclingsolutionsltd.com.bd/about-us",
  },
  openGraph: {
    title: "About Us | JR Recycling Solutions Bangladesh",
    description:
      "Learn about us at JR Recycling Solutions, a trusted e-waste recycling company in Bangladesh offering safe, responsible and eco-friendly recycling services.",
    url: "https://jrrecyclingsolutionsltd.com.bd/about-us",
  },
  twitter: {
    title: "About Us | JR Recycling Solutions Bangladesh",
    description:
      "Learn about us at JR Recycling Solutions, a trusted e-waste recycling company in Bangladesh offering safe, responsible and eco-friendly recycling services.",
  },
};

function layout({ children }) {
  return <div className="bg-white">{children}</div>;
}

export default layout;
