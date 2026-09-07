import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { fetchPosts } from "@/customFunctions/blogApi";
import BlogPagination from "@/components/BlogPagination";

export const revalidate = 60;

const FinalDate = (isoDateStr) => {
  if (!isoDateStr) return "";
  const date = new Date(isoDateStr);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

const truncateTitle = (title, wordLimit) => {
  const words = title.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return title;
};

async function Page({ searchParams }) {
  const page_number = Number(searchParams?.page) > 0 ? Number(searchParams.page) : 1;
  const postsPerPage = 9;

  let posts = [];
  let totalPosts = 0;
  let error = false;

  try {
    const data = await fetchPosts(page_number, postsPerPage);
    posts = data.results;
    totalPosts = data.count;
  } catch (err) {
    console.error("Error fetching posts:", err);
    error = true;
  }

  return (
    <div className="flex flex-col place-content-center place-items-center">
      <Layout title="Blog" bg="/backgrounds/16.jpeg" />
      <section className="py-[5%] px-[5%] min-h-[500px] w-full max-w-[1400px]">
        {error ? (
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
          <div className="mt-[60px] grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
            {posts.map((data, index) => (
              <Link
                href={`/blog/${data.slug}`}
                key={index}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  {data.featured_image_url ? (
                    <Image
                      loading="lazy"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={data.featured_image_url}
                      alt={data.featured_image_alt || data.title}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-200" />
                  )}
                </div>

                <div className="flex flex-col flex-grow px-6 py-6">
                  {data.categories?.length > 0 && (
                    <p className="uppercase tracking-wide text-[13px] font-bold text-[#43AC4D] mb-2">
                      {data.categories.map((c) => c.name).join(", ")}
                    </p>
                  )}
                  <p className="font-bold text-[22px] leading-8 text-[#1D7773]">
                    {truncateTitle(data.title, 10)}
                  </p>

                  {(data.short_description || data.excerpt) && (
                    <p className="mt-3 line-clamp-3 text-black/70 font-medium text-[16px]">
                      {data.short_description || data.excerpt}
                    </p>
                  )}

                  <div className="flex mt-5 w-max bg-[#43AC4D] group-hover:bg-[#7ABD4C] text-white/90 group-hover:text-white transition-all px-4 py-2 rounded-md items-center gap-2">
                    <p className="font-[600] text-[16px]">Continue Reading</p>
                    <svg
                      width="18"
                      height="18"
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
                  </div>

                  <div className="w-full h-[1px] bg-black/10 mt-6 mb-4" />
                  <p className="font-bold text-[15px] text-black/50">
                    {FinalDate(data.published_at)}
                  </p>
                </div>
              </Link>
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
      {!error && totalPosts > 0 && (
        <div className="my-[20px] laptop:mb-[30px]">
          <BlogPagination
            count={Math.ceil(totalPosts / postsPerPage)}
            page={page_number}
          />
        </div>
      )}
    </div>
  );
}

export default Page;
