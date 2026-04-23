"use client";
import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/BlogLayout";
import { getSinglePost } from "@/customFunctions/getSinglePost";
import Image from "next/image";
import Link from "next/link";
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

  if (post.loading) {
    return (
      <div className="flex flex-col bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-[#39B54A] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[28px] font-semibold text-[#39B54A] animate-pulse">
              Loading article...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (post.error) {
    return (
      <div className="flex flex-col bg-white min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-[600px]">
          <div className="flex flex-col items-center gap-4 text-center px-4">
            <svg
              className="w-24 h-24 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-[32px] font-bold text-black/80">
              Blog Not Found
            </p>
            <p className="text-[20px] text-black/60 max-w-md">
              The article you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link
              href="/blog"
              className="mt-4 px-6 py-3 bg-[#43AC4D] hover:bg-[#7ABD4C] text-white text-[20px] font-semibold rounded-lg transition-all"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
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
            loading="lazy"
            width={400}
            height={500}
            className="rounded-xl mobile:w-full laptop:w-[80%] h-[400px] object-cover"
            src={post.image}
            alt={post.title || "Blog post image"}
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
