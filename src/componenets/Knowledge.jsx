import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Knowledge.css'; 
import './Research.jsx';
import Carousel2 from "../componenets/Carousel2";

function Knowledge() {
  return (
    <>
    <div className="blink">
      <h1 className="knowledge-title">Knowledge Center - Luytens</h1>
    </div>
    <div className="container3">
      <div className="box1">
        {/* Wrap the content with NavLink */}
        <NavLink to="/case"> 
          <div className="text1">Case Study</div>
        </NavLink>
        <div className="liquid-animation"></div>
      </div>
      <div className="box2">
        <NavLink to="/research">
        <div className="text2">Research Center</div>
        </NavLink>
        <div className="liquid-animation"></div>
      </div>
    </div>
    <h1
      className="slide-in-from-right double-underline"
      style={{ textAlign: "center", marginTop: "50px", marginBottom: "60px" }}
    >
      Our Clients
    </h1>
    <Carousel2 />
    </>
  );
}

export default Knowledge;
