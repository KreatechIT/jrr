import React from "react";

const TITLE = "Data Destruction Services in Bangladesh | JR Recycling";
const DESCRIPTION =
  "JR Recycling Solutions Ltd. offers secure data destruction services in Bangladesh, including HDD degaussing and data elimination for businesses";
const URL = "https://jrrecyclingsolutionsltd.com.bd/services/data-destructions";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Data Destruction Services in Bangladesh",
    "Hard Drive Data Destruction in Bangladesh",
    "Secure Data Destruction",
    "HDD Degaussing Service in Bangladesh",
    "Data Erasure Services",
    "Corporate Data Destruction",
    "Data Destruction Company in Bangladesh",
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

function layout({ children }) {
  return <div className="bg-white">{children}</div>;
}

export default layout;
