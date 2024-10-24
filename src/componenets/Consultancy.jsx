import React from 'react'
import './Service.css';


const Consultancy = () => {
    
  return (
    <>


<div className="container-fluid service py-6 mt-4 moveservice" style={{ backgroundColor: 'white',marginTop:'150px' }}>
                <div class="container">
                    <div class="text-center wow bounceInUp containermove" data-wow-delay="0.1s" style={{ backgroundColor: 'white',marginTop:'160px' }}>
                    <small class="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-5  slide-up  "><h2> Our Services</h2></small>
                  <center>  <img src="./images/consulting.png" alt=" Logo" class="img-fluid mb-1" style={{ width: '60px' , height: '60px' ,marginTop:'40px'}} ></img></center>
                        <h4 class="display-5 mb-5 moveservice slide-up "><h1><b>Consulting Services</b></h1></h4>
                        <p class="mb-4"><p class="mb-4">Matching top talent with the perfect opportunity, our staffing solutions drive success for both businesses and professionals.
                                        Experience the difference of a seamless and tailored hiring process with us</p></p>
                    </div>
                    
                    <div class="row g-4" style={{marginTop:'20px'}}>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-cheese fa-7x text-primary mb-4"></i>
                                        <img src="./images/hr.png" alt="HR Consulting Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>HR Consulting</b></h4>
                                        <p class="mb-4">HR consulting provides tailored solutions for human resource management, including recruitment, training, and organizational development, to optimize workforce efficiency and support business objectives</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.3s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-pizza-slice fa-7x text-primary mb-4"></i>
                                        <img src="./images/it.png" alt="IT Consultant" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>IT Consultant</b></h4>
                                        <p class="mb-4">IT consultants provide specialized expertise to businesses, advising on technology solutions, systems integration, cybersecurity, and digital transformation to enhance efficiency, productivity, and competitiveness in the digital landscape</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.5s">
                            <div class="bg-light rounded service-item">
                                <div class="service-content d-flex align-items-center justify-content-center p-4">
                                    <div class="service-content-icon text-center">
                                        <i class="fas fa-hotdog fa-7x text-primary mb-4"></i>
                                        <img src="./images/project.png" alt="Project management Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px' }} ></img>
                                        <h4 class="mb-3"><b>Project Management</b></h4>
                                        <p class="mb-4">Project management coordinates tasks, resources, and timelines to achieve goals efficiently. It involves planning, organizing, leading, and controlling projects to deliver successful outcomes within constraints like time and budget</p>
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
                                        <img src="./images/carrier.png" alt="Career consulting Logo" class="img-fluid mb-1" style={{ width: '50px' , height: '50px',marginTop:'7px' }} ></img>
                                        <h4 class="mb-3"><b>Career Consulting</b></h4>
                                        <p class="mb-4">Career consulting guides individuals in identifying career goals, exploring opportunities, and developing strategies for advancement. It offers personalized advice and resources to navigate career transitions and maximize professional growth</p>
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

export default Consultancy
