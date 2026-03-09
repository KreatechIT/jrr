"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

function Partners({ cusIndex }) {
  const [caroIndex, setCaroIndex] = useState(cusIndex ? cusIndex : 0);
  const Partners = [
    {
      title: "Our Global Partner",
      items: [
        // "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/dynamic-lifecycle.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/sims-recycling.jpg",
      ],
    },
    {
      title: "Our Respective Vendors",
      items: [
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/robi-airtel.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Grameenphone.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Banglalink.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/zte.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/vivo.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/symphony.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/samsung.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/tecno.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/sembcorp.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/jr-recycling-pic-21.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Huawei.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/ericsson.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/DHL.jpg",
      ],
    },
    {
      title: "Our Valuable Clients",
      items: [
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Bangladesh-army.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/rab.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/police.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/nsi.png",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Bangladesh-Bank.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/civil-aviation-authority-logo.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/bd-railway.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Biman-Bangladesh-Airlines.jpg",
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/unicef.png",
      ],
    },
  ];

  return (
    <div className="px-[6%] pb-[100px] w-full h-auto">
      <div className="flex space-x-5 place-content-center place-items-center justify-items-center justify-center">
        {Partners.map((data, index) => (
          <button
            key={index}
            onClick={() => setCaroIndex(index)}
            className={`flex mt-[30px] ${
              index === caroIndex
                ? "bg-[#43AC4D] text-white/75"
                : "bg-[#43AC4D]/40 text-black/75"
            }   hover:bg-[#43AC4D] hover:scale-110 place-content-center w-[40%] mobile:h-[80px] mobile:leading-[20px] laptop:leading-[60px] laptop:h-[60px] transition-all px-[15px] rounded-md space-x-2 place-items-center`}
          >
            <p className="font-[700] mobile:text-[16px] laptop:text-[24px]">
              {data.title}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-[40px] flex flex-wrap gap-y-[30px] gap-x-[10px] place-content-center place-items-center justify-items-center justify-center">
        {Partners[caroIndex].items.map((data, index) => (
          <Slide direction="up" duration={1000} key={index}>
            <div>
              <Image
                loading="eager"
                width={200}
                height={200}
                alt=""
                className="h-[75%] transition-all duration-700 hover:scale-110 border-4 border-[#43AC4D] w-[95%]"
                src={data}
              />
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default Partners;
