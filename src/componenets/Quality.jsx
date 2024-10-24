import React from 'react'
import './Service.css';

const Quality = () => {
  return (
    <>
        <div class="container-fluid service py-6 mt-4" >
            <div class="container" >
            <div className="text-center wow bounceInUp containermove" data-wow-delay="0.1s">
            <img src="./images/quality.png" alt="Quality Engineering Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px',marginTop:'110px' }} ></img>

             <h4 className="display-5 mb-3 moveservice slide-up font-size-24" style={{ fontSize: '24px', fontWeight: 'bold' }} >Quality Engineering Service</h4>
              <p className="text-muted mb-5 moveservice slide-up">Quality Engineering Services that deliver top-notch, precisely engineered solutions tailored to your needs.</p>
             </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-cheese fa-7x text-primary mb-4"></i>
                                    <img src="./images/security.png" alt="Security Testing Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>

                                    <h4 class="mb- 6"><b>Security Testing</b></h4>
                                    <p class="mb-4">Security testing ensures software systems protect data and functionality, identifying vulnerabilities and threats, ensuring compliance with security standards, 
                                                   and enhancing overall system security.</p>
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
                                    <img src="./images/funTest.png" alt="Functional testing Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                    <h4 class="mb-3"><b>Mobile Functional Testing</b></h4>
                                    <p class="mb-4">Functional testing for mobile ensures apps meet specified requirements, verifying functions like installation, UI, user interactions,and data handling, ensuring quality and usability.</p>
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
                                    <img src="./images/performanceweb.png" alt="Functional Testing Web Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                   
                                    <h4 class="mb-3"><b>Web Functional Testing</b></h4>
                                    <p class="mb-4">Functional testing for web applications validates features such as navigation, forms, links, and database interactions, ensuring they work correctly. It also checks compatibility with different browsers and devices, 
                                     ensuring a seamless user experience.</p>
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
                                    <img src="./images/testing11.png" alt="Functional Testing Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>

                                    <h4 class="mb-3"><b>Functional Testing Services</b></h4>
                                    <p class="mb-4">Functional testing services verify software meets functional requirements, including unit testing, integration testing, system testing, and acceptance testing. They ensure the software functions as intended, enhancing its quality and reliability.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s" style={{marginLeft:'0px'}}>
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>
                                    <img src="./images/bandwidth.png" alt="Performance Testing and Load Testing Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>

                                    <h4 class="mb-3"><b>Performance Testing And Load Testing</b></h4>
                                    <p class="mb-4">Performance Testing evaluates a system's speed, stability, and scalability under normal and peak loads. Load Testing checks the system's behavior under specific load conditions, often to determine its breaking point. Both are crucial for ensuring optimal software performance.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-walking fa-7x text-primary mb-4"></i>
                                    <img src="./images/auto.png" alt="Test Automation Solutions Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>

                                    <h4 class="mb-3"><b>Test Automation Solutions</b></h4>
                                    <p class="mb-4">Test Automation Solutions streamline the testing process, reducing human effort and error. They include automated testing tools, frameworks, and methodologies, enabling faster, more efficient, and more accurate testing across various software development stages. Benefits include cost reduction, faster time-to-market, and improved product quality.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <center>
                    <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-wheelchair fa-7x text-primary mb-4"></i>
                                    <img src="./images/cl.png" alt="Cloud Testing Services Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                      
                                    <h4 class="mb-3"><b>Cloud Testing Services</b></h4>
                                    <p class="mb-4">Cloud Testing Services are tools and platforms that leverage cloud computing to validate software applications. They offer benefits like cost savings, flexibility, scalability, and real-user condition simulation. Examples include Platform as a Service (PaaS), Infrastructure as a Service (IaaS), and Software as a Service (SaaS).</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </center>
                   
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Quality
