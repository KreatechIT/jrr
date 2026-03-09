import React from "react";
import AboutImage from "../assets/about.png";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";

function Projects() {
  const Items = [
    {
      image:
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/1-1.jpg",
      text: "Dismantle & Completion report on Old/Unused/Obsolete/Scrap of Bangladesh Police Telecom.",
    },
    {
      image:
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/3-1.jpg",
      text: "E-waste dismantle process going on for Bangladesh RAB.",
    },
    {
      image:
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/2-1.jpg",
      text: "Memorandum of Understanding(MOU) signing moment with VIVO Bangladesh for e-waste management",
    },
    {
      image:
        "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/4-1.jpg",
      text: "MOU ceremony with Grameen Distribution Ltd for their future E-waste management.",
    },
  ];

  return (
    <div className="pt-[100px] bg-white relative mx-auto max-w-[100rem]">
      <div className="laptop:flex-row mobile:flex-col flex justify-between px-4">
        <div className="flex flex-col place-content-start place-items-start">
          <Image src={AboutImage} width={60} height={60} alt="" />
          <p className="text-[#39B54A] font-bold mt-[20px] uppercase">
            Projects
          </p>
          <p className="text-black mobile:leading-[40px] laptop:leading-[10px] font-[700] mt-4 text-[40px]">
            Let&apos;s Talk About Our Work For Clients
          </p>
        </div>
        <Link
          href="/our-work"
          className="flex mobile:w-[60%] laptop:w-52 duration-[1000ms] justify-center items-center mobile:h-[40px] laptop:h-[60px] mt-[20px] bg-[#43AC4D] hover:bg-[#8EC148] text-white/80 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
        >
          <p className="font-[600] tablet:text-[20px] ">View All Projects</p>
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
      <div className="mt-[60px] flex laptop:flex-row mobile:flex-col place-items-center laptop:space-y-0 mobile:space-y-4 mobile:space-x-0 laptop:space-x-[2%] px-6">
        {Items.map((data, index) => (
          <Slide
            key={index}
            className="mobile:w-full laptop:w-[25%] overflow-hidden relative group"
          >
            <div>
              <Image
                loading="eager"
                alt=""
                width={400}
                height={400}
                src={data.image}
                className="w-full object-cover h-[300px]"
              />

              <Slide
                animate__slideInDown
                animate__slideOutDown
                delay={index * 250}
                className="absolute overflow-hidden top-0 left-0 w-full h-full bg-black/70 group-hover:flex justify-center items-center hidden"
              >
                <p className="text-white px-[2%] text-center text-lg font-semibold">
                  {data.text}
                </p>
              </Slide>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default Projects;
