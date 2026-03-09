import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="h-[auto] py-[50px] flex flex-col  items-center bg-black overflow-hidden">
      <div className="flex w-[90%] space-x-6 justify-between border-white/55 pb-[20px] border-b-[1px]">
        <div className="w-[500px] flex flex-col">
          <p className="font-[700] text-[23px] py-[5px] border-white border-b-[1px] text-white">
            Head Office
          </p>
          <p className="text-white py-[20px]">
            69 (5th Floor), Master Para Road, Barabag, Mirpur-2, Dhaka-1216
          </p>
        </div>
        <div className="w-[500px] flex flex-col">
          <p className="font-[700] text-[23px] py-[5px] border-white border-b-[1px] text-white">
            Warehouse
          </p>
          <p className="text-white py-[20px]">
            Holdings No : 0042-03, Mondol Para, West Rajashon, Savar-1340,
            Dhaka.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-[90%] justify-between gap-y-[20px] laptop:space-x-[40px] mobile:space-x-0 laptop:text-[23px] mobile:text-[18px]  py-[40px]">
        <div className="w-auto flex flex-col">
          <div className="flex flex-col space-y-[20px] place-items-start">
            <p className="font-[700] laptop:text-[23px] mobile:text-[18px] py-[5px] text-white">
              Call Us
            </p>
            <Link
              href="tel:+8801713969481"
              className="flex place-items-center cursor-pointer space-x-[20px]"
            >
              <div className="bg-[#39B54A] content-center flex  place-content-center place-items-center w-[40px] h-[40px] rounded-full">
                <FontAwesomeIcon
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                  color="white"
                  icon={faPhone}
                />
              </div>
              <div>
                <p className="font-[700] laptop:text-[23px] mobile:text-[18px] text-white">
                  +8801713368998
                </p>
                <p className="font-[700] laptop:text-[23px] mobile:text-[18px] text-white">
                  +8801713969481
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-auto flex flex-col">
          <div className="flex flex-col space-y-[20px] place-items-start">
            <p className="font-[700] laptop:text-[23px] mobile:text-[18px] py-[5px] text-white">
              Email Us
            </p>
            <Link
              href="mailto:jrrecyclingsolutionsltd@gmail.com"
              className="flex place-items-center cursor-pointer space-x-[10px]"
            >
              <div className="bg-[#39B54A] content-center flex  place-content-center place-items-center w-[40px] h-[40px] rounded-full">
                <FontAwesomeIcon
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                  color="white"
                  icon={faEnvelope}
                />
              </div>
              <p className=" text-white">jrrecyclingsolutionsltd@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="laptop:w-[15%] mobile:w-full flex flex-col">
          <div className="flex flex-col space-y-[20px] mobile:place-items-center laptop:place-items-start">
            <p className="font-[700] mobile:place-self-center laptop:place-self-end laptop:text-[23px] mobile:text-[18px] py-[5px] text-white">
              Follow Us
            </p>
            <div className="flex place-items-center space-x-[12px]">
              <Link
                href="https://www.facebook.com/jr.enterprise7"
                className="bg-[#39B54A] hover:scale-110 transition-all content-center flex  place-content-center place-items-center w-[40px] h-[40px]  rounded-full"
              >
                <FontAwesomeIcon
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                  color="white"
                  icon={faFacebook}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/jrrecyclingsolutions/"
                className="bg-[#39B54A] hover:scale-110 transition-all content-center flex  place-content-center place-items-center w-[40px] h-[40px] rounded-full"
              >
                <FontAwesomeIcon
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                  color="white"
                  icon={faLinkedin}
                />
              </Link>
              <Link
                href="https://www.facebook.com/jr.enterprise7"
                className="bg-[#39B54A] hover:scale-110 transition-all content-center flex  place-content-center place-items-center w-[40px] h-[40px]  rounded-full"
              >
                <FontAwesomeIcon
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                  color="white"
                  icon={faYoutube}
                />
              </Link>
              <Link
                href="https://www.instagram.com/jrrecyclingsolutionsltd/"
                className="bg-[#39B54A] hover:scale-110 transition-all content-center flex  place-content-center place-items-center w-[40px] h-[40px] rounded-full"
              >
                <FontAwesomeIcon
                  style={{
                    height: "60%",
                    width: "60%",
                  }}
                  color="white"
                  icon={faInstagram}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex place-content-center place-items-center border-t-2 border-white/45 px-4">
        <p className="text-[17px] py-[30px] text-white">
          © 2024 JR Recycling Solutions Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
