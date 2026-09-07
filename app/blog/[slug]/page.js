import BlogLayout from "@/components/BlogLayout";
import Image from "next/image";
import LatestArticles from "@/components/LatestArticles";
import { fetchPostBySlug } from "@/customFunctions/blogApi";
import { notFound } from "next/navigation";
import "@/customCSS/blog.css";

const FinalDate = (isoDateStr) => {
  if (!isoDateStr) return "";
  const date = new Date(isoDateStr);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

export async function generateMetadata({ params }) {
  const post = await fetchPostBySlug(params.slug);
  if (!post) {
    return { title: "Blog Not Found | JR Recycling Solutions BD" };
  }

  const metaTitle = post.seo?.meta_title || post.title;
  const metaDescription = post.seo?.meta_description || post.excerpt || undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://jrrecyclingsolutionsltd.com.bd/blog/${post.slug}`,
    },
    robots: post.seo?.meta_robots || undefined,
    openGraph: {
      title: post.seo?.og_title || metaTitle,
      description: post.seo?.og_description || metaDescription,
      images: post.seo?.og_image_url
        ? [post.seo.og_image_url]
        : post.featured_image_url
        ? [post.featured_image_url]
        : undefined,
    },
  };
}

async function Page({ params }) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-white">
      <BlogLayout
        title={post.h1_title || post.title}
        date={FinalDate(post.published_at)}
        description={post.body}
      />
      <section className="py-[5%] flex mobile:flex-col laptop:flex-row justify-between px-[5%]">
        <div className="mr-[1%] text-clip text-wrap mobile:w-full laptop:w-[70%]">
          {post.featured_image_url && (
            <div className="relative mobile:w-full laptop:w-[80%] h-[400px] rounded-xl bg-gray-100 overflow-hidden">
              <Image
                loading="lazy"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
                src={post.featured_image_url}
                alt={post.featured_image_alt || post.title}
              />
            </div>
          )}
          <p
            className="font-lato  text-black/70 mt-[30px] text-[24px] font-semibold"
            dangerouslySetInnerHTML={{ __html: post.body }}
          ></p>
        </div>
        <LatestArticles />
      </section>
    </div>
  );
}

export default Page;
