import React from 'react'
import './Service.css';


const Staffing = () => {
    
  return (
    <>


<div className="container-fluid service py-6 mt-6 moveservice" style={{ backgroundColor: 'white',marginTop:'150px' }}>
                <div class="container">
                    <div class="text-center wow bounceInUp containermove" data-wow-delay="0.1s">
                    <img src="./images/staffing1.png" alt="Staffing Logo" class="img-fluid mb-1" style={{ width: '60px' , height: '60px' ,marginTop:'40px'}} ></img>
                        <h4 class="display-5 mb-5 moveservice slide-up "><b>Staffing Services</b></h4>
                        <p class="mb-4"><p class="mb-4">Staffing services offer tailored recruitment, emphasizing efficiency, quality, and flexibility. With global reach and on-demand support, they ensure compliance, technology integration, and cultural fit, fostering long-term partnerships..</p></p>
                    </div>
                    
                    <div class="row g-4" style={{marginTop:'20px'}}>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-cheese fa-7x text-primary mb-4"></i>
                                        <img src="./images/sortTerm.png" alt="Short Term Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>Short Term</b></h4>
                                        <p class="mb-4">Short-term staffing provides flexible, efficient recruitment solutions for immediate needs. With rapid deployment, diverse expertise, and seamless integration, it ensures agility and productivity in dynamic work environments.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                        <img src="./images/Long.png" alt="Long Term" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>Long Term</b></h4>
                                        <p class="mb-4">Long-term staffing offers stable, strategic recruitment solutions for sustained success. With comprehensive talent acquisition, continuous support, and alignment with organizational goals, it fosters growth and stability in the workforce..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                        <img src="./images/payroll.png" alt="Project management Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>Payroll Services</b></h4>
                                        <p class="mb-4">Payroll services manage accurate and timely payment processing for employees, ensuring compliance with regulations and seamless integration with accounting systems, offering efficiency and peace of mind for businesses..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.7s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-hamburger fa-7x text-primary mb-4"></i>
                                        <img src="./images/Direct.png" alt="Direct hire Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px',marginTop:'2px' }} ></img>
                                        <h4 class="mb-3"><b>Direct Hire</b></h4>
                                        <p class="mb-4">Direct hire staffing secures permanent talent for businesses, streamlining recruitment processes and providing expert selection, ensuring long-term fit and alleviating hiring burdens, fostering growth and stability within organizations..</p>
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

export default Staffing
