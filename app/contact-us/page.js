"use client";

import Layout from "@/components/Layout";
import Tag from "@/components/Tag";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationCrosshairs,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [buttonText, setButtonText] = useState("Submit");

  const handleSend = async () => {
    if (username.length === 0 || email.length === 0 || message.length === 0) {
      alert("Please Fill out the fields");
    } else {
      setButtonText("Sending Your Message...");
      await emailjs
        .send(
          "service_jr",
          "template_jr",
          {
            from_name: email,
            username: username,
            email_address: email,
            message: message,
            phone_number: phone_number,
            subject: subject,
          },
          {
            publicKey: "T6Gn2HnqAs38fPshn",
          }
        )
        .then(
          (result) => {
            console.log(result);
            setButtonText("Thanks, We recieved your message !");
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  return (
    <div className="flex flex-col place-content-center place-items-center">
      <Layout
        title="Contact Us"
        bg={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/17.jpeg`}
      />
      <section className="py-[5%] px-[3%]">
        <div className="flex laptop:flex-row mobile:flex-col place-items-center mobile:space-y-[30px] laptop:space-y-0 mobile:space-x-0 laptop:space-x-[30px]">
          <Slide triggerOnce direction="up" duration={2000}>
            <div className="space-y-[30px]">
              <div className="bg-[#F6F9FF] px-[2%] space-x-[20px] flex place-items-center  h-[120px] shadow-xl hover:shadow-2xl transition-all">
                <div className="bg-[#39B54A] flex place-content-center place-items-center w-[60px] h-[60px] rounded-full">
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    color="white"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                <div>
                  <p className="text-black text-[24px] font-bold">
                    Head Office
                  </p>
                  <div className="mt-[2px] font-bold text-black/60">
                    <p className="font-lato text-[15px] ">
                      69 (5th Floor), Master Para Road, Barabag, Mirpur-2,
                      Dhaka-1216.
                    </p>
                  </div>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116796.62062625769!2d90.36066845946345!3d23.822354055699876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0da425f190d%3A0x55a15bc8ccbb9487!2sJr%20Enterprise!5e0!3m2!1sen!2sbd!4v1680492844140!5m2!1sen!2sbd"
                width="565"
                height="350"
                className="h-[321px] mobile:w-full laptop:w-[565px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce duration={2000}>
            <div className="space-y-[30px]">
              <div className="bg-[#F6F9FF] px-[2%] space-x-[20px] flex place-items-center h-[120px] shadow-xl hover:shadow-2xl transition-all">
                <div className="bg-[#39B54A] flex place-content-center place-items-center w-[60px] h-[60px] rounded-full">
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    color="white"
                    style={{
                      width: "40px",
                      height: "40px",
                    }}
                  />
                </div>
                <div>
                  <p className="text-black text-[24px] font-bold">Warehouse</p>
                  <div className="mt-[2px] font-bold text-black/60">
                    <p className="font-lato text-[15px] ">
                      Holdings : 0042-03, Mondol Para, West Rajashon,
                      Savar-1340, Dhaka
                    </p>
                  </div>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.1642133673636!2d90.2678771831642!3d23.84830189740768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ea2515b0cc9f%3A0x1a5bc0d532ea33b4!2sRajashon!5e0!3m2!1sen!2sbd!4v1680505396314!5m2!1sen!2sbd"
                width="565"
                height="350"
                className="h-[321px] mobile:w-full laptop:w-[565px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Slide>
        </div>

        <div className="mt-[30px] mobile:space-y-[8px] laptop:space-y-0 mobile:space-x-0 laptop:space-x-[3%] flex laptop:flex-row mobile:flex-col place-items-center">
          <div className="bg-[#F6F9FF] laptop:w-[22%] mobile:w-full px-[2%] space-x-[20px] flex place-items-center  h-[120px] shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-[#39B54A] flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div>
              <p className="text-black text-[24px] font-bold">Tell Us</p>
              <div className="mt-[2px] font-bold text-black/60">
                <p className="font-lato text-[15px] ">+8801713368998</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F9FF] laptop:w-[22%] mobile:w-full px-[2%] space-x-[20px] flex place-items-center  h-[120px] shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-[#39B54A] flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div>
              <p className="text-black text-[24px] font-bold">Tell Us</p>
              <div className="mt-[2px] font-bold text-black/60">
                <p className="font-lato text-[15px] ">+8801713969481</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F9FF] laptop:w-[36%] mobile:w-full px-[2%] space-x-[20px] flex place-items-center  h-[120px] shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-[#39B54A] flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div>
              <p className="text-black text-[24px] font-bold">Drop Mail</p>
              <div className="mt-[2px] font-bold text-black/60">
                <p className="font-lato text-[15px] ">
                  jrrecyclingsolutionsltd@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F9FF] laptop:w-[20%] mobile:w-full px-[2%] space-x-[14px] flex place-items-center place-content-center  h-[120px] shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-[#39B54A] duration-700 hover:bg-[#328380] hover:scale-110 transition-all flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faFacebook}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div className="bg-[#39B54A] duration-700 hover:bg-[#328380] hover:scale-110 transition-all flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
            <div className="bg-[#39B54A] duration-700 hover:bg-[#328380] hover:scale-110 transition-all flex place-content-center place-items-center w-[50px] h-[50px] rounded-full">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                style={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <Tag tag="Contact Us" />
          <p className="text-4xl tablet:text-5xl mt-2 text-black font-bold">
            Feel Free to Write
          </p>
          <div className="mt-[30px] flex place-items-center space-x-[3%]">
            <input
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[50%] outline-none border-2 rounded-md border-[#39B54A] px-[2%] h-[60px] text-[17px] font-lato font-semibold"
            />
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[50%] outline-none border-2 rounded-md border-[#39B54A] px-[2%] h-[60px] text-[17px] font-lato font-semibold"
            />
          </div>
          <div className="mt-[30px] flex place-items-center space-x-[3%]">
            <input
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              className="w-[50%] outline-none border-2 rounded-md border-[#39B54A] px-[2%] h-[60px] text-[17px] font-lato font-semibold"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-[50%] outline-none border-2 rounded-md border-[#39B54A] px-[2%] h-[60px] text-[17px] font-lato font-semibold"
            />
          </div>
          <div className="mt-[30px] flex place-items-center space-x-[3%]">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message"
              className="w-[100%] py-[10px] outline-none border-2 rounded-md border-[#39B54A] px-[2%] h-[200px] text-[17px] font-lato font-semibold"
            />
          </div>
          <button
            onClick={handleSend}
            className="flex hover:scale-105 w-auto duration-[1000ms] justify-center items-center h-[60px] mt-[20px] bg-[#43AC4D] hover:bg-[#7ABD4C] text-white/75 hover:text-white transition-all px-[20px] rounded-md space-x-2 place-items-center"
          >
            <p className="font-[600] text-[20px]">{buttonText}</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L18 12M18 12L12 6M18 12L12 18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
