"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import Members from "@/sections/Members";
import VendorsandClients from "@/sections/VendorsandClients";
import { faEye, faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Slide } from "react-awesome-reveal";
import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="About Us"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/09.jpg`}
      />
      <section className="p-[5%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="relative mb-[70px] laptop:w-[50%] mobile:w-full mobile:h-[400px] laptop:h-[700px]">
          <Slide
            triggerOnce
            direction="up"
            className="h-[90%] mobile:w-full rounded-2xl laptop:w-[87%]"
          >
            <Image
              loading="eager"
              alt=""
              layout="fill"
              src="https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/abbanner.jpg"
            />
          </Slide>
          <Slide
            triggerOnce
            direction="right"
            className="mobile:h-[100px] laptop:flex mobile:hidden laptop:h-[300px] rounded-full mobile:w-[100px] laptop:w-[300px] absolute -bottom-[40px] right-[10px]"
          >
            <Image
              loading="eager"
              alt=""
              layout="fill"
              className="rounded-full"
              src="https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/ghgghghj.jpg"
            />
          </Slide>
        </div>
        <div className="mobile:w-full laptop:w-[50%]">
          <Tag tag="About Company" />
          <div className="mt-[20px]">
            <h1 className="laptop:text-[60px] mobile:text-[40px] font-bold text-black mobile:leading-[40px] laptop:leading-[65px]">
              JR Recycling Solutions Ltd
            </h1>

            <div className="my-6">
              <Counter />
            </div>

            <h2 className="font-lato mt-[30px] text-black/60">
              JR Recycling Solutions Ltd. is one of the largest E-waste
              Recycling company in Bangladesh. Started its journey in 2011. We
              highly concern about all the environmental and personal safety
              precautions. For safety measures and precaution, we have achieved
              the Local Certifications & No Objection Certifications (NOC) from
              the concern authority and also ISO/IEC: 27001:2013 & ISO:
              14001:2015 certified.
            </h2>
          </div>
          <Link
            href={"contact-us"}
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
        </div>
      </section>
      <section className="bg-[#39B54A] mobile:space-x-0 laptop:space-x-[20px] py-[40px] px-[2%] flex laptop:flex-row mobile:flex-col justify-items-center place-content-center place-items-center w-full h-auto">
        <Slide
          triggerOnce
          direction="left"
          className="mobile:w-full laptop:w-[30%] mobile:h-auto laptop:h-[70%]"
        >
          <div className="relative w-full h-full  flex justify-center items-center">
            <div className="space-y-[15px] mt-[100px] mobile:h-[300px]  flex flex-col place-content-center place-items-center bg-white">
              <p className="text-black font-bold text-[20px]">Mission</p>
              <p className="text-black/60 font-bold font-lato text-[16px] text-center px-[5%]">
                Our motto is 3 R’s, Reduce, Reuse and Recycle, through
                continuous implementations and innovations in recycling
                technology for recovery in an environmentally friendly manner to
                protect the environment
              </p>
            </div>
            <div className="absolute flex place-content-center place-items-center border-[6px] border-[#39B54A] rounded-full bg-white h-[140px] w-[140px] top-0 transform translate-x-[-50%] left-[50%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 70 70"
                width="70"
                height="70"
              >
                <circle
                  cx="35"
                  cy="35"
                  r="30"
                  fill="none"
                  stroke="#39B54A"
                  strokeWidth="4"
                />
                <circle cx="35" cy="35" r="15" fill="#39B54A" />
                <path d="M35 5 L30 15 L40 15 Z" fill="#39B54A" />
                <rect x="32" y="15" width="6" height="20" fill="#39B54A" />
              </svg>
            </div>
          </div>
        </Slide>
        <Slide
          triggerOnce
          direction="up"
          className="mobile:w-full laptop:w-[30%] h-[70%]"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="space-y-[15px] mt-[100px] mobile:h-[300px] flex flex-col place-content-center place-items-center bg-white">
              <p className="text-black font-bold text-[20px]">Vision</p>
              <p className="text-black/60 font-bold font-lato text-[16px] text-center px-[10%]">
                To create the most compelling recycling company of the 21st
                century by driving the world’s transition to PCB recycling And,
                establish the tier 4 E-Waste Recycling plant in Bangladesh.
              </p>
            </div>
            <div className="absolute flex place-content-center place-items-center border-[6px] border-[#39B54A] rounded-full bg-white h-[140px] w-[140px] top-0 transform translate-x-[-50%] left-[50%]">
              <FontAwesomeIcon
                icon={faEye}
                color="#39B54A"
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />
            </div>
          </div>
        </Slide>
        <Slide
          triggerOnce
          direction="right"
          className="mobile:w-full laptop:w-[30%] h-[70%]"
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="space-y-[15px] mt-[100px] mobile:h-[300px] flex flex-col place-content-center place-items-center bg-white">
              <p className="text-black font-bold text-[20px]">Values</p>
              <p className="text-black/60 font-bold font-lato text-[16px] text-center px-[10%]">
                Our values are : 1. Environmental Responsibility 2. Safety and
                Compliance 3. Customer Focus, 4. Integrity and Ethics 5.
                Innovation and Efficiency 6. Respect 7. Teamwork, 8. Innovation
                9. Service, 10. Value-Centric.
              </p>
            </div>
            <div className="absolute flex place-content-center place-items-center border-[6px] border-[#39B54A] rounded-full bg-white h-[140px] w-[140px] top-0 transform translate-x-[-50%] left-[50%]">
              <FontAwesomeIcon
                icon={faGem}
                color="#39B54A"
                style={{
                  height: "70px",
                  width: "70px",
                }}
              />
            </div>
          </div>
        </Slide>
      </section>
      <Members />

      <VendorsandClients />

      <section className="flex laptop:flex-row mobile:flex-col place-items-center px-4 pb-10 max-w-[90rem] mx-auto gap-8">
        <div>
          <p className="text-[#39B54A] text-[24px] font-bold">
            Bangabandhu Hi-Tech City
          </p>
          <div className="mt-[30px] text-black/60 space-y-[20px] text-justify font-lato">
            <h3>
              BHTC is the first ever Hi-Tech Park in Bangladesh, located at
              Kaliakoir Upazilla in Gazipur district.
            </h3>
            <h3>
              The total Land Area of BHTC is 355 acres where 232 acres of land
              was divided into 5 blocks as per master plan.
            </h3>
            <h3>
              BHTPA Authority allocated 2.5 acres (Approx.10117.1 sq.
              meters)Land (plot No: 11) to build a data center, Training Center
              and IOT, PCB Manufacture, E-Waste Treatment Plant. As a result We
              Take all necessary step for implement their future Plan.
            </h3>
          </div>
        </div>

        {/* Image Above Footer */}
        <Image
          className="laptop:w-[50%] mobile:w-full h-[17%] laptop:mt-0 mobile:mt-[30px]"
          src="https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/2-3.jpg"
          alt="jr recycling sigining ceremony"
          width={500}
          height={350}
        />
      </section>
    </div>
  );
}

export default AboutUs;
