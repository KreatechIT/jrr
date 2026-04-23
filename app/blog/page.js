"use client";
import Layout from "@/components/Layout";
import Link from "next/link";
import React, { useState } from "react";
import bg from "@/assets/jr-recycling-workers.jpg";
import Image from "next/image";
import { Pagination } from "@mui/material";
import usePosts from "@/customFunctions/usePosts";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const [page_number, setPageNumber] = useState(1);
  const { posts, imageUrls, totalPosts, postsPerPage, loading, error } =
    usePosts(page_number);

  const FinalDate = (gmtDateStr) => {
    var gmtDate = new Date(gmtDateStr);

    var month = gmtDate.toLocaleString("default", { month: "long" });
    var day = gmtDate.getUTCDate();
    var year = gmtDate.getUTCFullYear();

    var normalDateStr = month + " " + day + ", " + year;

    return normalDateStr;
  };

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const decodeHtmlEntities = (text) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  const truncateTitle = (title, wordLimit) => {
    const decodedTitle = decodeHtmlEntities(title);
    const words = decodedTitle.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return decodedTitle;
  };

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <Layout
        title="Blog"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/16.jpeg`}
      />
      <section className="py-[5%] px-[5%] min-h-[500px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 border-4 border-[#39B54A] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[28px] font-semibold text-[#39B54A] animate-pulse">
                Loading articles...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
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
                No Blogs Found
              </p>
              <p className="text-[20px] text-black/60 max-w-md">
                Unable to load blog articles at the moment. Please try again later.
              </p>
            </div>
          </div>
        ) : posts.length > 0 ? (
          <div className="mt-[60px] justify-center items-center w-full flex laptop:flex-row mobile:flex-col flex-wrap place-items-center gap-x-[20px] gap-y-[60px]">
            {posts.map((data, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer overflow-hidden rounded-xl laptop:w-[350px] mobile:w-full bg-white shadow-xl hover:shadow-2xl transition-all"
                style={{ height: "580px" }}
                onClick={() => {
                  router.push(`/blog/${data.slug}`);
                }}
              >
                <Image
                  loading="lazy"
                  height={300}
                  width={300}
                  src={imageUrls[data.featured_media]}
                  alt={decodeHtmlEntities(data.title.rendered)}
                  className="h-[200px] w-full object-cover"
                />

                <div className="flex flex-col flex-grow">
                  <div className="px-[6%] py-[6%] flex flex-col flex-grow">
                    <p className="font-bold max-h-[200px] text-[22px] leading-8 text-[#39B54A] ">
                      {truncateTitle(data.title.rendered, 10)}
                    </p>

                    <p
                      dangerouslySetInnerHTML={{
                        __html: data.excerpt.rendered,
                      }}
                      className="my-[5%] max-h-[140px] overflow-hidden line-clamp-3 text-black/70 font-medium text-[20px]"
                    ></p>
                    <Link
                      href={`/blog/${data.slug}`}
                      className="flex mt-auto w-[80%] bg-[#43AC4D] hover:bg-[#7ABD4C] text-white/75 hover:text-white transition-all px-[10px] rounded-md space-x-2 place-items-center"
                    >
                      <p className="font-[600] text-[24px]">Continue Reading</p>
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
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-[28px] font-semibold text-black/50">
              No articles found
            </p>
          </div>
        )}
      </section>
      <div className="my-[20px] laptop:mb-[30px]">
        <Pagination
          count={Math.ceil(totalPosts / postsPerPage)}
          page={page_number}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Page;
