import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const handleLinkClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Add event listeners to all links with the 'link' class
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Remove event listeners when component unmounts
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <header>
        <div className="company-tag">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/logo3.png" alt="Luytens Technology Solutions Logo" />
            </NavLink>
          </div>
          <div className="company-name">
            <h3>Luytens Technology Solutions</h3>
            <span>Promise We Deliver, Just The Best</span>
          </div>
        </div>
        <div id="bardiv">
          <ul id="barbtn">
            <li>
              <button id="barbtn">
                <img src="/images/baricon1.png" alt="Menu Icon"></img>
              </button>
              <br></br>
              <br></br>
              <ul id="baropt">
                <li id="opt">
                  <NavLink to="/">
                    <a>Home</a>
                  </NavLink>
                </li>

                <li id="opt" className="drop1">
                  <NavLink to="/service">
                    Services
                  </NavLink>

                  <ul className="dropdown-bar1">
                    <li className="drop2">
                      <NavLink className="link" to="/consultancy">
                        Consulting
                      </NavLink>
                    </li>

                    <li className="drop3">
                      <NavLink className="link" to="/Development">
                        Development
                      </NavLink>
                    </li>

                    <li className="drop4">
                      <NavLink className="link" to="/quality">
                        Testing
                      </NavLink>
                    </li>

                    <li className="drop5">
                      <NavLink className="link" to="/Security">
                        Security
                      </NavLink>
                    </li>

                    <li className="drop6">
                      <NavLink className="link" to="/Staffing">
                        Staffing
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li id="opt">
                  <NavLink to="/carrier">Careers</NavLink>
                </li>
                <li id="opt">
                  <NavLink to="/about">About Us </NavLink>
                </li>
                <li id="opt">
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div id="navoption">
          <ul>
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/service">
                Services
              </NavLink>

              <ul className="dropdown1">
                <li className="type1">
                  <NavLink className="link" to="/consultancy">
                    Consulting
                    <ul className="dropdown2">
                      <li>HR Consulting</li>
                      <li>IT Consultant</li>
                      <li>Project Management</li>
                      <li>Career Consulting</li>
                    </ul>
                  </NavLink>
                </li>

                <li className="qw">
                  <NavLink className="link" to="/Development">
                    Development
                    <ul className="dropdown3">
                      <li>Mobile Apps Development</li>
                      <li>Back End Development Node.Js</li>
                      <li>React Application Development</li>
                      <li>Back End Development On Java</li>
                      <li>Web-Application Development</li>
                      <li>Website Development</li>
                    </ul>
                  </NavLink>
                </li>

                <li className="ab">
                  <NavLink className="link" to="/quality">
                    Testing
                    <ul className="dropdown4">
                      <li>Security Testing</li>
                      <li>Functional Testing Mobile</li>
                      <li>Functional Testing Web</li>
                      <li>Functional Testing Services</li>
                      <li>Performance Testing and Load Testing</li>
                      <li>Test Automation Solutions</li>
                      <li>Cloud Testing Services</li>
                    </ul>
                  </NavLink>
                </li>

                <li className="we">
                  <NavLink className="link" to="/Security">
                    Security
                    <ul className="dropdown5">
                      <li>Identity And Access Management</li>
                      <li>Network Security</li>
                      <li>Functional Testing</li>
                      <li>Cloud Testing</li>
                      <li>Mobile Application Security</li>
                    </ul>
                  </NavLink>
                </li>

                <li className="staffing">
                  <NavLink className="link" to="/staffing">
                    Staffing
                    <ul className="dropdown6">
                      <li>Short Term</li>
                      <li>Long Term</li>
                      <li>Payroll Services</li>
                      <li>Direct Hire</li>
                    </ul>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink className="link" to="/carrier">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
