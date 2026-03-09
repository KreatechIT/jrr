import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const elements = [
    {
      end: 12,
      text: "Years Glorious Journey",
    },
    {
      end: 40,
      text: "Permanent Employees",
    },
    {
      end: 55,
      text: "Contractual Employees",
    },
  ];
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="flex flex-col space-y-2">
        {elements.map((el, i) => {
          return (
            <div
              key={i}
              className={`text-white flex place-items-center flex-row space-x-5 font-Lato p-5 md:p-8 ${
                i % 2 === 0 ? "bg-[#63C147]" : "bg-[#8EC148]"
              }`}
            >
              <p className=" text-4xl md:text-6xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={el.end} duration={10} delay={0} />
                )}
                +
              </p>
              <p className="font-lato font-bold text-[30px]">{el.text}</p>
            </div>
          );
        })}
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
