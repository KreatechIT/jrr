import React from "react";
import AboutImage from "../assets/about.png";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Services = [
  {
    path: "/services/e-waste-recycling",
    id: "01",
    image: "/logos/recycling.png",
    title: ["E-Waste", "Recycling"],
    desc: "We are one of the number one E-Waste Management Company in Bangladesh...",
  },
  {
    path: "/services/demandandsupply",
    id: "02",
    image: "/logos/customer.png",
    title: ["Demand and", "Supply"],
    desc: "We are specialized in accelerating and optimizing IT product, food & feed and...",
  },
  {
    path: "/services/data-destructions",
    id: "03",
    image: "/logos/data.png",
    title: ["Data", "Destructions"],
    desc: "TWe are only in the country to provide you the most secure Data Destruction...",
  },
  {
    path: "/services/construction-dismantle",
    id: "04",
    image: "/logos/construction.png",
    title: ["Construction", "& Dismantle"],
    desc: "Our trained team Construct & Dismantle all kinds of telecom network...",
  },
  {
    path: "/services/green-truck",
    id: "05",
    image: "/logos/garbage-truck2.png",
    title: ["Green", "Truck"],
    desc: "Our green truck is ready to serve 24/7. We collect e-waste from your location...",
  },
  {
    path: "/services/it-asset-disposition-refurbishment",
    id: "06",
    image: "/logos/computer.png",
    title: ["IT Asset", "Disposition"],
    desc: "We provide secure data disposition & refurbishment of your outdated...",
  },
];

function OurServices() {
  return (
    <div className="h-auto py-[100px] flex flex-col place-content-center justify-items-center place-items-center w-full px-8  mx-auto">
      <div className="flex flex-col items-center">
        <Image loading="eager" src={AboutImage} width={60} height={60} alt="" />
        <p className="text-[#39B54A] font-bold mt-[20px] uppercase">
          Our Services
        </p>
        <p className="text-black laptop:leading-[48px] text-center font-[700] mt-2 text-2xl tablet:text-4xl">
          Recycle Here!! <br /> Plant the Seeds of Sustainability
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-[15px] gap-y-[30px] mt-10 container">
        {Services.map((data, index) => (
          <Fade delay={250 * index} key={index} className="w-full">
            <div className="px-[30px] py-[20px] transition-shadow h-[275px] border border-[#30743c]/30 shadow-sm hover:shadow-lg duration-300 card-gradient">
              <div className="flex gap-6">
                <Image
                  alt=""
                  width={60}
                  height={60}
                  src={data.image}
                  className="w-[60px] h-[60px]"
                />
                <h3 className="text-xl tablet:text-[24px] uppercase font-black text-gray-700 text-gradient">
                  {data.title.map((data) => (
                    <span key={data} className="block">
                      {data}
                    </span>
                  ))}
                </h3>
              </div>

              <p
                className={`text-black/60 w-auto mt-[20px] tablet:text-[18px] line-clamp-3`}
              >
                {data.desc}
              </p>
              <Link
                href={data.path}
                className="flex mt-[30px] w-[140px] tablet:w-[160px] bg-[#43AC4D] hover:bg-[#7ABD4C] text-white/75 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
              >
                <p className="tablet:text-xl font-semibold text-white py-2">
                  Read More
                </p>
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
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default OurServices;
