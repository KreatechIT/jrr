import { fetchSitemapPosts } from "@/customFunctions/blogApi";

const SITE_URL = "https://jrrecyclingsolutionsltd.com.bd";

export const revalidate = 300;

const staticRoutes = [
  { path: "/", priority: 1.0 },
  { path: "/about-us", priority: 0.8 },
  { path: "/our-work", priority: 0.8 },
  { path: "/team", priority: 0.8 },
  { path: "/certifications", priority: 0.8 },
  { path: "/blog", priority: 0.8 },
  { path: "/contact-us", priority: 0.8 },
  { path: "/gallery/events-gallery", priority: 0.7 },
  { path: "/gallery/others-image", priority: 0.7 },
  { path: "/gallery/paper-cut", priority: 0.7 },
  { path: "/gallery/video-gallery", priority: 0.7 },
  { path: "/services/e-waste-recycling", priority: 0.8 },
  { path: "/services/demandandsupply", priority: 0.8 },
  { path: "/services/data-destructions", priority: 0.8 },
  { path: "/services/construction-dismantle", priority: 0.8 },
  { path: "/services/green-truck", priority: 0.8 },
  { path: "/services/it-asset-disposition-refurbishment", priority: 0.8 },
  { path: "/services/internship", priority: 0.7 },
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = staticRoutes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    priority,
  }));

  let blogEntries = [];
  try {
    const posts = await fetchSitemapPosts();
    blogEntries = posts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: now,
        priority: 0.7,
      }));
  } catch (err) {
    console.error("Error fetching blog posts for sitemap:", err);
  }

  return [...staticEntries, ...blogEntries];
}
