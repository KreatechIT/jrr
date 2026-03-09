"use client";
import Layout from "@/components/Layout";
import React from "react";
import { Slide } from "react-awesome-reveal";
import "react-photo-view/dist/react-photo-view.css";

function Page() {
  return (
    <div className="">
      <Layout
        title="Paper Cut"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/profile_show.jpg`}
      />

      <section className="px-[5%] transition-all flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%] px-[6%] pt-[20px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[26px] mt-[30px] text-black/60">
                Newspaper Links
              </p>
            </div>
          </Slide>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
          className="py-[50px] gap-[20px] scrollbar scrollbar-none"
        >
          <iframe
            height={600}
            width={350}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="overflow-hidden hover:scale-110 transition-all duration-700 rounded-xl border-2 border-[#22C55E]"
            src="https://epaper.samakal.com/nogor-edition/2023-06-05/8/1883"
          ></iframe>

          <iframe
            height={600}
            width={350}
            allowFullScreen=""
            loading="lazy"
            className="overflow-hidden hover:scale-110 transition-all duration-700 rounded-xl border-2 border-[#22C55E]"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://bangla.techworldbd.com/newsdetails/swtntr-i-brjzer-bin-sthapner-tagid"
          ></iframe>

          <iframe
            height={600}
            width={350}
            allowFullScreen=""
            loading="lazy"
            className="overflow-hidden hover:scale-110 transition-all duration-700 rounded-xl border-2 border-[#22C55E]"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://bangla.techworldbd.com/newsdetails/i-brjzer-jhunnki-hte-pribes-rkshaz-sklke-eksngoe-kaj-krar-ahwan"
          ></iframe>
        </div>

        <div className="h-[3px] my-[20px] mb-[50px] w-full bg-black" />
      </section>
    </div>
  );
}

export default Page;
