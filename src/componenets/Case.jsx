import React from 'react'
import './Service.css';

const Security = () => {
  return (
    <>
      <div class="container-fluid service py-6 mt-1">
            <div class="container">
                <div class="text-center wow bounceInUp containermove" data-wow-delay="0.1s">
                <img src="./images/SENG.png" alt="Quality Engineering Logo" class="img-fluid" style={{ width: '50px' , height: '50px',marginTop:'150px' }} ></img>                
                <h4 className="display-5 mb-3 moveservice slide-up font-size-24" style={{ fontSize: '24px', fontWeight: 'bold' }}>Some Awesome Case Studies</h4>
                <p className="text-muted mb-5 moveservice slide-up">Here’s a glimpse of our recent success stories, showcasing how we've assisted global clients in their technology transformation journeys, ensuring they stay ahead in the industry by enhancing security, efficiency, and innovation..</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-cheese fa-7x text-primary mb-4"></i>
                                    <img src="./images/EnsuSec.jpg" alt="Ensuring Security Logo" class="img-fluid mb-1" style={{ width: '180px' , height: '160px' }} ></img>                

                                    <h4 class="mb-3">Ensuring Security</h4>
                                    <p class="mb-4">How cloud testing services enhanced application security, mitigating risks and boosting user trust - Luytens</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                    <img src="./images/distCloud.png" alt="Global Collaboration Logo" class="img-fluid mb-1" style={{ width: '180px' , height: '160px' }} ></img>                

                                    <h4 class="mb-3">Global Collaboration </h4>
                                    <p class="mb-4">Case study on cloud testing within a distributed team, enhancing collaboration and application security.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                    <img src="./images/mobapp.jpg" alt="Mobile App Development Logo" class="img-fluid mb-1" style={{ width: '180px' , height: '160px' }} ></img>                

                                    <h4 class="mb-3">Mobile App Development</h4>
                                    <p class="mb-4">Mobile app development: creating user-friendly, secure, and high-performance applications for various platforms and devices.</p>
                                    {/* <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="fas fa-hamburger fa-7x text-primary mb-4"></i>
                                    <img src="./images/cloudopt.jpeg" alt="Cloud Optimization Logo" class="img-fluid mb-1" style={{ width: '180px' , height: '160px' }} ></img>                

                                    <h4 class="mb-3">Cloud Optimization</h4>
                                    <p class="mb-4"> Luytens's Cloud Optimization Services saved a US finance company $1.3M, ensuring efficient resource use..</p>
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
