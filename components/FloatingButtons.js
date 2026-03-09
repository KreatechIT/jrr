"use client";
import React, { useEffect, useRef, useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ConnectIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import Link from "next/link";
import { hoverScale } from "./StyleStandardize";
import { WhatsApp } from "@mui/icons-material";

const FloatingButton = () => {
  const [expanded, setExpanded] = useState(false);
  const weChatButtonRef = useRef(null);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleClickOutsideWeChat = (event) => {
    if (
      weChatButtonRef.current &&
      !weChatButtonRef.current.contains(event.target)
    ) {
      setShowWeChatText(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideWeChat);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideWeChat);
    };
  }, []);

  const fabStyle = {
    backgroundColor: "#8EC148",
    transition: "transform 0.5s ease",
    transform: expanded
      ? "translateX(195px) translateY(0px) rotate(135deg)"
      : "translateX(195px) translateY(0px) rotate(0)",
  };

  const buttonStyle = (offset) => ({
    transition: "transform 0.5s ease, opacity 0.5s ease",
    transform: expanded
      ? `translateY(-${offset}px) translateX(260px)`
      : "translateY(0px) translateX(260px)",
    opacity: expanded ? 1 : 0,
  });

  const whatsappLink = `https://wa.me/+8801713969481`;

  return (
    <div className="z-[10000]" style={{ position: "relative" }}>
      <Fab
        style={fabStyle}
        aria-label="add"
        onClick={handleExpand}
        className="rounded-full z-50"
      >
        {!expanded ? <ConnectIcon /> : <AddIcon />}
      </Fab>
      <Fab
        style={{ ...buttonStyle(20), backgroundColor: "#0063b0" }}
        aria-label="button1"
        className="rounded-full z-50 absolute bottom-16 right-16"
      >
        <Link
          href="mailto:jrrecyclingsolutionsltd@gmail.com"
          className={`${hoverScale}`}
        >
          <MailIcon style={{ color: "#ffffff" }} />
        </Link>
      </Fab>
      <Fab
        style={{ ...buttonStyle(100), backgroundColor: "#25D366" }}
        aria-label="button2"
        className="rounded-full z-50 absolute bottom-16 right-16"
      >
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsApp style={{ color: "#ffffff" }} />
        </Link>
      </Fab>
      <Fab
        style={{ ...buttonStyle(180), backgroundColor: "#4CBB17" }}
        aria-label="button3"
        className="rounded-full z-50 absolute bottom-16 right-16"
      >
        <Link
          href="tel:+8801713368998"
          className={`flex flex-row gap-2 items-center ${hoverScale}`}
        >
          <PhoneIcon style={{ color: "#ffffff" }} />
        </Link>
      </Fab>
    </div>
  );
};

export default FloatingButton;
