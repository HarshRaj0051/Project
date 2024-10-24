import React, { useState, useEffect } from "react";
import "./Carrier.css";
import Carousel2 from "./Carousel2";

const Carrier = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState(null);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("Resume:", resume);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setResume(null);
  };

  return (
    <>

    {/* WhatsApp Icon */}
    <a
        href="https://api.whatsapp.com/send?phone=9472688501"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <img src="./images/whatsapp.png" alt="WhatsApp" />
        <i className="fab fa-whatsapp"></i>
      </a>
      
      <div className="whoweare1" style={{ marginTop: "200px" }}>
        <div className="who-logo">
          <img src="./images/carrer2.jpeg" alt="Logo" height="70" width="500" />
        </div>
        <div className="who" style={{ marginLeft: "100px" }}>
          <h1>Career at Luytens Techonolgy Solutions</h1>
          <p style={{ fontFamily: "calibir" }}>
            We're looking for talented individuals who are as excited about
            innovation as we are. Here, you'll join a team that thrives on
            tackling challenging problems and coming up with groundbreaking
            solutions. We believe in empowering our people. You'll have access
            to resources and opportunities to develop your skills and keep
            pushing your boundaries.Meaningful work, impactful results: We don't
            just create things, we create things that matter.
          </p>
        </div>
      </div>

      <div className="whoweare1" style={{ marginTop: "2px" }}>
        <div className="who" style={{ marginLeft: "30px" }}>
          <h1>Encouraging growth and learning for all</h1>
          <p>
            Embrace a culture of continuous learning and personal development
            with us. We believe in nurturing growth, both professionally and
            personally, for everyone. Our inclusive approach fosters a community
            where individuals thrive, supported by valuable resources and
            opportunities. Join us in a journey of discovery and empowerment,
            where learning knows no bounds.
          </p>
        </div>
        <div className="who-logo">
          <img
            src="./images/carrerGrowth.jpg"
            alt="Logo"
            height="70"
            width="500"
          />
        </div>
      </div>

      <div className="whoweare1" style={{ marginTop: "2px" }}>
        <div className="who-logo">
          <img src="./images/Carrier3.jpg" alt="Logo" height="70" width="500" />
        </div>
        <div className="who">
          <h1>Focus on the benefit to the learner</h1>
          <p>
            You take charge of your learning path, and we support you every step
            of the way.Build your skills the way you want to by customizing your
            learning experience.Own your development journey. We will fuel your
            growth. We prioritize your professional development by providing
            opportunities for personalized learning.
          </p>
        </div>
      </div>

      <center style={{ marginBottom: "40px" }}>
        <h1 style={{ marginBottom: "30px" }}>
          Be a driving force behind innovation!!
        </h1>
        <div className="container1">
          <h2>Join Us</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              placeholder="Enter your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              id="message"
              placeholder="Enter your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="resume" style={{ fontWeight: "bold" }}>
              Upload Resume:
            </label>
            <input
              type="file"
              id="resume"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </center>
      {showArrow && (
        <div className="upward-arrow" onClick={handleScrollToTop}>
          &uarr;
        </div>
      )}
      <h1
        className="slide-in-from-right double-underline"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "60px" }}
      >
        Our Clients
      </h1>
      <Carousel2 />
    </>
  );
};

export default Carrier;
