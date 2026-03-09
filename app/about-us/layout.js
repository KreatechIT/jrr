import React from "react";

export const metadata = {
  title: "Waste Management E-Waste Recycling Company - JR Recycling",
  description:
    "JR Recycling Solution Ltd, a leading waste management e-waste recycling company, offers innovative disposal solutions to tackle Dhaka's e-waste crisis effectively.",
  alternates: {
    canonical: "https://jrrecyclingsolutionsltd.com.bd/about-us",
  },
};

function layout({ children }) {
  return <div className="bg-white">{children}</div>;
}

export default layout;
