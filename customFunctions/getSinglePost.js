import axios from "axios";
import { useEffect, useState } from "react";

export const getSinglePost = (slug) => {
  const [finalOutput, setFInalOutput] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const decodeHtmlEntities = (text) => {
    if (typeof window === "undefined") return text;
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  const FinalDate = (gmtDateStr) => {
    var gmtDate = new Date(gmtDateStr);

    var month = gmtDate.toLocaleString("default", { month: "long" });
    var day = gmtDate.getUTCDate();
    var year = gmtDate.getUTCFullYear();

    var normalDateStr = month + " " + day + ", " + year;

    return normalDateStr;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(
          `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/custom/v1/post-by-slug/${slug}`
        );
        console.log(response.data);

        setFInalOutput({
          title: decodeHtmlEntities(response.data.title),
          description: decodeHtmlEntities(response.data.content),
          date: FinalDate(response.data.date),
          image: response.data.featured_image,
          excerpt: decodeHtmlEntities(response.data.excerpt),
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  console.log(finalOutput);
  return { ...finalOutput, loading, error };
};
