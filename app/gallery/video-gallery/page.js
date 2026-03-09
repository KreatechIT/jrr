"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import "react-photo-view/dist/react-photo-view.css";
import YouTube from "react-youtube";

const Videos = [
  {
    title:
      "পরিবেশের নতুন আতঙ্ক 'ই-বর্জ্য' | E Waste | Recycle E waste | Somoy TV",
    url: "PDdWpYvzdkg",
  },
  {
    title: "ই-বর্জ্য বিপর্যয়, কতটা প্রস্তুত বাংলাদেশ? || DW",
    url: "0miMU-h6hxs",
  },
  {
    title: "ইলেকট্রনিক বর্জ্যের অর্থনীতি ।। সাতদিন ।। Nexus Television",
    url: "NuDokCBDzvQ",
  },

  {
    title: "Dismantle-Desktop Video 2023-09-09",
    url: "zAduUbfZp88",
  },
  {
    title: "Dismantle-Desktop Video 2023-09-09",
    url: "EXNW86WRjYc",
  },
  {
    title: "Laptop-Server- Switch-Dismantle-Video 2023-09-09",
    url: "QxdEa84YTqw",
  },
  {
    title: "Shredding Video 2023-09-09",
    url: "aqYQZQHON64",
  },
  {
    title: "E-Waste Management",
    url: "q-WpW4oVIKw",
  },
  {
    title: "Green Truck",
    url: "Nb7rcEM-sHs",
  },
  {
    title: "Service Management",
    url: "8rJxKiOcsQI",
  },
  {
    title: "BTRC Visit",
    url: "zAduUbfZp88",
  },
];

function Page() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      disablekb: 1,
      fs: 0,
      mute: 1,
    },
  };
  return (
    <div className="">
      <Layout
        title="Video Gallery"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/13.jpeg`}
      />
      <section className="px-[5%] transition-all flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%] px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[26px] mt-[30px] text-black/60">
                Our Recent Videos
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
          className="py-[50px] gap-[20px]"
        >
          {hasWindow &&
            Videos.map((data, index) => (
              <div
                key={index}
                className="space-x-[20px] justify-start items-start flex flex-col place-items-start place-content-start bg-gray-300 m-[10px] w-[300px] tablet:w-[360px] rounded-xl h-[300px] overflow-hidden"
              >
                <YouTube
                  videoId={data.url}
                  opts={opts}
                  className="w-[310px] tablet:w-[370px] h-[210px] rounded-[30px]"
                />
                <p className="my-[10px] text-[18px] font-lato font-bold">
                  {data.title}
                </p>
              </div>
            ))}
        </div>
        <div className="h-[3px] my-[20px] mb-[50px] w-full bg-black" />
      </section>
    </div>
  );
}

export default Page;
