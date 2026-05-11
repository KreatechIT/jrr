import Image from "next/image";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

function VendorsandClients() {
  const [caroIndex, setCaroIndex] = useState(0);
  const Partners = [
    {
      title: "Our Respective Vendors",
      items: [
        "/logos/robi-airtel.png",
        "/logos/Grameenphone.jpg",
        "/logos/Banglalink.jpg",
        "/logos/zte.png",
        "/logos/vivo.png",
        "/logos/symphony.png",
        "/logos/samsung.png",
        "/logos/tecno.png",
        "/logos/sembcorp.png",
        "/logos/jr-recycling-pic-21.jpg",
        "/logos/Huawei.jpg",
        "/logos/ericsson.jpg",
        "/logos/DHL.jpg",
      ],
    },
    {
      title: "Our Valuable Clients",
      items: [
        "/logos/Bangladesh-army.jpg",
        "/logos/rab.png",
        "/logos/police.png",
        "/logos/nsi.png",
        "/logos/Bangladesh-Bank.jpg",
        "/logos/civil-aviation-authority-logo.jpg",
        "/logos/bd-railway.jpg",
        "/logos/Biman-Bangladesh-Airlines.jpg",
        "/logos/unicef.png",
      ],
    },
  ];

  return (
    <div className="px-[6%] pb-[100px] w-full h-auto">
      <div className="flex space-x-5 place-content-center place-items-center justify-items-center justify-center">
        {Partners.map((data, index) => (
          <button
            key={index}
            onClick={() => setCaroIndex(index)}
            className={`flex mt-[30px] ${
              index === caroIndex
                ? "bg-[#43AC4D] text-white/75"
                : "bg-[#43AC4D]/40 text-black/75"
            }   hover:bg-[#43AC4D] hover:scale-110 place-content-center w-[40%] h-[60px] transition-all px-[10px] rounded-md space-x-2 place-items-center`}
          >
            <p className="font-[700] laptop:text-[24px]">{data.title}</p>
          </button>
        ))}
      </div>

      <div className="mt-[40px] flex flex-wrap gap-y-[30px] gap-x-[10px] place-content-center place-items-center justify-items-center justify-center">
        {Partners[caroIndex].items.map((data, index) => (
          <Slide key={index} direction="up" duration={1000}>
            <div>
              <Image
                loading="eager"
                width={200}
                height={200}
                alt=""
                className="h-[75%] saturate-0 hover:saturate-100 transition-all duration-1000 border-4 border-[#43AC4D] w-[95%]"
                src={data}
              />
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default VendorsandClients;
