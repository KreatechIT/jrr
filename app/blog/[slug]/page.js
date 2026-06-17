"use client";
import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/BlogLayout";
import { getSinglePost } from "@/customFunctions/getSinglePost";
import Image from "next/image";
import LatestArticles from "@/components/LatestArticles";
import "@/customCSS/blog.css";

const BlogDetailSkeleton = () => (
  <div className="flex flex-col bg-white">
    <div className="bg-[#1D7773] relative overflow-hidden flex-col w-full h-[540px] flex justify-center items-center">
      <div className="h-12 mobile:w-[80%] laptop:w-[55%] rounded bg-white/20 animate-pulse" />
      <div className="mt-[30px] h-7 w-[220px] rounded bg-white/20 animate-pulse" />
    </div>
    <section className="py-[5%] flex mobile:flex-col laptop:flex-row justify-between px-[5%]">
      <div className="mr-[1%] mobile:w-full laptop:w-[70%]">
        <div className="rounded-xl mobile:w-full laptop:w-[80%] h-[400px] bg-gray-200 animate-pulse" />
        <div className="mt-[30px] space-y-4">
          <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />
          <div className="h-5 w-11/12 rounded bg-gray-200 animate-pulse" />
          <div className="h-5 w-10/12 rounded bg-gray-200 animate-pulse" />
          <div className="h-5 w-3/4 rounded bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="mobile:w-full mobile:mt-10 laptop:mt-0 laptop:w-[30%]">
        <div className="h-10 w-64 rounded bg-gray-200 animate-pulse" />
        <div className="mt-5 space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-28 rounded-2xl bg-gray-200 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  </div>
);

function Page({ params }) {
  const post = getSinglePost(params.slug);

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (post.loading) {
    return <BlogDetailSkeleton />;
  }

  return (
    <div className="flex flex-col bg-white">
      <BlogLayout
        title={post.title}
        date={post.date}
        description={post.description}
      />
      <section className="py-[5%] flex mobile:flex-col laptop:flex-row justify-between px-[5%]">
        <div className="mr-[1%] text-clip text-wrap mobile:w-full laptop:w-[70%]">
          <Image
            loading="eager"
            width={400}
            height={500}
            className="rounded-xl mobile:w-full laptop:w-[80%] h-[400px] object-cover"
            src={post.image}
            alt=""
          />
          {hasWindow && (
            <p
              className="font-lato  text-black/70 mt-[30px] text-[24px] font-semibold"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></p>
          )}
        </div>
        <LatestArticles />
      </section>
    </div>
  );
}

export default Page;
