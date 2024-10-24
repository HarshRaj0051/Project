import React, { useState, useEffect } from 'react';
import './About.css';
import Carousel2 from './Carousel2'

const About = () => {
  const [underline, setUnderline] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('.running-underline');
      let anyVisible = false;

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          anyVisible = true;
        }
      });

      setUnderline(anyVisible);
      setShowArrow(window.scrollY > 100); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='home'>
      {showArrow && (
        <div onClick={scrollToTop} className='upward-arrow'>
          &#8593;
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


      {/* For first section */}
      <div className='whoweare'>
        <div className='who'>
          <h1 className={underline ? 'underline running-underline' : 'running-underline'}>
            WHO WE ARE
          </h1>
          <p>Connecting talent to opportunities,we deliver success with precision and passion.
       
          
            At Luytens Technology Solutions, is your ultimate destination for all your recruitment
            needs! We are a leading and innovative recruitment company dedicated to connecting
            talented individuals with exceptional opportunities across diverse industries.
          </p>
        </div>
        <div className='who-logo'>
          <img src='./images/img1.jpg' alt='Logo' />
        </div>
      </div>

      {/* For second section */}
      <div className='whoweare1' style={{marginTop:'15px'}}>
        <div className='who-logo'>
          <img src='./images/miss1.jpg' alt='Logo' height='70' width='500' />
        </div>
        <div className='who'>
          <h1 className={underline ? 'underline running-underline' : 'running-underline'}>
            OUR MISSION
          </h1>
          <p>
            Our mission is simple: to bridge the gap between job seekers and employers, creating
            the perfect match that leads to long-term success and mutual growth. At Luytens
            Technology Solutions, we believe that the right talent can transform businesses and
            drive them towards greater heights.
          </p>
        </div>
      </div>

      {/* For third section */}
      <div className='whoweare2'>
        <div className='who'>
          <h1 className={underline ? 'underline running-underline' : 'running-underline'}>
            OUR APPROACH
          </h1>
          <p>
            We understand that each client has unique requirements and preferences when hiring IT
            resources. Our approach involves a meticulous understanding of the client's
            organizational culture, project needs, and technical specifications. This allows us to
            curate a talent pool that precisely aligns with their goals, saving them time, effort,
            and resources.
          </p>
        </div>
        <div className='who-logo'>
          <img src='./images/appro.jpg' alt='Logo' height='70' width='500' />
        </div>
      </div>

      {/* For fourth section */}
      <div className='whatwedo-box'>
        <div className='whatwedo'>
          <div className='who4'>
            <h1 class='whatwedo-heading'><center>WHAT WE DO</center></h1>

            <p>
              Our core focus is on providing end-to-end resource hiring services for various IT
              domains. Whether our clients require short-term contract employees, permanent staff,
              or project-based teams, we have the expertise to fulfill their specific needs. We
              cater to a broad spectrum of IT areas, including but not limited to:
            </p>
            <ol>
              <li>
              • Software Development: Skilled programmers, developers, and software engineers
                proficient in diverse languages and technologies.
              </li>
              <li>
              • Data Science & Analytics: Experts in data analysis, machine learning, AI, and
                business intelligence.
              </li>
              <li>
              • Cybersecurity: Certified professionals well-versed in safeguarding digital assets
                and infrastructure.
              </li>
              <li>• Cloud Computing: Specialists with extensive experience in managing cloud platforms and services.</li>
              <li>• IT Support & Networking: Reliable professionals ensuring seamless IT operations and network management.</li>
              <li>• Web & Mobile App Development: Talented designers and developers creating innovative and user-friendly applications.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* For fifth section */}
      <div className='whychooseus-box'>
        <div className='whychooseus'>
          <div className='choose'>
            <h1 className='box-heading'><b><center>WHY CHOOSE US</center></b></h1>
            <ol>
              <li>• Extensive Talent Database: Our vast network of pre-screened IT professionals ensures access to the best talent in the industry.</li>
              <li>• Client-Centric Solutions: We prioritize understanding our client's needs to offer tailor-made hiring solutions that match their business requirements</li>
              <li>• Efficiency and Speed: Through streamlined processes, we expedite the hiring process, allowing clients to fill positions swiftly without compromising on quality.</li>
              <li>• Quality Assurance: Our rigorous screening and assessment procedures guarantee that candidates presented to clients are highly qualified and experienced.</li>
              <li>• Long-term Partnerships: We value long-term relationships with both our clients and candidates, nurturing connections that stand the test of time.</li>
            </ol>
          </div>
        </div>
      </div>
      <h1  className="slide-in-from-right double-underline"  style={{textAlign:'center', marginTop:'50px',marginBottom:'60px'}}>Our Clients</h1>
      <Carousel2/>
    </div>
  );
};

export default About;
