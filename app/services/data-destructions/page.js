"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import React from "react";
import { Slide } from "react-awesome-reveal";

import bg from "@/assets/jr-recycling-workers.jpg";
import Partners from "@/sections/Partners";
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="Data Destructions / Data Elimination"
        bg="/services/jr-recycling-pic-18.jpg"
      />
      <section className="px-[5%] mt-[20px] transition-all space-x-[50px] py-[3%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="laptop:w-[50%] mobile:w-full transition-all h-auto">
          <Slide>
            <Tag tag="Data Destruction" />
            <div className="mt-[20px]">
              {/* <p className="text-[60px] font-bold text-black leading-[65px]">
              JR Recycling Solutions Ltd
            </p> */}
              <h2 className="font-lato text-[22px] mt-[30px] text-black/60">
                The majority of businesses collect and store personal
                identifying information in both digital and hard copy formats.
                Without properly destroying private material on computers, disk
                drives, memory cards, and cell phones, criminals can discover
                personal and confidential information that they can use for
                identity theft. These devices must therefore be destroyed or
                completely deleted of all data. Degaussing is a method of
                permanently erasing data from working and non-working hard
                drives, tape, and floppy disks. Degaussing completely sanitizes
                the media of data in seconds by delivering a powerful magnetic
                pulse that instantly destroys all magnetic domains on the disk
                platters. We are only in the country to provide you the most
                secure Data Destruction solutions for your hard drive, Data Tape
                & Pen Drives. We use world leader in Data Elimination & NAS
                approved Garner Degausser HD-2. Garner HD-2 Degausser(Hard
                Driver & Tape).
              </h2>
            </div>
            <Link
              href="/contact-us"
              className="flex w-[200px] duration-[1000ms] justify-center items-center h-[60px] mt-[30px] 
              bg-[#43AC4D] hover:bg-[#FADC22] text-white/75 hover:text-black 
              transition-all px-[10px] rounded-md space-x-2 place-items-center"
            >
              <p className="font-[600] text-[24px]">Contact Us</p>
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
          </Slide>
        </div>
        <div className="relative w-[50%] flex mobile:hidden laptop:flex mt-[7%] ">
          <Slide triggerOnce direction="up" className="mt-[20px]">
            <Image
              loading="eager"
              height={400}
              width={400}
              alt=""
              src="/services/data-destruction.jpg"
            />
          </Slide>
        </div>
      </section>
      <section className="py-[70px]">
        <Partners cusIndex={2} />
      </section>
    </div>
  );
}

export default AboutUs;
