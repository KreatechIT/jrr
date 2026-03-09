import React from "react";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import FloatingButton from "./FloatingButtons";

import bg from "@/assets/jr-recycling-workers.jpg";

function BlogLayout({ title, date, description }) {
  return (
    <div className="bg-[#1D7773] relative overflow-hidden flex-col w-full h-[540px] flex justify-center items-center content-center justify-items-center">
      <Image
        loading="eager"
        src={bg}
        fill
        className="object-cover brightness-[0.3]"
        alt="jr recycling waste managenent system"
      />
      <div className="fixed z-[10000] right-[250px] bottom-[30px]">
        <FloatingButton />
      </div>
      <Slide direction="down">
        <p className="text-white laptop:px-6 mobile:px-[20px] mobile:text-[30px] laptop:text-[60px] text-center font-bold">
          {title}
        </p>
      </Slide>
      <Slide direction="up">
        <div className="flex mt-[20px] place-items-center space-x-[10px]">
          <FontAwesomeIcon
            icon={faCalendar}
            color="#39B54A"
            style={{
              height: "30px",
              width: "30px",
            }}
          />
          <p className="font-bold mt-[7px] text-[#39B54A] text-[22px]">
            {date}
          </p>
        </div>
      </Slide>
    </div>
  );
}

export default BlogLayout;
