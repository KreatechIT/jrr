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
    image: "/services/Work-at-Height.jpg",
    activity: "Dismantle Out Door AC, Boilers, Chimney, Coolers pipe from height.",
    hazard: "Can be slept and fall down",
    risk: "Fall from Height",
    relevence: "Worker",
    controls: "Safety Belt, Chain Pulley, Skaw Folder or Jog pipe for secure the product and worker.",
  },
  {
    title: "Heavy Loaded Equipment",
    image: "/services/Heavy-Loaded-Equipment.jpg",
    activity: "Generators, Boilers, Chimney, Coolers, Rail wagon delivery.",
    hazard: "Can be slept and displaced",
    risk: "Accident",
    relevence: "Worker",
    controls: "Use Chain Pulley, Fork Lift, Props (For support the floor).",
  },
  {
    title: "Work with Gas Cutter",
    image: "/services/Gas-Cutter.jpg",
    activity: "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "Worker",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Welding",
    image: "/services/welding.jpg",
    activity: "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "People/Assets",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Work with Grinding Cutter",
    image: "/services/Grinding-Cutter.jpg",
    activity: "Generators, Boilers, Chimney, Coolers, Rail wagon, Ship Breaking etc.",
    hazard: "Fire",
    risk: "Burn everything",
    relevence: "Worker",
    controls: "Fire Extinguisher in place, Water/Sand, Fire Blanket.",
  },
  {
    title: "Dismantling",
    image: "/services/Dismantling.jpg",
    activity: "Work with Hammer, Compressor Machine",
    hazard: "Miss shot, Electric shock",
    risk: "Injury",
    relevence: "Worker",
    controls: "Right quality equipment's, Compressor machine",
  },
  {
    title: "Mechanical Handling",
    image: "/services/Mechanical-Handling.jpg",
    activity: "Caring Equipment over 100 kg",
    hazard: "Can be slept and displaced",
    risk: "Injury",
    relevence: "Worker",
    controls: "Use Fork Lift/ Chain Pulley/Crain will in place to handle.",
  },
  {
    title: "Manual Handling",
    image: "/services/Manual-Handling.jpg",
    activity: "Caring Equipment bellow 100kg",
    hazard: "Can be slept and displaced",
    risk: "Injury",
    relevence: "Worker",
    controls: "Use Team having minimum 4 workers.",
  },
  {
    title: "Electric Works",
    image: "/services/Electric-Works.jpg",
    activity: "Electric Works",
    hazard: "Electrification, Short Circuit, Fire",
    risk: "Electric Burn, Electric Shock.",
    relevence: "Worker/Asset",
    controls: "Use Electric tester, must ensure one helper.",
  },
  {
    title: "Transportation",
    image: "/services/Transportation.jpg",
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
        bg="/backgrounds/8.jpeg"
      />
      <section className="p-[5%] mx-auto flex">
        <div className="w-full">
          {Blogs.map((data, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="flex space-x-[20px] place-items-center">
                  <Image
                    loading="eager"
                    src={data.image}
                    alt=""
                    width={100}
                    height={100}
                  />
                  <p className="text-[24px] font-bold">{data.title}</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex flex-col space-y-[10px]">
                  <div className="flex space-x-[10px]">
                    <p className="text-[20px] font-bold">Activity:</p>
                    <p className="text-[20px]">{data.activity}</p>
                  </div>
                  <div className="flex space-x-[10px]">
                    <p className="text-[20px] font-bold">Hazard:</p>
                    <p className="text-[20px]">{data.hazard}</p>
                  </div>
                  <div className="flex space-x-[10px]">
                    <p className="text-[20px] font-bold">Risk:</p>
                    <p className="text-[20px]">{data.risk}</p>
                  </div>
                  <div className="flex space-x-[10px]">
                    <p className="text-[20px] font-bold">Relevence:</p>
                    <p className="text-[20px]">{data.relevence}</p>
                  </div>
                  <div className="flex space-x-[10px]">
                    <p className="text-[20px] font-bold">Controls:</p>
                    <p className="text-[20px]">{data.controls}</p>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Page;
