"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";

import React from "react";
import { Slide } from "react-awesome-reveal";
import ButtonContactUs from "@/components/ButtonContactUs";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="E-Waste Recycling"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/jr-recycling-pic-4.jpg`}
      />
      <section className="px-[5%] transition-all py-[3%] flex laptop:flex-row mobile:flex-col-reverse place-items-start">
        <div className="laptop:w-[50%] mobile:w-full transition-all h-auto">
          <Slide>
            <Tag tag="E-Waste Management" />
            <div className="mt-[20px]">
              {/* <p className="text-[60px] font-bold text-black leading-[65px]">
              JR Recycling Solutions Ltd
            </p> */}
              <h2 className="font-lato text-[22px] mt-[30px] text-black/60">
                We are one of the number one E-Waste Management companies in
                Bangladesh. We have been successfully doing our e-waste
                segregation and Separation activities of old, unused, used,
                obsolete WEEE, Radio/Non–radio Telecom equipment with Various
                Telecommunication operator companies, Government Institutions,
                High Communications & Embassies, etc. Every year we collect PCB
                waste for recycling/ reuse from these huge Electrical and
                Electronic wastes and export PCBA waste in China and other
                countries.
              </h2>
            </div>
            <ButtonContactUs />
          </Slide>
        </div>

        <div className="relative laptop:flex mobile:hidden w-[50%] ">
          <Slide triggerOnce direction="left" className="mt-7">
            <Image
              loading="eager"
              alt=""
              height={400}
              width={400}
              src="https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/ewaste-management.png"
            />
          </Slide>
        </div>
      </section>
      <section className="px-[5%] laptop:mt-[0px] mobile:mt-[40px] py-[5%] flex flex-col place-content-center place-items-center">
        <Slide direction="left">
          <Tag />
          <h2 className="text-[60px] font-bold text-black leading-[65px]">
            About E-Waste in Bangladesh
          </h2>

          <h3 className="font-lato text-[22px] mt-[30px] text-black/60">
            Bangladesh, with a population of over 160 million people, has a high
            environmental pollution loading due to high population density,
            urbanization, and rapid economic and technological development. Such
            economic growth with the emerging markets for consumer goods has
            created the need for enormous amounts of natural resources, imports
            and exports, and energy in the country. Among consumer products,
            electrical and electronic equipment has become a daily necessity in
            our modern digital society. As information & communication
            technology (ICT) and electronic technology develop fast, the
            widespread use and replacement of such devices and equipment are
            commonly found in everyday life. For digitalization and
            urbanization, electricity has reached almost every corner of
            Bangladesh. Both urban and rural area students are rapidly using
            online platforms for education purposes. The number of people who
            work abroad is increasing, resulting in an increase in remittances.
            Mobile phone and electrical device users are increasing at an
            exceptional rate in Bangladesh due to all these factors. But once
            electrical and electronic devices reach end-of-life, they become
            waste of electrical and electronic equipment (WEEE) or often called
            electronic waste (E-Waste).
          </h3>
        </Slide>
      </section>
    </div>
  );
}

export default AboutUs;
