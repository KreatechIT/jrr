"use client";
import Layout from "@/components/Layout";
import React from "react";
import { Slide } from "react-awesome-reveal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

const Items = [
  {
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/07/R2_2013_Renewed-2025-scaled.jpeg",
  },
  {
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/07/ISO45001_CERT-J-R-RECYCLING-SOLUTIONS-LIMITED-S-1-1-scaled.jpeg",
  },
  {
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/07/ISO27001_Cert-J-R-RECYCLING-SOLUTIONS-LIMITED_2022-scaled.jpeg",
  },
  {
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/07/ISO14001_CERT-J-R-RECYCLING-SOLUTIONS-LIMITED-S-1-scaled.jpeg",
  },
  {
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/07/ISO9001_CERT-J-R-RECYCLING-SOLUTIONS-LIMITED-S-1-scaled.jpeg",
  },
];

const Permissions = [
  {
    title: "Bangladesh Telecommunication Regulatory Commission",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/btrc.png",
    alt: "btrc-logo",
  },
  {
    title: "Ministry of PT&T",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/mis.png",
    alt: "National -security-intelligence-logo",
  },
  {
    title: "Bangladesh Atomic Energy Commission",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/baec.png",
    alt: "bangladesh-poromanu-sokti-commission-logo",
  },
  {
    title: "Ministry of Science and Technology",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Bangladesh-goverenment.png",
    alt: "Bangladesh-govermenment -logo",
  },
  {
    title: "National Security Intelligence",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/nci.png",
    alt: "National -security-intelligence-logo",
  },
  {
    title: "Bangladesh Police",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Bangladesh-police.png",
    alt: "Police-logo",
  },
  {
    title: "Directorate General Forces Intelligence",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/DFI.png",
    alt: "Directorate-general-of-forces-intelligence-logo",
  },
  {
    title: "Ministry of Defense of Bangladesh",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/MINISTRY-OF-Diffence-of-bangladesh.png",
    alt: "Ministry-of-diffence-of-bangladesh",
  },
];

const Membership = [
  {
    title: "DCCI",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/dcci.png",
    alt: "dcci-logo",
  },
  {
    title: "Lions International",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/lions.png",
    alt: "lions-international-logo",
  },
  {
    title: "BASIS",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/basis.png",
    alt: "basis-logo",
  },
  {
    title: "BCS",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/bcs.png",
    alt: "Bangladesh-computer-somity-logo",
  },
];

function Page() {
  return (
    <div className="">
      <Layout
        title="Certifications"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/certificate.jpg`}
      />
      <section className="p-[5%] mx-auto flex justify-center items-center">
        <div>
          <p className="text-[24px] px-[3%] font-bold text-[#22C55E]">
            ***Press on the image to zoom***
          </p>

          <div className="mt-[30px] justify-center items-center gap-x-[20px] gap-y-[30px] flex mobile:flex-col laptop:flex-row flex-wrap">
            {Items.map((data, index) => (
              <div
                key={index}
                className="laptop:w-[45%] desktop:w-[30%] mobile:w-full mr-[10px] bg-white h-[500px] rounded-xl shadow-2xl overflow-hidden relative"
              >
                <div className="">
                  <Zoom shouldReplaceImage shouldHandleZoom>
                    <div className="h-[500px] laptop:w-[225px] w-[300px] tablet:w-[400px]">
                      <Image
                        alt=""
                        fill
                        src={data.image}
                        className="w-full hover:brightness-50 transition-all object-cover h-full"
                      />
                    </div>
                  </Zoom>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-[5%] laptop:flex-col mobile:flex-col flex justify-center items-center">
        <div className=" mb-[20px] justify-center items-center mobile:w-full">
          <p className="text-[50px] text-center text-black font-bold">
            Official Permission
          </p>
          <p className="font-lato text-center text-black/60 text-[24px]">
            We have the official permission from the Different Govt. authorities
            like
          </p>
        </div>
        <div className="flex justify-center items-center tablet:flex-row mobile:flex-col mobile:w-full laptop:w-[70%] flex-wrap gap-y-[25px] gap-x-[20px]">
          {Permissions.map((data, index) => (
            <div
              key={index}
              className="tablet:w-[240px] mobile:w-full rounded-xl border-2 border-[#39B54A] h-[240px] overflow-hidden relative p-[5px]  group"
            >
              <Image
                src={data.image}
                className="w-full object-contain h-full"
                alt={data.alt}
                width={300}
                height={200}
              />
              <Slide
                animate__slideInDown
                animate__slideOutDown
                className="absolute overflow-hidden top-0 left-0 w-full h-full bg-black/70 hidden group-hover:flex justify-center items-center"
              >
                <p className="text-white px-[2%] text-center text-lg font-semibold">
                  {data.title}
                </p>
              </Slide>
            </div>
          ))}
        </div>
      </section>
      <section className="p-[5%] pt-0 mx-auto flex flex-col justify-center items-center">
        <div className="mb-[20px]">
          <p className="text-[50px] text-black font-bold">Membership</p>
        </div>
        <div className="flex justify-center items-center tablet:flex-row mobile:flex-col mobile:w-full laptop:w-[70%] flex-wrap gap-y-[25px] gap-x-[20px]">
          {Membership.map((data, index) => (
            <div
              key={index}
              className="w-[240px] rounded-xl border-2 border-[#39B54A] h-[240px] overflow-hidden relative p-[5px] group"
            >
              <Image
                layout="fill"
                src={data.image}
                className="w-full object-cover h-full"
                alt={data.alt}
              />
              <Slide
                animate__slideInDown
                animate__slideOutDown
                className="absolute overflow-hidden top-0 left-0 w-full h-full bg-black/70 justify-center items-center hidden group-hover:flex"
              >
                <p className="text-white px-[2%] text-center text-lg font-semibold">
                  {data.title}
                </p>
              </Slide>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
