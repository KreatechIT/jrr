"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import bg from "@/assets/jr-recycling-workers.jpg";

import axios from "axios";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

function Page() {
  const [galleries, setGalleries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = `https://blog.jrrecyclingsolutionsltd.com.bd`; // Ensure this is defined in your .env file

  useEffect(() => {
    // Function to get the URL of the featured image
    const fetchImage = async (mediaId) => {
      if (!mediaId) return "/path/to/default/image.png"; // Provide a default image path
      try {
        const result = await axios.get(
          `${baseUrl}/wp-json/wp/v2/media/${mediaId}`
        );
        return result.data.source_url;
      } catch (error) {
        console.error("Error fetching image:", error);
        return "/path/to/default/image.png"; // Fallback image path
      }
    };

    const fetchGalleries = async () => {
      try {
        const response = await axios.get(`${baseUrl}/wp-json/wp/v2/galleries`);
        const galleryData = await Promise.all(
          response.data.map(async (gallery) => {
            const imageUrl = await fetchImage(gallery.featured_media);
            return {
              ...gallery,
              imageUrl,
            };
          })
        );
        setGalleries(galleryData);
        console.log(galleryData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch galleries:", error);
        setError("Failed to load galleries.");
        setIsLoading(false);
      }
    };

    fetchGalleries();
  }, [baseUrl]);
  return (
    <div className="">
      <Layout title="Others Image" bg={bg} />

      <section className="px-[5%] transition-all flex flex-col justify-center items-center place-items-start">
        <div className="w-[100%] px-[10px] transition-all h-auto">
          <Slide>
            <div className="mt-[20px]">
              <p className="font-lato text-[26px] mt-[30px] text-black/60">
                Others Image
              </p>
            </div>
          </Slide>
        </div>
        <PhotoProvider>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            className="py-[50px]"
          >
            {galleries.map((gallery, index) => (
              <PhotoView key={index} style={{ margin: "10px" }}>
                {gallery.imageUrl && (
                  <Image
                    src={gallery.imageUrl}
                    alt={gallery.title.rendered}
                    style={{ width: "300px", height: "auto" }}
                  />
                )}
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className="h-[3px] my-[20px] mb-[50px] w-full bg-black" />
      </section>
    </div>
  );
}

export default Page;
