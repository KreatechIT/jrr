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
        title="Demand & Supply"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/jr-recycling-pic-8.jpg`}
      />
      <section className="px-[5%] transition-all py-[3%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="laptop:w-[50%] mobile:w-full transition-all h-auto">
          <Slide>
            <Tag tag="Demand and Supply" />
            <div className="mt-[20px]">
              {/* <p className="text-[60px] font-bold text-black leading-[65px]">
              JR Recycling Solutions Ltd
            </p> */}
              <h2 className="font-lato text-[22px] mt-[30px] text-black/60">
                We are one of the best supplier company in Bangladesh. We are
                specialized in accelerating and optimizing IT product, food &
                feed, pharmaceutical and chemical supply chains. Using proven
                solutions and concepts in every aspect of the project
                life-cycle, from analysis to implementation. Project handover is
                achieved once you are completely satisfied and have reached your
                business goals!
              </h2>
            </div>
            <ButtonContactUs />
          </Slide>
        </div>
        <div className="relative laptop:flex mobile:hidden w-[50%] ">
          <Slide triggerOnce direction="up" className="mt-[20px]">
            <Image
              loading="eager"
              height={400}
              width={400}
              alt=""
              src="https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/demand-and-supply-chain.png"
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
