import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Carousel2 from "./Carousel2";
import "./Home.css";

const Home = () => {
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
    <div className="home">
      <Carousel />
      <Card />

      {showArrow && (
        <div className="upward-arrow" onClick={handleScrollToTop}>
          &uarr;
        </div>
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

      <div
        className="container-fluid service py-6 mt-4 moveservice"
        style={{ backgroundColor: "white" }}
      >
        <div className="about-us-box animated-box">
          <div
            className="text-center wow bounceInUp containermove"
            data-wow-delay="0.1s"
          >
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-5 slide-up">
              <h1>About US</h1>
            </small>

            <p>
              At Luytens Technology Solutions, we understand that finding the
              right talent is crucial for any organization's success. With our
              extensive network and in-depth industry expertise, we are
              committed to delivering tailored solutions that precisely match
              the unique requirements of our clients. Whether you are a
              multinational corporation seeking skilled professionals or a
              startup in search of dynamic talent, we have the expertise to
              fulfill your hiring needs.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid service py-6 mt-4 moveservice"
        style={{ backgroundColor: "white" }}
      >
        <div className="why-choose-us-box animated-box">
          <div
            className="text-center wow bounceInUp containermove"
            data-wow-delay="0.1s"
          >
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-5 slide-up">
              <h1>WHY CHOOSE US</h1>
            </small>
            <p>
              At Luytens Technology Solutions, we offer an extensive talent
              database, featuring a vast network of pre-screened IT
              professionals to ensure access to the best talent. Our
              client-centric approach prioritizes understanding each client's
              unique needs, allowing us to provide tailor-made hiring solutions
              that align with their business requirements. Through streamlined
              processes, we expedite the hiring process, enabling clients to
              fill positions swiftly without compromising on quality. Our
              rigorous screening and assessment procedures guarantee that
              candidates presented to clients are highly qualified and
              experienced. We value long-term partnerships, fostering enduring
              relationships with both clients and candidates, nurturing
              connections that stand the test of time.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid service py-6 mt-4 moveservice"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div
            className="text-center wow bounceInUp containermove"
            data-wow-delay="0.1s"
          >
            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-5 slide-up">
              <h2>Our Services</h2>
            </small>
            <h1
              className="display-5 mb-5 moveservice slide-up"
              style={{ animation: "blink 1s infinite" }}
            >
              <b>What We Offer</b>
            </h1>
          </div>

          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-cheese fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/staffing.png"
                      alt="Staffing Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Staffing</h4>
                    <p className="mb-4">
                      Matching top talent with the perfect opportunity, our
                      staffing solutions drive success for both businesses and
                      professionals. Experience the difference of a seamless and
                      tailored hiring process with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/webcloud.png"
                      alt="Web and cloud Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Web And Cloud Solutions</h4>
                    <p className="mb-4">
                      Transforming businesses with innovative web and cloud
                      solutions, empowering them to thrive in the digital era.
                      Experience the power of seamless integration and
                      scalability for your online success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-hotdog fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/mob.png"
                      alt="Mobility Solutions Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Mobility Solutions</h4>
                    <p className="mb-4">
                      Unleashing the potential of mobility for businesses, our
                      solutions drive innovation and efficiency on the go.
                      Experience seamless connectivity and enhanced productivity
                      with our mobility solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.7s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-hamburger fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/digital.png"
                      alt="Digital Marketing Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Digital Marketing</h4>
                    <p className="mb-4">
                      Amplify your brand's presence and engage your audience
                      with our data-driven digital marketing strategies.
                      Experience growth, visibility, and success in the digital
                      landscape with our expert solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.1s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/test.png"
                      alt="Testing Services Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Testing Services</h4>
                    <p className="mb-4">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. It is a long established fact that a
                      reader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.3s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-walking fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/sec.png"
                      alt="Security Services Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Security Services</h4>
                    <p className="mb-4">
                      Everyday you come across data breaches and ransom news
                      causing financial losses and assets loss. Our team is here
                      to defend you from cyber attacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-wheelchair fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/devlop.png"
                      alt="Development Services Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Development Services</h4>
                    <p className="mb-4">
                      Development involves building and improving things.
                      Services are tasks or activities provided to help others
                      or fulfill needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
              data-wow-delay="0.7s"
            >
              <div className="bg-light rounded service-item">
                <div className="service-content d-flex align-items-center justify-content-center p-4">
                  <div className="service-content-icon text-center">
                    <i className="fas fa-utensils fa-7x text-primary mb-4"></i>
                    <img
                      src="./images/Cloud.png"
                      alt="Cloud Services Logo"
                      className="img-fluid mb-1"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4 className="mb-3">Cloud Services</h4>
                    <p className="mb-4">
                      Cloud services are infrastructure, platforms, or software
                      that are hosted by third-party providers and made
                      available to users through the internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1
        className="slide-in-from-right double-underline"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "60px" }}
      >
        Our Clients
      </h1>
      <Carousel2 />
    </div>
  );
};

export default Home;
