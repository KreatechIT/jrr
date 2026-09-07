import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://jrrecyclingsolutionsltd.com.bd";
const BLOG_API_URL = "https://blog.jrrecyclingsolutionsltd.com.bd/api/blog";
const OUTPUT_FILES = ["sitemap.xml", "public/sitemap.xml"];

const staticRoutes = [
  { path: "/", priority: "1.00" },
  { path: "/about-us", priority: "0.80" },
  { path: "/our-work", priority: "0.80" },
  { path: "/team", priority: "0.80" },
  { path: "/certifications", priority: "0.80" },
  { path: "/blog", priority: "0.80" },
  { path: "/contact-us", priority: "0.80" },
  { path: "/gallery/events-gallery", priority: "0.70" },
  { path: "/gallery/others-image", priority: "0.70" },
  { path: "/gallery/paper-cut", priority: "0.70" },
  { path: "/gallery/video-gallery", priority: "0.70" },
  { path: "/services/e-waste-recycling", priority: "0.80" },
  { path: "/services/demandandsupply", priority: "0.80" },
  { path: "/services/data-destructions", priority: "0.80" },
  { path: "/services/construction-dismantle", priority: "0.80" },
  { path: "/services/green-truck", priority: "0.80" },
  {
    path: "/services/it-asset-disposition-refurbishment",
    priority: "0.80",
  },
  { path: "/services/internship", priority: "0.70" },
];

const today = new Date().toISOString();

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const routeToUrl = ({ path: routePath, lastmod = today, priority }) => ({
  loc: `${SITE_URL}${routePath === "/" ? "" : routePath}`,
  lastmod,
  priority,
});

async function fetchBlogPosts() {
  const posts = [];
  let page = 1;
  let hasNext = true;

  do {
    const url = new URL(BLOG_API_URL);
    url.searchParams.set("page", String(page));
    url.searchParams.set("page_size", "50");

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch blog posts for sitemap: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    posts.push(...data.results);
    hasNext = Boolean(data.next);
    page += 1;
  } while (hasNext);

  return posts;
}

const blogPostToUrl = (post) => ({
  loc: `${SITE_URL}/blog/${post.slug}`,
  lastmod: new Date(post.published_at || today).toISOString(),
  priority: "0.70",
});

const buildXml = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${escapeXml(url.lastmod)}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

async function writeSitemap(xml) {
  await Promise.all(
    OUTPUT_FILES.map(async (outputFile) => {
      const outputPath = path.resolve(outputFile);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, xml, "utf8");
      console.log(`Updated ${outputFile}`);
    })
  );
}

const blogPosts = await fetchBlogPosts();
const urls = [
  ...staticRoutes.map(routeToUrl),
  ...blogPosts.filter((post) => post.slug).map(blogPostToUrl),
];

await writeSitemap(buildXml(urls));
console.log(`Sitemap complete: ${urls.length} URLs (${blogPosts.length} blog posts).`);
