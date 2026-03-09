"use client";
import Layout from "@/components/Layout";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const Blogs = [
  {
    title: "Work at Height",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Work-at-Height.jpg",
    activity:
      "Dismantle Out Door AC, Boilers, Chimney, Coolers pipe from height.",
    hazard: "Can be slept and fall down",
    risk: "Fall from Height",
    relevence: "Worker",
    controls:
      "Safety Belt, Chain Pulley, Skaw Folder or Jog pipe for secure the product and worker.",
  },
  {
    title: "Heavy Loaded Equipment",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Heavy-Loaded-Equipment.jpg",
    activity: "Generators, Boilers, Chimney, Coolers, Rail wagon delivery.",
    hazard: "Can be slept and displaced",
    risk: "Accident",
    relevence: "Worker",
    controls: "Use Chain Pulley, Fork Lift, Props (For support the floor).",
  },
  {
    title: "Work with Gas Cutter",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Gas-Cutter.jpg",
    activity:
      "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "Worker",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Welding",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/welding.jpg",
    activity:
      "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "People/Assets",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Work with Grinding Cutter",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Grinding-Cutter.jpg",
    activity:
      "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "Worker",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Dismantling",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Dismantling.jpg",
    activity: "Work with Hammer, Compressor Machine",
    hazard: "Miss shot, Electric shock",
    risk: "Injury",
    relevence: "Worker",
    controls: "Right quality equipment’s, Compressor machine",
  },
  {
    title: "Mechanical Handling",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Mechanical-Handling.jpg",
    activity: "Caring Equipment over 100 kg",
    hazard: "Can be slept and displaced",
    risk: "Injury",
    relevence: "Worker",
    controls: "Use Fork Lift/ Chain Pulley/Crain will in place to handle.",
  },
  {
    title: "Manual Handling",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Manual-Handling.jpg",
    activity: "Caring Equipment bellow 100kg",
    hazard: "Can be slept and displaced",
    risk: "Injury",
    relevence: "Worker",
    controls: "Use Team having minimum 4 workers.",
  },
  {
    title: "Electric Works",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Electric-Works.jpg",
    activity: "Electric Works",
    hazard: "Electrification, Short Circuit, Fire",
    risk: "Electric Burn, Electric Shock.",
    relevence: "Worker/Asset",
    controls: "Use Electric tester, must ensure one helper.",
  },
  {
    title: "Transportation",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/Transportation.jpg",
    activity: "Road Travel",
    hazard: "Road Travel",
    risk: "Accident",
    relevence: "People, Asset",
    controls: "Use well fit vehicle, Skilled Driver with driving License.",
  },
];

function Page() {
  return (
    <div className="">
      <Layout
        title="Our Work"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/8.jpeg`}
      />
      <section className="p-[5%] mx-auto flex">
        <div className="mt-[60px] justify-center items-center w-full flex laptop:flex-row mobile:flex-col flex-wrap place-items-center gap-x-[2%] gap-y-[60px]">
          {Blogs.map((data, index) => (
            <div
              key={index}
              className="min-h-[600px] h-auto flex flex-col overflow-hidden rounded-xl laptop:w-[350px] mobile:w-full bg-white shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="h-[250px] w-full">
                <Image
                  loading="eager"
                  width={350}
                  height={250}
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full"
                />
              </div>

              <div className="px-[6%] py-[6%] flex place-content-center place-items-center">
                <p className="font-bold text-[26px] leading-8 text-[#39B54A] ">
                  {data.title}
                </p>
              </div>
              <div className="flex flex-col">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="font-bold text-black font-lato text-[20px]"
                  >
                    Activity/Subtask
                  </AccordionSummary>
                  <AccordionDetails className="font-semibold font-lato text-[18px] text-black/60">
                    {data.activity}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="font-bold text-black font-lato text-[20px]"
                  >
                    Hazard
                  </AccordionSummary>
                  <AccordionDetails className="font-semibold font-lato text-[18px] text-black/60">
                    {data.hazard}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="font-bold text-black font-lato text-[20px]"
                  >
                    Risk
                  </AccordionSummary>
                  <AccordionDetails className="font-semibold font-lato text-[18px] text-black/60">
                    {data.risk}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="font-bold text-black font-lato text-[20px]"
                  >
                    Relevance (Who/what will be harmed)
                  </AccordionSummary>
                  <AccordionDetails className="font-semibold font-lato text-[18px] text-black/60">
                    {data.relevence}
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="font-bold text-black font-lato text-[20px]"
                  >
                    Engineering Controls
                  </AccordionSummary>
                  <AccordionDetails className="font-semibold font-lato text-[18px] text-black/60">
                    {data.controls}
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
