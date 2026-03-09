import Link from "next/link";
import React from "react";

const ButtonContactUs = () => {
  return (
    <Link
      href="/contact-us"
      className="flex w-[200px] duration-[1000ms] justify-center items-center h-[60px] mt-[30px] 
              bg-[#43AC4D] hover:bg-[#FADC22] text-white/75 hover:text-black
              transition-all px-[10px] rounded-md space-x-2 place-items-center"
    >
      <p className="font-[600] text-[24px]">Contact Us</p>
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
  );
};

export default ButtonContactUs;
