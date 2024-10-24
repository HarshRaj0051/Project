import React from 'react'
import './Service.css';

const Security = () => {
  return (
    <>
      <div class="container-fluid service py-6 mt-1">
            <div class="container">
                <div class="text-center wow bounceInUp containermove" data-wow-delay="0.1s">
                <img src="./images/SENG.png" alt="Quality Engineering Logo" class="img-fluid" style={{ width: '50px' , height: '50px',marginTop:'150px' }} ></img>                
                <h4 className="display-5 mb-3 moveservice slide-up font-size-24" style={{ fontSize: '24px', fontWeight: 'bold' }}>Security Engineering Services</h4>
                <p className="text-muted mb-5 moveservice slide-up">Quality Engineering Services that deliver top-notch, precisely engineered solutions tailored to your needs.</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-cheese fa-7x text-primary mb-4"></i>
                                    <img src="./images/access-control.png" alt="Identity and Access Management Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>                

                                    <h4 class="mb-3"><b>Identity And Access Management</b></h4>
                                    <p class="mb-4">We love making special mobile apps with unique business ideas. We're really excited about Mobile App Development and put all our energy into it..</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                    <img src="./images/cyber-security.png" alt="Network security Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>                

                                    <h4 class="mb-3"><b>Network Security</b> </h4>
                                    <p class="mb-4">Network security encompasses strategies and technologies to safeguard networks from unauthorized access, misuse, and threats. It includes measures such as firewalls, intrusion detection systems, encryption, and access controls to protect data and resources.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                    <img src="./images/funtesting.png" alt="Functional testing Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>                

                                    <h4 class="mb-3"><b>Functional Testing</b></h4>
                                    <p class="mb-4">Functional testing for web applications verifies if features work as intended. It evaluates user interactions, navigation, forms, and functionality. Tests cover different scenarios to ensure the application meets requirements and functions correctly..</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-hamburger fa-7x text-primary mb-4"></i>
                                    <img src="./images/cloud (1).png" alt="Cloud security Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>                

                                    <h4 class="mb-3"><b>Cloud Security</b></h4>
                                    <p class="mb-4"> Cloud security services protect data and applications hosted in cloud environments. They include encryption, access controls, threat detection, and compliance monitoring to safeguard against unauthorized access, data breaches, and other threats.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>
                                    <img src="./images/mobile-app.png" alt="Cloud security Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>                

                                    <h4 class="mb-3"><b>Mobile Application Security</b></h4>
                                    <p class="mb-4">Mobile application security involves protecting mobile apps from vulnerabilities and threats. It includes secure coding practices, encryption, user authentication, app permissions, and secure data storage to prevent unauthorized access and data breaches.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>                
            </div>
        </div>
    </>
  )
}

export default Security
