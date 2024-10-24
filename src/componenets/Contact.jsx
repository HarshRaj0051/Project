import React, { useState, useEffect } from "react";
import Carousel2 from './Carousel2'
import emailjs from "@emailjs/browser";
import "./Contact.css";



const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showArrow, setShowArrow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_lzf9uu9";
    const templateId = "template_cvqjbrh";
    const publicKey = "GhLNrPj_dM4jWKuAL";
    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Luytens",
      message: message,
    };
    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  // Used for Scroll upward

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowArrow(scrollPosition > 100); // Change 100 to the scroll position where you want the arrow to appear
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  

  // End here
  return (
    <>

      {showArrow && (
        <div onClick={scrollToTop} className="upward-arrow">&#8593;</div>
      )}


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


       <h2 className="blink" style={{ marginTop: "190px" }}>
        <center style={{ marginBottom: "20px" }}>OUR CONTACT</center>
      </h2> 
      
       
        <h2><center style={{ marginBottom: "30px" }}>Feel Free To Contact Us</center></h2>
      

      <div className="boxes-container">
        <div className="box">
          <img
            src="./images/telephone.png"
            alt="Talk to Us Logo"
            className="img-fluid mb-1"
            style={{ width: "50px", height: "50px" }}
          ></img>

          <h3>Talk to Us</h3>
          <p>
            <b>
              Call: <a href="tel:+911203507027">+911203507027</a>,{" "}
              <a href="tel:+16093160709">+1 609-316-0709</a>
            </b>
          </p>
        </div>
        <div className="box">
          <img
            src="./images/gmail.png"
            alt="Email Logo"
            className="img-fluid mb-1"
            style={{ width: "50px", height: "50px" }}
          ></img>

          <h3>Email Us</h3>
          <p>
            <b>
              Email: <a href="mailto:info@Luytens.com">info@Luytens.com</a>
            </b>
          </p>
        </div>
        <div className="box">
          <img
            src="./images/house.png"
            alt="Address Logo"
            className="img-fluid mb-1"
            style={{ width: "50px", height: "50px" }}
          ></img>
          <h3>Visit Us</h3>
          <p><b>USA Office :</b> West Windsor, New Jersey, USA</p>
          <p><b>India OffShore :</b> Noida , UP , India</p>
        </div>
      </div>
 

      <div className="Container">
  <div className="offices">
    <div className="card">
      <h4 className="boxes">USA Office</h4>
      <p className="boxes">
        <a href="https://maps.google.com/?q=West+Windsor,+New+Jersey,+USA" target="_blank" rel="noopener noreferrer">
          <h4>→</h4>
          <h5>West Windsor, New Jersey, USA</h5>
        </a>
      </p>

      <h4 className="boxes">India OffShore</h4>
      <p className="boxes">
        <a href="https://maps.google.com/?q=Noida,+India" target="_blank" rel="noopener noreferrer">
          <h4>→</h4>
          <h5>Noida, India</h5>
        </a>
      </p>
    </div>
  </div>

        <h2 style={{ marginTop: "40px" }}><center>INQUIRY FORM</center></h2>
      

        <form onSubmit={handleSubmit} className="emailForm">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Write your Queries and don't forget to Write your Contact Details *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
      <h1  className="slide-in-from-right double-underline"  style={{textAlign:'center', marginTop:'50px',marginBottom:'60px'}}>Our Clients</h1>
      
      <Carousel2/>
      
    </>
    
  );
};

export default Contact;
