import Image from "next/image";
import React from "react";

import AboutImage from "../assets/about.png";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

function AboutCompany() {
  return (
    <div className="flex mobile:flex-col h-auto px-8 laptop:px-[100px] laptop:my-[100px] mobile:my-[20px]">
      <div>
        <Slide>
          <div>
            <p className="text-[#39B54A] font-bold mt-[20px] uppercase">
              About Us
            </p>
            <p className="text-black font-bold tablet:leading-[50px] text-xl tablet:text-4xl capitalize">
              JR Recycling Solution Limited is the{" "}
              <br className="hidden tablet:block" /> Leading E-waste Recycling
              company in Bangladesh.
            </p>
            <h3 className={`text-black mt-[20px] tablet:text-lg`}>
              JR Recycling Solutions LTD is started its journey in 2011.The
              company&apos;s comprehensive recycling programs focus on the
              efficient collection, processing, and recycling of a wide range of
              electronic products. By employing advanced technologies and
              adhering to stringent environmental standards, JR Recycling
              Solution Limited ensures that valuable materials are recovered and
              hazardous substances are safely managed. For safety measures and
              precaution, we have achieved the Local Certifications & No
              Objection Certifications (NOC) from the concern authority and also
              ISO/IEC: 27001:2013 & ISO: 14001:2015 certified.
            </h3>
          </div>
        </Slide>
        <div className="mt-[20px] place-items-center flex space-x-[40px]">
          <Link
            href="/about-us"
            className="flex tablet:w-[200px] duration-[1000ms] justify-center items-center h-[40px] tablet:h-[60px] mt-[20px] bg-[#43AC4D] hover:bg-[#7ABD4C] text-white/75 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
          >
            <p className="font-[600] tablet:text-xl">Read More</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L18 12M18 12L12 6M18 12L12 18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mt-[30px] flex w-full justify-between tablet:text-[24px] font-bold text-black/70">
          <p>Recycling</p>
          <p>77%</p>
        </div>
        <div className="w-full overflow-hidden relative h-[20px] mt-2 rounded-2xl bg-gray-200">
          <Slide direction="left" duration={2000}>
            <div className="w-[77%] absolute h-[20px] rounded-2xl bg-[#22C55E]" />
          </Slide>
        </div>
      </div>
      <div className="">
        <div className="mt-[30px] flex w-full justify-between tablet:text-[24px] font-bold text-black/70">
          <p>Waste Services</p>
          <p>90%</p>
        </div>
        <div className="w-full overflow-hidden relative h-[20px] mt-2 rounded-2xl bg-gray-200">
          <Slide direction="left" duration={2000}>
            <div className="w-[90%] absolute h-[20px] rounded-2xl bg-[#22C55E]" />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
