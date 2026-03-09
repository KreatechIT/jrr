import axios from "axios";
import { useEffect, useState } from "react";

export const getAllPosts = (page_number) => {
  const [posts, setPosts] = useState([]);
  const [imageUrls, setImageUrls] = useState({});
  console.log(page_number);

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
      try {
        const response = await axios.get(
          `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/posts?${page_number}`
        );
        setPosts(response.data);
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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return { posts, imageUrls };
};
