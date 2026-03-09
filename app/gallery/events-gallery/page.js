"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import axios from "axios";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

function Page() {
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = `https://blog.jrrecyclingsolutionsltd.com.bd`; // Ensure this is defined in your .env file

  useEffect(() => {
    // Function to get the URL of the featured image
    const fetchImage = async (mediaId) => {
      if (!mediaId) return "/path/to/default/image.png"; // Provide a default image path
      try {
        const result = await axios.get(
          `${baseUrl}/wp-json/wp/v2/media/${mediaId}`
        );
        return result.data.source_url;
      } catch (error) {
        console.error("Error fetching image:", error);
        return "/path/to/default/image.png"; // Fallback image path
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`${baseUrl}/wp-json/wp/v2/galleries`);
        const galleryData = await Promise.all(
          response.data.map(async (gallery) => {
            const imageUrl = await fetchImage(gallery.featured_media);
            return {
              ...gallery,
              imageUrl,
            };
          })
        );
        setGalleries(galleryData);
        console.log(galleryData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch galleries:", error);
        setError("Failed to load galleries.");
        setIsLoading(false);
      }
    };

    fetchGalleries();
  }, [baseUrl]);

  const Images = [
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/23.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/22.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/21.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/20.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/19.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/18.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/17.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/16.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/15.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/14.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/13.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/12.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/11.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/10.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/9.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/8.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/7.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/6.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/5.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/4.jpg",
    },

    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/3.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/2.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/1.jpg",
    },
  ];

  const ImagesTwo = [
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/26.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/25.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/24.jpeg",
    },
  ];

  const ImagesThree = [
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/15-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/14-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/13-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/12-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/11-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/10-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/9-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/8-1.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/7.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/6.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/5.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/4.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/3.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/2.jpeg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/1.jpeg",
    },
  ];

  const ImagesFour = [
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0005.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0004.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0003.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0002.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0017.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0016.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0015.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0014.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0013.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0012.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0011.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0010.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0009.jpg",
    },

    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0008.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0007.jpg",
    },
    {
      title: "",
      url: "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240514-WA0006.jpg",
    },
  ];

  return (
    <div className="">
      <Layout
        title="Events Gallery"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/9.jpeg`}
      />
      <section className="px-[5%] mt-[40px] transition-all  flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%] px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[26px] mt-[30px] text-black/60">
                Meeting with Delegation of Foreign Economic Relations Board
                (DEIK) of Turkiye, Organize by FBCCI, 13 May&apos;2024.
              </p>
            </div>
          </Slide>
        </div>
        <PhotoProvider>
          <div className="py-[50px] flex flex-wrap gap-5 items-center content-center justify-center">
            <Slide direction="left">
              {ImagesFour.map((gallery, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <PhotoView src={gallery.url}>
                    <div className="w-[300px] h-[200px]">
                      <Image
                        loading="eager"
                        layout="fill"
                        src={gallery.url}
                        alt={gallery.title}
                      />
                    </div>
                  </PhotoView>
                </div>
              ))}
            </Slide>
          </div>
        </PhotoProvider>

        <div className="h-[3px] my-[20px] mb-[50px] w-full bg-black" />
      </section>
      <section className="px-[5%] transition-all  py-[3%] flex flex-col justify-center items-center place-content-center place-items-start">
        <div className="w-[100%]  px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[22px] mt-[30px] text-black/60">
                JR Recycling Solutions Ltd. hosted a delegation from BTRC –
                Spectrum Management, including Director General BG. Manirazzaman
                Jewel PSC, Director of Signal Lt. Col. Auwal Uddin Ahmed PSC,
                Deputy Director Eng. Md. Mahfuzul Alam, and Sr. Asst. Director
                Md. Jakaria Bhuiyan. Both sides discussed sustainability and the
                importance of collaboration between the public and private
                sectors.
              </p>
            </div>
          </Slide>
        </div>
        <PhotoProvider>
          <div className="py-[50px] flex flex-wrap gap-5 items-center content-center justify-center">
            <Slide direction="left">
              {Images.map((gallery, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <div className="laptop:block mobile:hidden">
                    <PhotoView src={gallery.url}>
                      <div className="w-[300px] h-[200px]">
                        <Image
                          loading="eager"
                          layout="fill"
                          src={gallery.url}
                          alt={gallery.title}
                        />
                      </div>
                    </PhotoView>
                  </div>
                  <div className="laptop:hidden mobile:flex">
                    <div className="w-[300px] h-[200px]">
                      <Image
                        loading="eager"
                        layout="fill"
                        src={gallery.url}
                        alt={gallery.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </PhotoProvider>

        <div className="h-[3px] my-[10px] w-full bg-black" />
      </section>
      <section className="px-[5%] transition-all  flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%]  px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[22px] mt-[30px] text-black/60">
                JR Recycling Solutions Limited is delighted to announce its
                partnership with NAAFCO Group. We have signed to reduce the
                pollution of the Environment from the improper management of
                hazardous e-waste. We agreed to work together for the betterment
                of our Environment to achieve the goal of SDG in the e-waste
                sector in Bangladesh. At the function, Mr. Saiful Huda (Managing
                Director), Mr. Debasish Nag (General Manager, HR & Admin), and
                Mr. Mahamudur Rahman (Manager, IT) of NAAFCO Group. And Mr. M A
                Hossain (Managing Director), Mr. Shah Alam (Chief Advisor) Mr.
                Md. Manzoor Hasan, General Manager (Operations) of JR Recycling
                Solutions, were present at the meeting.
              </p>
            </div>
          </Slide>
        </div>
        <PhotoProvider>
          <div className="py-[50px] flex flex-wrap gap-5 items-center content-center justify-center">
            <Slide direction="left">
              {ImagesTwo.map((gallery, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <PhotoView src={gallery.url}>
                    <div className="w-[300px] h-[200px]">
                      <Image
                        loading="eager"
                        layout="fill"
                        src={gallery.url}
                        alt={gallery.title}
                      />
                    </div>
                  </PhotoView>
                </div>
              ))}
            </Slide>
          </div>
        </PhotoProvider>

        <div className="h-[3px] my-[10px] w-full bg-black" />
      </section>
      <section className="px-[5%] transition-all  flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%] px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[26px] mt-[30px] text-black/60">
                MOU Signing Ceremony
              </p>
            </div>
          </Slide>
        </div>
        <PhotoProvider>
          <div className="py-[50px] flex flex-wrap gap-5 items-center content-center justify-center">
            <Slide direction="left">
              {ImagesThree.map((gallery, index) => (
                <div key={index} style={{ margin: "10px" }}>
                  <PhotoView src={gallery.url}>
                    <div className="w-[300px] h-[200px]">
                      <Image
                        loading="eager"
                        layout="fill"
                        src={gallery.url}
                        alt={gallery.title}
                      />
                    </div>
                  </PhotoView>
                </div>
              ))}
            </Slide>
          </div>
        </PhotoProvider>

        <div className="h-[3px] my-[20px] mb-[50px] w-full bg-black" />
      </section>
    </div>
  );
}

export default Page;
