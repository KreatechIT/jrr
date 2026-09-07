import { fetchPosts } from "@/customFunctions/blogApi";
import Image from "next/image";
import Link from "next/link";

async function LatestArticles() {
  let posts = [];
  try {
    const data = await fetchPosts(1, 5);
    posts = data.results;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="mobile:w-full mt-0 laptop:w-[30%]">
      <p className="text-[40px] w-max font-bold text-black">Latest Articles</p>
      <div className="bg-[#22C55E] w-full h-[7px]" />
      <div className="space-y-4 mt-5">
        {posts.map((data, index) => (
          <Link
            href={`/blog/${data.slug}`}
            key={index}
            className="bg-gray-200 hover:scale-105 transition-all cursor-pointer space-x-5 place-items-center rounded-2xl flex py-5 px-4"
          >
            {data.featured_image_url ? (
              <Image
                loading="eager"
                src={data.featured_image_url}
                alt={data.featured_image_alt || data.title}
                height={100}
                width={100}
              />
            ) : (
              <div className="h-[100px] w-[100px] shrink-0 bg-gray-300" />
            )}
            <p className="text-[20px] font-semibold text-black">
              {data.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;
