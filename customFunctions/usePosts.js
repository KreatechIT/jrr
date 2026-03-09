import axios from "axios";
import { useEffect, useState } from "react";

const usePosts = (page_number) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  const [totalPosts, setTotalPosts] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(9); // Assuming 10 posts per page by default

  const getImageUrl = async (mediaId) => {
    try {
      const response = await axios.get(
        `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/media/${mediaId}`
      );
      return response.data.source_url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return ""; // Return an empty string in case of error
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/posts?page=${page_number}&per_page=${postsPerPage}`
        );
        setPosts(response.data);
        setTotalPosts(parseInt(response.headers["x-wp-total"], 10));
        const urls = {};
        await Promise.all(
          response.data.map(async (post) => {
            if (post.featured_media) {
              const imageUrl = await getImageUrl(post.featured_media);
              urls[post.featured_media] = imageUrl;
            }
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
    setLoading(false);
  }, [page_number, postsPerPage]);

  return { posts, imageUrls, totalPosts, postsPerPage, loading };
};

export default usePosts;
