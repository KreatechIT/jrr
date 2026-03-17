"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import React from "react";
import { Slide } from "react-awesome-reveal";

import bg from "@/assets/jr-recycling-workers.jpg";
import Partners from "@/sections/Partners";
import Link from "next/link";
import ButtonContactUs from "@/components/ButtonContactUs";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="Internship"
        bg="/services/WhatsApp-Image-2022-08-28-at-5.29.42-PM-1024x768-1.jpeg"
      />
      <section className="px-[6%] transition-all space-x-[20px] py-[3%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="mobile:w-full laptop:w-[50%] transition-all h-auto">
          <Slide>
            <Tag tag="Internship" />
            <div className="mt-[20px]">
              {/* <p className="text-[60px] font-bold text-black leading-[65px]">
              JR Recycling Solutions Ltd
            </p> */}
              <p className="font-lato text-[22px] mt-[30px] text-black/60">
                1- Open for all universities student
              </p>
              <p className="font-lato text-[22px] mt-[30px] text-black/60">
                2- Open for technical students
              </p>
            </div>
            <ButtonContactUs />
          </Slide>
        </div>
        <div className="relative laptop:flex mobile:hidden w-[50%] ">
          <Slide triggerOnce direction="up">
            <Image
              loading="eager"
              height={500}
              width={500}
              alt=""
              src="/services/WhatsApp-Image-2022-08-28-at-5.29.43-PM.jpeg"
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
