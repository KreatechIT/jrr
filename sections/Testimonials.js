import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutImage from "../assets/about.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const lists = [
    {
      comment:
        "From the initial consultation to the final disposal of the waste, the team at JR recycling Ltd was excellent in every aspect. They were prompt in responding to my queries and provided a detailed explanation of their process, which put my mind at ease.",
      author: " Zhon Done",
      designation: "Customer",
    },

    {
      comment:
        "I highly recommend JR Recycling Company for anyone looking for reliable and environmentally sustainable e-waste recycling services. They are truly committed to making a positive impact on the environment.",
      author: "Katrina Grace",
      designation: "Customer",
    },
  ];
  return (
    <div className="our-work-process-gradient">
      {" "}
      <div
        className="py-[50px]  px-10 gap-10
    flex laptop:flex-row mobile:flex-col place-items-center mx-auto max-w-[100rem]"
      >
        <div className="flex flex-col place-content-start place-items-start">
          <Image
            loading="eager"
            src={AboutImage}
            width={60}
            height={60}
            alt=""
          />
          <p className="text-white font-bold mt-[20px] uppercase">
            Testimonials
          </p>
          <p className="text-white mobile:w-full laptop:w-[260px] mobile:leading-[50px] laptop:leading-[70px] font-[700] mt-2 mobile:text-[45px] laptop:text-[50px]">
            What Our Clients Say?
          </p>
        </div>

        {lists.map((el, i) => {
          return (
            <Slide
              key={i}
              className="flex flex-col place-content-center place-items-center justify-center items-center mobile:w-full laptop:w-[40%] laptop:h-[465px]"
            >
              <div className="justify-center bg-white/90 p-8 hover:bg-white hover:scale-110 duration-1000 transition-all  items-center flex flex-col justify-items-center ">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  color="#39B54A"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
                <p className="text-center font-medium text-black text-[20px]">
                  {el.comment}
                </p>
                <p className="text-center mt-[20px] font-bold text-black text-[24px]">
                  {el.author}
                </p>
                <p className="text-center font-medium text-[#39B54A] text-[24px]">
                  {el.designation}
                </p>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
