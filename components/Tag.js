import React from "react";
import Image from "next/image";
import AboutImage from "../assets/about.png";

function Tag({ tag }) {
  return (
    <div>
      <Image
        loading="eager"
        src={AboutImage}
        width={60}
        height={60}
        alt="jr-recycling-solution-ltd-wastebin"
      />
      <h1 className="text-[#39B54A] text-xl font-bold mt-[17px] uppercase">
        {tag}
      </h1>
    </div>
  );
}

export default Tag;
