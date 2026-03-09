"use client";
import { BackgroundVideo } from "@/components/BackgroundVideo";
import FloatingButton from "@/components/FloatingButtons";
import AboutCompany from "@/sections/AboutCompany";
import Members from "@/sections/Members";
import NewsAndUpdate from "@/sections/NewsAndUpdate";
import OurServices from "@/sections/OurServices";
import OurWorkProcess from "@/sections/OurWorkProcess";
import Partners from "@/sections/Partners";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import { ArrowOutward } from "@mui/icons-material";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <div>
        <div className="fixed z-[99999] right-[250px] bottom-[30px]">
          <FloatingButton />
        </div>

        <Slide direction="down" triggerOnce>
          <div className="flex relative mobile:min-h-[600px] laptop:min-h-screen flex-col font-roboto">
            <div className="hidden laptop:block">
              <BackgroundVideo />
            </div>
            <div className="mobile:bg-black/95 laptop:bg-black/25 z-50 absolute laptop:h-full mobile:h-[600px] w-full flex items-center hero-mobile-gradient">
              <div className="mobile:ml-[7%] laptop:ml-[10%] laptop:w-[50%] mobile:w-[90%] laptop:backdrop-brightness-90 px-4 py-2 rounded-md">
                <h1 className="laptop:text-[50px] mobile:text-[25px] mt-[20px] mobile:leading-[33px] laptop:leading-[60px] font-[700] text-white">
                  Empowering a Greener Future:{" "}
                  <br className="laptop:hidden desktop:block" /> E-Waste
                  Recycling by JR Solutions LTD
                </h1>
                <h2 className="laptop:text-[24px] mobile:text-[17px] font-[500] text-white mt-4">
                  Having certifications like{" "}
                  <span className="font-bold">
                    R2: 2013 & ISO 9001:2015, 14001:2015, 27001:2022, 45001:2018
                  </span>{" "}
                  demonstrates our commitment to responsible e-waste management.
                </h2>

                <div className="mt-4">
                  <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/1GMyKVj0rNTrTo60PaC-1hG9wQyRldhOw/view"
                    className=" text-white rounded-md py-2.5 px-5  bg-[#30743c] hover:bg-[#1b4332] transition-all duration-300 uppercase text-sm text-center flex items-center gap-4 max-w-72 border-2 border-[#30743c]"
                  >
                    View Our Company Profile <ArrowOutward className="mb-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <AboutCompany />
        <OurServices />
        <OurWorkProcess />
        <Projects />
        <Members />
        <Testimonials />
        <NewsAndUpdate />
        <Partners />
      </div>
    </>
  );
}
