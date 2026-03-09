import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import bgImage from "@/assets/jr recycling waste managenent system.jpg";
import Image from "next/image";
import FloatingButton from "./FloatingButtons";

function Layout({ title, bg }) {
  return (
    <div className="bg-[#1D7773] relative overflow-hidden flex-col w-full h-[540px] flex justify-center items-center content-center justify-items-center">
      <Image
        loading="eager"
        src={bg ? bg : bgImage}
        fill
        className="object-cover brightness-[0.6]"
        alt="jr recycling waste managenent system"
      />
      <div className="fixed z-[10000] right-[250px] bottom-[30px]">
        <FloatingButton />
      </div>
      <Slide direction="down">
        <h1 className="text-white text-center leading-[44px] py-[10px] mobile:text-[40px] laptop:text-[65px] font-bold">
          {title}
        </h1>
      </Slide>
      <Slide direction="up">
        <div className="flex p-4 justify-center">
          <Link
            href="/"
            className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-lg"
          >
            Home
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="#39B54A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
          <p className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-[20px]">
            {title}
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default Layout;
