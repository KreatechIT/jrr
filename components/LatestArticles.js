import { getAllPosts } from "@/customFunctions/getAllPosts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function LatestArticles() {
  const allItems = getAllPosts();

  return (
    <div className="mobile:w-full mt-0 laptop:w-[30%]">
      <p className="text-[40px] w-max font-bold text-black">Latest Articles</p>
      <div className="bg-[#22C55E] w-full h-[7px]" />
      <div className="space-y-4 mt-5">
        {allItems.loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl flex py-5 px-4 bg-gray-200 animate-pulse"
              >
                <div className="h-[100px] w-[100px] shrink-0 rounded bg-gray-300" />
                <div className="ml-5 flex-1 space-y-3 pt-2">
                  <div className="h-5 w-full rounded bg-gray-300" />
                  <div className="h-5 w-2/3 rounded bg-gray-300" />
                </div>
              </div>
            ))
          : allItems.posts.map((data, index) => (
          <Link
            href={`/blog/${data.slug}`}
            key={index}
            className="bg-gray-200 hover:scale-105 transition-all cursor-pointer space-x-5 place-items-center rounded-2xl flex py-5 px-4"
          >
            <Image
              loading="eager"
              src={allItems.imageUrls[data.featured_media]}
              alt={data.title.rendered}
              height={100}
              width={100}
            />
            <p className="text-[20px] font-semibold text-black">
              {data.title.rendered}
            </p>
          </Link>
            ))}
      </div>
    </div>
  );
}

export default LatestArticles;
