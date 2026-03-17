"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Items = [
  {
    image: "/team/Manging-Director.png",
    title: "M A Hossain",
    post: "Managing Director",
  },
  {
    image: "/team/Director_Finance.png",
    title: "Shaheda Amir",
    post: "Director, Accounts & Finance",
  },
  {
    image: "/team/Director.png",
    title: "Iftiakh Hossain",
    post: "Director, Business Development",
  },
  {
    image: "/team/General-Manager.png",
    title: "Md. Manzoor Hasan",
    post: "General Manager (Operation)",
  },
  // {
  //   image: "/team/Manager_IT.png",
  //   title: "Md. Shahjahan Miah",
  //   post: "Manager, IT",
  // },
  {
    image: "/team/Manager_SCM.png",
    title: "Md. Monirul Islam",
    post: "Manager, SCM",
  },
  {
    image: "/team/FD78786.png",
    title: "Md Nazmul Hassan Nahid",
    post: "Assistant Manager, Business Development & Digital Marketing",
  },
  {
    image: "/team/Officer.png",
    title: "Farzana Khanam",
    post: "Officer, Accounts & Finance",
  },
  {
    image: "/team/Engineer.png",
    title: "Nakib Uddin Rasu",
    post: "Engineer, Warehouse",
  },
];

const Workers = [
  {
    image: "/team/Md.Arif_.png",
    title: "Md. Arif",
    department: "Heavy Loaded Equipment",
    experience: 10,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/2-2.jpg",
    title: "Haque Mia",
    department: "Gas Cuter",
    experience: 10,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Tipu-Banik.jpg",
    title: "Tipu Pramanik",
    department: "Welding",
    experience: 12,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Shohag-Mia.jpg",
    title: "Shohag Mia",
    department: "Grinding",
    experience: 8,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Shohidul.jpg",
    title: "Md. Shohidul Islam",
    department: "Dismantling",
    experience: 19,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Abdul-Hamid.jpg",
    title: "Abdul Hamid",
    department: "Mechanical Handling",
    experience: 9,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Ashikuzzan.jpg",
    title: "Ashikuzzaman Mamun",
    department: "Manual Handling",
    experience: 8,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Milton.jpg",
    title: "Md. Milton Hossain",
    department: "Electric Works",
    experience: 16,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
  {
    image: "/team/Jashim-Uddin.jpg",
    title: "Md. Jashim Uddin, Md. Alamgir Hossain",
    department: "Transportation",
    experience: 14.9,
    experienceOnClients:
      "Banglalink, BSL (Hotel Sheraton), Ericsson, Banglalion, EDotco, Bangladesh Railway, Roads & Highways",
  },
];

function Page() {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="">
      <Layout
        title="Our Team"
        bg="/team/jr-enterprise.jpg"
      />
      <section className="p-[3%] mt-[20px] mx-auto flex justify-center items-center">
        <div>
          <p className="w-full py-[5px] text-center px-[10px] font-bold bg-[#39B54A] text-[40px] text-white">
            Management
          </p>
          <Slide direction="left" className="">
            <div className="mt-[30px] justify-center items-center gap-x-[20px] gap-y-[30px] flex flex-row flex-wrap">
              {Items.map((data, index) => (
                <div
                  key={index}
                  className="w-[75%] tablet:w-[50%]  laptop:w-[25%] border-2 border-[#39B54A]  rounded-xl shadow-black/70 shadow-sm transition-all duration-700 hover:scale-105 overflow-hidden relative group"
                >
                  <Image
                    loading="eager"
                    alt=""
                    width={400}
                    height={400}
                    src={data.image}
                    className={`w-full object-cover h-full ${"hover:blur-sm"}`}
                  />

                  <Slide
                    direction="up"
                    className="absolute flex-col overflow-hidden top-0 left-0 w-full h-full bg-black/70 justify-center items-center hidden group-hover:flex"
                  >
                    <p className="text-white flex flex-col px-[2%] text-center text-[26px] font-bold">
                      <span>{data.title}</span>
                      <span className="text-white px-[2%] text-center mt-[10px] text-lg font-semibold">
                        {data.post}
                      </span>
                    </p>
                  </Slide>
                </div>
              ))}
            </div>
          </Slide>
        </div>
      </section>

      <section className="p-[3%] mt-[20px] flex justify-center items-center">
        <div>
          <p className="w-full py-[5px] text-center px-[10px] font-bold bg-[#39B54A] text-[40px] text-white">
            Our Workers
          </p>
          <Fade className="">
            <div className="mt-[30px] justify-center items-center gap-x-[20px] gap-y-[30px] flex flex-row flex-wrap">
              {/* {Workers.map((data, index) => (
                <div
                  key={index}
                  className="w-[320px] mr-[10px] bg-white min-h-[600px] h-auto rounded-xl shadow-2xl overflow-hidden relative"
                >
                  <img
                    src={data.image}
                    className="w-full object-cover h-[250px]"
                  />
                  <div className="justify-center mt-[20px] items-center">
                    <p className="text-[30px] text-center font-bold text-black">
                      {data.title}
                    </p>
                    <div className="mt-[20px] px-[20px]">
                      <div className="flex justify-start space-x-[10px] items-start place-items-start">
                        <p className="text-[20px] text-left font-bold text-black/60">
                          Departments:
                        </p>
                        <p className="text-[20px] text-left font-medium text-black">
                          {data.department}
                        </p>
                      </div>
                      <div className="flex mt-[10px] justify-start space-x-[10px] items-start place-items-start">
                        <p className="text-[20px] text-left font-bold text-black/60">
                          Experience:
                        </p>
                        <p className="text-[20px] text-center font-medium text-black">
                          {data.experience}
                        </p>
                      </div>
                      <div className="flex mt-[10px] justify-start space-x-[10px] items-start place-items-start">
                        <p className="text-[20px] w-max text-left font-bold text-black/60">
                          Experience on Clients:
                        </p>
                        <p className="text-[20px] text-left font-medium text-black">
                          {data.experienceOnClients}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
              {Workers.map((data, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setHovered(true);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHovered(false);
                    setHoveredIndex(null);
                  }}
                  className="mobile:w-full laptop:w-[45%] border-1 border-black h-[400px] rounded-xl shadow-black/70 shadow-md transition-all duration-700 hover:scale-105 overflow-hidden relative"
                >
                  <Image
                    loading="eager"
                    alt=""
                    width={400}
                    height={600}
                    src={data.image}
                    className={`w-full grayscale-0 hue-rotate-15 saturate-[0.9] backdrop-blur-lg object-left brightness-75 contrast-125 drop-shadow-lg object-cover h-full ${
                      hovered && hoveredIndex === index && "blur-sm"
                    }`}
                  />
                  {hovered && hoveredIndex === index && (
                    <Slide
                      direction="up"
                      className="absolute flex-col overflow-hidden top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center"
                    >
                      <div className="justify-center mt-[20px] items-center">
                        <p className="text-[30px] text-center font-bold text-white">
                          {data.title}
                        </p>
                        <div className="mt-[20px] px-[20px]">
                          <div className="flex justify-start space-x-[10px] items-start place-items-start">
                            <p className="text-[20px] text-left font-bold text-white">
                              Departments:
                            </p>
                            <p className="text-[20px] text-left font-medium text-white">
                              {data.department}
                            </p>
                          </div>
                          <div className="flex mt-[10px] justify-start space-x-[10px] items-start place-items-start">
                            <p className="text-[20px] text-left font-bold text-white">
                              Experience:
                            </p>
                            <p className="text-[20px] text-center font-medium text-white">
                              {data.experience}
                            </p>
                          </div>
                          <div className="flex mt-[10px] justify-start space-x-[10px] items-start place-items-start">
                            <p className="text-[20px] w-max text-left font-bold text-white">
                              Experience on Clients:
                            </p>
                            <p className="text-[20px] text-left font-medium text-white">
                              {data.experienceOnClients}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  )}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}

export default Page;
