"use client";

import React, { useEffect, useState } from "react";
import AboutImage from "../assets/about.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Slide } from "react-awesome-reveal";

function NewsAndUpdate() {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState({});

  const getImageUrl = async (mediaId) => {
    try {
      const response = await axios.get(
        `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/media/${mediaId}`
      );
      return response.data.source_url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return ""; // Return an empty string in case of error
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
        const urls = {};
        await Promise.all(
          response.data.map(async (post) => {
            if (post.featured_media) {
              const imageUrl = await getImageUrl(post.featured_media);
              urls[post.featured_media] = imageUrl;
            }
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const FinalDate = (gmtDateStr) => {
    var gmtDate = new Date(gmtDateStr);

    var month = gmtDate.toLocaleString("default", { month: "long" });
    var day = gmtDate.getUTCDate();
    var year = gmtDate.getUTCFullYear();

    var normalDateStr = month + " " + day + ", " + year;

    return normalDateStr;
  };

  return (
    <div className="py-[100px] px-[5%] h-auto bg-[#F5F9FF] ">
      <div className="flex laptop:flex-row mobile:flex-col justify-between place-items-start  px-4">
        <div className="flex flex-col place-content-start place-items-start">
          <Image
            loading="eager"
            src={AboutImage}
            alt=""
            width={60}
            height={60}
          />
          <p className="text-[#39B54A] font-bold mt-[20px] uppercase">
            News & Updates
          </p>
          <p className="text-black mobile:leading-[50px] laptop:leading-[70px] font-[700] mt-2 text-3xl laptop:text-[40px]">
            Check Latest News & Articles
          </p>
        </div>
        <Link
          href="/blog"
          className="flex mobile:w-[60%] laptop:w-[20%] hover:scale-105 duration-[1000ms] justify-center items-center mobile:h-[40px] laptop:h-[70px] mt-[20px] bg-[#43AC4D] hover:bg-[#8EC148] text-white/80 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
        >
          <p className="font-[600] laptop:text-[24px] ">View All Blogs</p>
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
      </div>
      <div className="mt-[60px] justify-center items-center w-full flex laptop:flex-row mobile:flex-col flex-wrap place-items-center gap-x-[20px] gap-y-[60px] px-4">
        {posts.slice(0, 4).map((data, index) => (
          <Slide key={index}>
            <div className="flex flex-col overflow-hidden rounded-xl laptop:w-[350px] mobile:w-full bg-white shadow-xl hover:shadow-2xl transition-all">
              <Image
                loading="eager"
                width={300}
                height={300}
                src={imageUrls[data.featured_media]}
                alt={data.title.rendered}
                className="h-[200px] w-full object-cover"
              />

              <div className="flex flex-col flex-grow">
                <div className="px-[6%] py-[6%] flex flex-col flex-grow">
                  <p className="font-bold text-xl tablet:text-[26px] leading-8 text-[#39B54A] line-clamp-3 ">
                    {data.title.rendered}
                  </p>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.excerpt.rendered,
                    }}
                    className="my-[5%] max-h-[140px] overflow-hidden line-clamp-3 text-black/70 font-medium"
                  ></p>
                  <Link
                    href={{
                      pathname: `/blog/${data.title.rendered}`,
                      query: {
                        desc: data.excerpt.rendered,
                        title: data.title.rendered,
                        date: FinalDate(data.date),
                        image: imageUrls[data.featured_media],
                      },
                    }}
                    className="flex mt-auto w-[80%] bg-[#43AC4D] hover:bg-[#7ABD4C] text-white/75 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
                  >
                    <p className="font-[600] text-lg laptop:text-[24px]">
                      Continue Reading
                    </p>
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
                </div>
                <div className="w-full h-[1px] bg-black/30" />
                <p className="px-[6%] py-[2%] font-bold text-[20px] text-black/50">
                  {FinalDate(data.date)}
                </p>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
}

export default NewsAndUpdate;
