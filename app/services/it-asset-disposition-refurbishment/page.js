"use client";
import Layout from "@/components/Layout";
import Tag from "@/components/Tag";
import React from "react";
import { Slide } from "react-awesome-reveal";

import Partners from "@/sections/Partners";
import Image from "next/image";
import ButtonContactUs from "@/components/ButtonContactUs";

const Items = [
  { image: "/services/servers.webp", title: "Servers" },
  { image: "/services/storage.webp", title: "Storage" },
  { image: "/services/broadband.webp", title: "Broadband" },
  { image: "/services/laptop.webp", title: "Laptop" },
  { image: "/services/desktop.webp", title: "Desktop" },
  { image: "/services/monitor.webp", title: "Monitor" },
  { image: "/services/circuit.webp", title: "Circuit" },
  { image: "/services/printers.webp", title: "Printer" },
  { image: "/services/projector.webp", title: "Projector" },
  { image: "/services/keyboard.webp", title: "Keyboard" },
];

function AboutUs() {
  return (
    <div className="">
      <Layout
        title="IT Asset Disposition & Refurbishment"
        bg="/projects/1-1.jpg"
      />
      <section className="px-[5%] mt-[20px] transition-all space-x-[20px] py-[3%] flex laptop:flex-row mobile:flex-col place-items-start">
        <div className="laptop:w-[50%] mobile:w-full transition-all h-auto">
          <Slide>
            <Tag tag="IT Asset Disposition & Refurbishment" />
            <div className="">
              <h2 className=" mt-[30px] text-black/60">
                IT asset disposition (ITAD) is an industry term and practice
                built around reusing, recycling, repurposing, repairing, or
                disposing of unwanted IT equipment in a safe and environmentally
                responsible way.
              </h2>
            </div>
            <ButtonContactUs />
          </Slide>
        </div>
        <div className="relative w-[50%] laptop:flex mobile:hidden">
          <Slide triggerOnce direction="up" className="mt-7">
            <Image
              loading="eager"
              alt=""
              height={400}
              width={400}
              src="/services/it-disposal.jpg"
            />
          </Slide>
        </div>
      </section>
      <section className="px-[6%]">
        <Slide>
          <h2 className=" mt-[30px] text-black/60">
            IT asset disposition (ITAD) is an industry term and practice built
            around reusing, recycling, repurposing, repairing, or disposing of
            unwanted IT equipment in a safe and environmentally responsible way.
          </h2>
          <div className="flex flex-wrap gap-[25px] justify-center items-center mt-[30px]">
            {Items.map((data, index) => (
              <div
                key={index}
                className="flex hover:scale-110 duration-700 transition-all flex-col place-items-center place-content-center mobile:w-[100px] laptop:w-[200px] h-[200px]"
              >
                <div className="hover:hue-rotate-[55deg] w-[100px] h-[100px] transition-all duration-500">
                  <Image
                    loading="eager"
                    src={data.image}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>

                <p className="font-lato font-semibold text-[22px] text-black/60">
                  {data.title}
                </p>
              </div>
            ))}
          </div>
          <h2 className=" mt-[30px] text-black/60">
            By repairing more parts, you reduce the amount you need to
            manufacture and have fewer in circulation at the end of life. Your
            customers work with a single provider who handles the full IT
            lifecycle of their technology assets.
          </h2>
          <h2 className="font-lato font-bold text-[22px] mt-[30px] text-black/60">
            JR Recycling Solutions Limited is an IT organization that practices
            IT asset disposition, and specialized vendors handle it.
          </h2>
          <h2 className="font-lato font-bold text-[22px] mt-[30px] text-black/60">
            IT asset disposition focuses on the following:
          </h2>
          <ul
            className={`font-lato text-black/60 list-disc pl-[10%] pt-[20px]`}
          >
            <li>
              Securing data. Old hardware may still contain data, so ITAD
              providers follow best practices for thorough data deletion.
              Storage devices are securely wiped.
            </li>
            <li>
              Recycling and reusing devices. ITAD providers dispose of numerous
              types of used hardware, including desktops, laptops, servers,
              phones, and tablets. Items such as RAM sticks or video cards can
              be harvested and reused in other products or recycled.
            </li>
            <li>
              Repairing hardware. ITAD services may also offer repair options
              for hardware so organizations can repurpose their equipment.
            </li>
          </ul>
          <p className="font-lato font-bold text-[22px] mt-[30px] text-black/60">
            IT asset disposition focuses on the following:
          </p>
          <ul
            className={`font-lato text-lg text-black/60 list-disc pl-[10%] pt-[20px]`}
          >
            <li>Asset Management</li>
            <li>Data Center Decommissioning</li>
            <li>Data Erasure</li>
            <li>Hard Drive Shredding</li>
            <li>Refurbishing</li>
            <li>Repair and Return</li>
          </ul>
        </Slide>
      </section>
      <section className="py-[70px]">
        <Partners cusIndex={2} />
      </section>
    </div>
  );
}

export default AboutUs;
