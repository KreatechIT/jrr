export const BLOG_API_URL =
  process.env.NEXT_PUBLIC_BLOG_API_URL ||
  "https://blog.jrrecyclingsolutionsltd.com.bd/api/blog";

const BLOG_API_BASE_URL = BLOG_API_URL;
const BLOG_MEDIA_ORIGIN = "https://blog.jrrecyclingsolutionsltd.com.bd";

// The backend occasionally emits image URLs built from its local APP_URL
// (http://localhost/...) instead of the public domain. Rewrite those so
// next/image doesn't hard-crash on an unconfigured hostname.
const fixImageUrl = (url) => {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "localhost") {
      return `${BLOG_MEDIA_ORIGIN}${parsed.pathname}${parsed.search}`;
    }
    return url;
  } catch {
    return url;
  }
};

export const fixPostImages = (post) => ({
  ...post,
  featured_image_url: fixImageUrl(post.featured_image_url),
});

export async function fetchPosts(page = 1, page_size = 9) {
  const url = new URL(BLOG_API_BASE_URL);
  url.searchParams.set("page", String(page));
  url.searchParams.set("page_size", String(page_size));

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  const data = await res.json();
  return { ...data, results: data.results.map(fixPostImages) };
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(`${BLOG_API_BASE_URL}/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch post: ${res.status}`);
  }
  const json = await res.json();
  return fixPostImages(json.data);
}

export async function fetchSitemapPosts() {
  const res = await fetch(`${BLOG_API_BASE_URL}/sitemap`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap posts: ${res.status}`);
  }
  const json = await res.json();
  return json.data;
}
