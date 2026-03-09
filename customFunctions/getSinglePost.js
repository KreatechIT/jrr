import axios from "axios";
import { useEffect, useState } from "react";

export const getSinglePost = (slug) => {
  const [finalOutput, setFInalOutput] = useState({});
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
      try {
        const response = await axios.get(
          `https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/custom/v1/post-by-slug/${slug}`
        );
        console.log(response.data);

        await setFInalOutput({
          title: response.data.title,
          description: response.data.content,
          date: FinalDate(response.data.date),
          image: response.data.featured_image,
          excerpt: response.data.excerpt,
        });
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [slug]);

  console.log(finalOutput);
  return finalOutput;
};
