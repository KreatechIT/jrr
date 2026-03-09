import React from "react";
import AboutImage from "../assets/about.png";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Items = [
  {
    title: "01. Collection",
    summary:
      "We cooperate with accredited collective e-waste collection systems, especially in the field of e-waste collection and transport. E-waste collection and transport from customers including kerbside collection in municipalities/e-waste transport to processors",
    left: "-200px",
  },
  {
    title: "02. Dismantle",
    summary:
      "A crucial part of e-Waste management is dismantling. Our process of opening each appliance, separating the housing from the rest, separating the parts, removing the hazardous components, and carefully categorizing other components into marketable fractions requires careful attention.",
    left: "-100px",
  },
  {
    title: "03. Segregation",
    summary:
      "We segregate end-of-life electrical and electronic products, prise them apart, put them through the acid wash, and also burn circuit boards in the hope of extracting precious metals",
    left: "0px",
  },
  {
    title: "04. Separation",
    summary:
      "The shredded e-waste is passed under a giant magnet, which is able to pull ferrous metals such as iron and steel from the mix of waste. In addition to this, an eddy current may also be used, separating the nonferrous metals. These materials can then be diverted to dedicated recycling plants for smelting.",
    left: "100px",
  },
  {
    title: "05. Settlement and Reporting",
    summary:
      "Recycle all the e-scrap with all the environmental protection and report BTRC and DOE as per NOC requirements.",
    left: "200px",
  },
];

function OurWorkProcess() {
  return (
    <div className="h-auto relative our-work-process-gradient py-10 flex flex-col place-content-center justify-items-center place-items-center w-full px-8">
      <div className="flex z-[200] flex-col place-content-center justify-items-center place-items-center">
        <Image loading="eager" src={AboutImage} width={60} height={60} alt="" />
        <p className="text-white z-[200] mt-2 text-[40px] uppercase font-black tracking-wide text-center leading-10">
          Our Work Process.
        </p>
      </div>
      <div className="mt-[50px] z-[200] mobile:w-full laptop:w-[80%] flex flex-wrap justify-center gap-4  text-black">
        {Items.map((item) => (
          <Fade
            key={item.title}
            className={`basis-[100%] laptop:basis-[60%] border p-4 desktop:p-8 bg-[#fafafacc] shadow-md rounded-md laptop:relative`}
            style={{ left: item.left }}
          >
            <div>
              <h2 className="uppercase text-center font-black text-2xl text-gradient ">
                {item.title}
              </h2>
              <p className="mt-4">{item.summary}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}

export default OurWorkProcess;
