"use client";
import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/BlogLayout";
import { getSinglePost } from "@/customFunctions/getSinglePost";
import Image from "next/image";
import LatestArticles from "@/components/LatestArticles";
import "@/customCSS/blog.css";

function Page({ params }) {
  const post = getSinglePost(params.slug);

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

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
