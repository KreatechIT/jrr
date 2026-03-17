"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import React from "react";
import { Slide } from "react-awesome-reveal";

import Partners from "@/sections/Partners";
import Link from "next/link";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="Green Truck"
        bg="/services/What-Can-Bangladeshi-Companies-Do-To-Ensure-Secure-Data-Destruction.jpg"
      />
      <section className="px-4 transition-all py-[3%]">
        <div className="relative justify-center items-center tablet:w-[50%] flex mx-auto">
          <Slide triggerOnce direction="up" className="mt-7">
            <Image
              loading="eager"
              alt=""
              height={400}
              width={400}
              src="/services/green-truck.webp"
            />
          </Slide>
        </div>
        <div className="transition-all h-auto max-w-[80rem] mx-auto px-8">
          <Slide>
            <Tag tag="Green Truck" />
            <div className="mt-[20px]">
              {/* <p className="text-[60px] font-bold text-black leading-[65px]">
              JR Recycling Solutions Ltd
            </p> */}
              <h2 className="font-lato mt-[30px] text-black/60">
                According to Sustainable Development Goals (SDG) fact sheet,
                Bangladesh e-waste generator rate is growing yearly in terms of
                that recycling is still very low. This is alarming for all of us
                to start disposing of e-waste sensibly and move towards
                sustainable living. The Green Truck concept will help Bangladesh
                become more sustainable. Depending on the volumn of e-waste,
                e-waste will be collected from the specific vendors point of the
                Dhaka city. It will start from Dhaka city, and gradually, it
                will spread up all the major cities of Bangladesh. To adopt
                these practices general people need to be aware about the plant
                sustainability, so that they took part in the process as well.
                JR Enterprise has started its operation from Dhaka city.
                Eventually, they plan to expand to all cities in Bangladesh.
                Organizations from government and non-government are encouraged
                to participate.
              </h2>
              <h2 className="font-bold text-black/60 mt-[20px]">Messages:</h2>
              <h2 className=" mt-[30px] text-black/60">
                <ol className="list-decimal">
                  <li>
                    If you have unused or damaged wires and cables, take them to
                    the nearest e-waste recycling center or deposit it on the
                    e-waste bin.
                  </li>
                  <li>Don’t feed the landfills. Recycle with us!</li>
                  <li>
                    Are you looking for a one-time pick-up of your e-waste? –
                    The green truck offers you a weekly collection of your
                    e-waste from your doorstep. Visit our website and subscribe
                    to our services.
                  </li>
                  <li>
                    “With mounting volumes of production and disposal, the world
                    faces what one recent international forum described as a
                    mounting “tsunami of e-waste,” putting lives and health at
                    risk.” said Dr. Tedros Adhanom Ghebreyesus, WHO
                    Director-General.
                  </li>
                  <li>
                    Plastics do not degrade, so they remain in the soil for a
                    long time which adversely affects the soil’s fertility.
                  </li>
                </ol>
              </h2>
            </div>
            <Link
              href="/contact-us"
              className="flex w-[200px] duration-[1000ms] justify-center items-center h-[60px] mt-[50px] 
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
      </section>
      <p className="text-red-600 text-center my-[20px] font-bold text-[24px]">
        ***Say no to single-use plastic and help protect the environment.***
      </p>
      <section className="py-[40px]">
        <Partners cusIndex={2} />
      </section>
    </div>
  );
}

export default AboutUs;
