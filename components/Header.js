"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import axios from "axios";
import { usePathname } from "next/navigation";
import jrlogo from "@/assets/jr-recycling-logo.png";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const Paths = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Services",
    path: "/",
    subsections: [
      {
        name: "E-Waste Recycling",
        path: "/services/e-waste-recycling",
      },
      {
        name: "Demand & Supply",
        path: "/services/demandandsupply",
      },
      {
        name: "Data Destructions / Data Elimination",
        path: "/services/data-destructions",
      },
      {
        name: "Construction & Dismantle",
        path: "/services/construction-dismantle",
      },
      {
        name: "Green Truck",
        path: "/services/green-truck",
      },
      {
        name: "IT Asset Disposition & Refurbishment",
        path: "/services/it-asset-disposition-refurbishment",
      },
      { name: "Our Work", path: "/our-work" },
      {
        name: "Internship",
        path: "/services/internship",
      },
    ],
  },
  { name: "Team", path: "/team" },
  {
    name: "Gallery",
    path: "/",
    subsections: [
      {
        name: "Event Gallery",
        path: "/gallery/events-gallery",
      },
      {
        name: "Video Gallery",
        path: "/gallery/video-gallery",
      },
      {
        name: "Paper Cut",
        path: "/gallery/paper-cut",
      },
    ],
  },
  { name: "Certifications", path: "/certifications" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawerPhone = (newOpen) => () => {
    setOpen(newOpen);
  };

  const pathname = usePathname();
  const [showSubsections, setShowSubsections] = useState({
    second: false,
    fifth: false,
  });

  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    setOpen(false);
    setShowDrawer(false);
  }, [pathname]);

  const toggleSubsections = (index) => {
    setShowSubsections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [routeSearchResults, setRouteSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog.jrrecyclingsolutionsltd.com.bd/wp-json/wp/v2/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const route_search_results = Paths.filter((path) =>
      path.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRouteSearchResults(route_search_results);
    setSearchResults(results);
  }, [searchTerm, posts]);

  const DrawerList = (
    <div
      className={`flex flex-col gap-10 items-start pl-10 pr-2 py-10 w-[280px]`}
    >
      {Paths.map((data, index) => (
        <div key={index} className="flex flex-col">
          <div
            className="flex items-center"
            onClick={() => toggleSubsections(index)}
          >
            <Link href={data.path}>
              <div className="text-[20px] text-[#39B54A] w-full cursor-pointer">
                {data.name}
              </div>
            </Link>
            {data.subsections && (
              <div className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    showSubsections[index] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            )}
          </div>
          {data.subsections && showSubsections[index] && (
            <div className="flex flex-col place-content-center place-items-center z-[1000] transition-all duration-300 bg-white text-[#39B54A]">
              {data.subsections.map((item, subIndex) => (
                <Link
                  href={item.path}
                  key={subIndex}
                  className="px-3 flex place-content-start place-items-center content-center border-b-[1px] border-black h-[70px] w-full hover:bg-[#39B54A] hover:text-white cursor-pointer"
                >
                  <p className="text-[20px]">{item.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      <Link
        href="/contact-us"
        className=" text-white rounded-md py-3 px-6  bg-[#30743c] hover:bg-[#1b4332] transition-all duration-300 uppercase text-sm text-center flex"
      >
        Contact Us
      </Link>
    </div>
  );

  return (
    <>
      <div className="absolute w-full bg-white z-[200] top-0 flex justify-center font-roboto">
        <div
          className="flex items-center justify-between  
      font-bold transition duration-300 delay-150 space-x-0 w-full max-w-[100rem] pr-4 laptop:px-0"
        >
          <div className="h-16 shrink-0">
            <Link href="/" className="">
              <Image
                loading="eager"
                src={jrlogo}
                height={300}
                width={300}
                className="h-full object-contain"
                alt="jr-recycling-solution-ltd-logo"
              />
            </Link>
          </div>

          <div className="hidden  desktop:flex items-center">
            <div
              className="p-3 cursor-pointer  justify-center items-center flex justify-items-center place-content-center bg-green-500 rounded-full mr-8"
              onClick={toggleDrawer}
            >
              <FontAwesomeIcon
                icon={faSearch}
                color="white"
                style={{
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>

            {showDrawer && (
              <Fade animate__fadeInDown>
                <div className="fixed flex-col z-[50000] inset-0 bg-black/80 flex justify-center items-center">
                  <div className="absolute top-0 right-0 m-2 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faClose}
                      color="white"
                      onClick={toggleDrawer}
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </div>

                  <div className="bg-white fixed w-[50%] h-16 p-4 rounded-full items-center justify-center">
                    <div className="flex ml-[3%] gap-3 place-items-center place-content-center">
                      <FontAwesomeIcon
                        icon={faSearch}
                        style={{
                          width: "30px",
                          height: "30px",
                        }}
                        color="black"
                        className="ml-2"
                      />

                      <input
                        type="text"
                        className="text-black outline-none text-xl px-4 w-full"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  {searchTerm && (
                    <div className="h-auto max-h-[360px] absolute overflow-scroll top-[58%] flex flex-col place-items-start place-content-start overflow-y-scroll overflow-x-hidden rounded-md w-[49%] bg-white space-y-[7px]">
                      {searchResults.map((data, index) => (
                        <Link
                          key={index}
                          href={{
                            pathname: `/blog/${data.slug}`,
                          }}
                          className="flex bg-white transition-all hover:translate-x-[7px] hover:bg-[#43AC4D] hover:text-white rounded-md  w-full h-[60px]  place-content-start place-items-center"
                        >
                          <p className="text-[20px] text-black p-[10px]">
                            {data.title.rendered}
                          </p>
                        </Link>
                      ))}
                      {routeSearchResults.map((data, index) =>
                        data.subsections ? (
                          <div
                            key={index}
                            className="flex flex-col bg-white transition-all hover:translate-x-[7px] hover:bg-[#43AC4D] hover:text-white rounded-md  w-full  place-content-start place-items-center"
                          >
                            {data.subsections.map((subdata, index) => (
                              <Link
                                key={index}
                                href={{
                                  pathname: `${subdata.path}`,
                                }}
                                className="flex bg-white transition-all hover:translate-x-[7px] hover:bg-[#43AC4D] hover:text-white rounded-md  w-full h-[60px]  place-content-start place-items-center"
                              >
                                <p className="text-[20px] text-black p-[10px]">
                                  {subdata.name}
                                </p>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <Link
                            key={index}
                            href={{
                              pathname: `${data.path}`,
                            }}
                            className="flex bg-white transition-all hover:translate-x-[7px] hover:bg-[#43AC4D] hover:text-white rounded-md  w-full h-[60px]  place-content-start place-items-center"
                          >
                            <p className="text-[20px] text-black p-[10px]">
                              {data.name}
                            </p>
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              </Fade>
            )}
            <div
              className={`flex w-full items-center space-x-[30px] uppercase text-sm ${
                showDrawer ? "opacity-20" : "opacity-100"
              }`}
            >
              {Paths.map((data, index) => (
                <div
                  key={index}
                  className="relative section py-[30px] flex items-center group text-gray-800"
                >
                  <div className="absolute h-[5px] top-0 w-full bg-[#30743c] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500"></div>

                  <Link href={data.path}>
                    <div className="px-[0px] w-max cursor-pointer group-hover:text-[#30743c]">
                      {data.name}
                    </div>
                  </Link>
                  {data.subsections && (
                    <div
                      className="ml-2"
                      onClick={() => toggleSubsections(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transform transition-transform duration-300 ${
                          showSubsections[index] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  )}
                  {data.subsections && showSubsections[index] && (
                    <div className="subsections flex flex-col place-content-center place-items-center z-[1000] transition-all duration-300 absolute top-[60px] left-[0px] bg-white text-[#39B54A]">
                      {data.subsections.map((item, subIndex) => (
                        <Link
                          href={item.path}
                          key={subIndex}
                          className="subsection px-3 flex place-content-start place-items-center border-t-[4px] border-t-[#1D7773] content-center border-b-[1px] border-black h-[40px] w-[300px] hover:bg-[#39B54A] hover:text-white cursor-pointer"
                        >
                          <p>{item.name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact-us"
              className=" text-white rounded-md py-4 px-5  bg-[#30743c] hover:bg-[#1b4332] transition-all duration-300 uppercase text-sm text-center hidden desktop:flex"
            >
              Contact Us
            </Link>

            <div className=" desktop:hidden mr-4">
              {!open && (
                <MenuIcon
                  onClick={toggleDrawerPhone(true)}
                  className="text-black scale-125 cursor-pointer"
                />
              )}

              <Drawer
                className="font-bold"
                open={open}
                onClose={toggleDrawerPhone(false)}
              >
                {DrawerList}
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
