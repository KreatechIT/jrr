"use client";
import React, { useState } from "react";
import AboutImage from "../assets/about.png";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Members() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul className="my-[20px]" style={{ margin: "0px" }}>
          {dots}
        </ul>
      </div>
    ),
  };

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

  return (
    <div className="py-[100px] px-[3%] h-auto bg-[#F6F9FF]">
      <div className="flex flex-col place-content-center justify-items-center place-items-center">
        <Image loading="eager" src={AboutImage} width={60} height={60} alt="" />
        <p className="text-[#39B54A] font-bold mt-[20px]">Our Team</p>
        <p className="text-black mobile:leading-[40px] text-center laptop:leading-[10px] font-[700] mt-[30px] text-[40px]">
          Our Member Ready To Start Your Project
        </p>
      </div>
      <Fade>
        <div className="slider-container mt-[100px] px-4">
          <Slider {...settings} className="w-full justify-center items-center">
            {Items.map((data, index) => (
              <div
                key={index}
                className="w-[370px] flex flex-col content-center justify-items-center place-content-center place-items-center justify-center items-center bg-white h-[700px] rounded-xl shadow-2xl overflow-hidden relative"
              >
                <Image
                  loading="eager"
                  alt=""
                  width={300}
                  height={400}
                  src={data.image}
                  className="w-full object-cover h-auto"
                />
                <div className="justify-center mt-[20px] items-center h-[15%] px-5 text-black text-center">
                  <p className="text-[27px] font-bold">{data.title}</p>
                  <p className="text-[90%] text-center font-medium text-black">
                    {data.post}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Fade>
    </div>
  );
}

export default Members;
