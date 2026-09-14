import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "./FloatingButtons";

import bg from "@/assets/jr-recycling-workers.jpg";

const SITE_URL = "https://jrrecyclingsolutionsltd.com.bd";

function BlogLayout({ title, date, description, slug }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: SITE_URL + "/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: SITE_URL + "/blog/" + slug,
      },
    ],
  };

  return (
    <div className="bg-[#1D7773] relative overflow-hidden flex-col w-full h-[540px] flex justify-center items-center content-center justify-items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Image
        loading="eager"
        src={bg}
        fill
        className="object-cover brightness-[0.3]"
        alt="jr recycling waste managenent system"
      />
      <div className="fixed z-[10000] right-[250px] bottom-[30px]">
        <FloatingButton />
      </div>
      <Slide direction="down">
        <p className="text-white laptop:px-6 mobile:px-[20px] mobile:text-[30px] laptop:text-[60px] text-center font-bold">
          {title}
        </p>
      </Slide>
      <Slide direction="up">
        <div className="flex p-4 justify-center flex-wrap">
          <Link
            href="/"
            className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-lg"
          >
            Home
          </Link>
          <span className="mx-1 text-white">/</span>
          <Link
            href="/blog"
            className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-lg"
          >
            Blog
          </Link>
        </div>
        <div className="flex mt-[20px] place-items-center space-x-[10px]">
          <FontAwesomeIcon
            icon={faCalendar}
            color="#39B54A"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p className="font-bold mt-[7px] text-[#39B54A] text-[22px]">
            {date}
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default BlogLayout;
