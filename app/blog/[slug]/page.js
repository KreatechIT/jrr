"use client";
import React, { useEffect, useState } from "react";
import BlogLayout from "@/components/BlogLayout";
import { getSinglePost } from "@/customFunctions/getSinglePost";
import Image from "next/image";
import Link from "next/link";
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