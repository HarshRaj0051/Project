import React, { useState, useEffect } from "react";
import "./Service.css";
import Carousel2 from "../componenets/Carousel2";

import Security from "../componenets/Security";
import Quality from "./Quality";
import Development from "./Development";
import Consultancy from "./Consultancy";
import Staffing from "./Staffing";


const Service = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>

    WhatsApp Icon
    <a
        href="https://api.whatsapp.com/send?phone=9472688501"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <img src="./images/whatsapp.png" alt="WhatsApp" />
        <i className="fab fa-whatsapp"></i>
      </a>

      <div className="space">
        <Consultancy />
        <Development />
        <Quality />
        <Security />
        <Staffing />

      </div>

      <div
        style={{
          width: "auto",
          height: "100%",
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          padding: "10px 90px",
          marginTop: "70px",
        }}
      >
        <h1 style={{ marginRight: "30px" }}>Let's connect</h1>
        <a href="/Contact" class="btn btn-primary px-4 py-2 rounded-pill">
          Contact us
        </a>
      </div>

      <h1
        className="slide-in-from-right double-underline"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "60px" }}
      >
        Our Clients
      </h1>

      <Carousel2 />

      {showArrow && (
        <div className="upward-arrow" onClick={handleScrollToTop}>
          &uarr;
        </div>
      )}
    </>
  );
};

export default Service;
