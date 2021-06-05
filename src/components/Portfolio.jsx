import React from 'react'

import Banquets from '../assets/img/banquets.jpg';
import Conferences from '../assets/img/conference.jpg';
import Rooms from '../assets/img/rooms.jpg';
import wedding from '../assets/img/wedding.jpg';
import dinning from '../assets/img/dinning.jpg'

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">SERVICES</h2>
              <h3 className="section-subheading text-muted">Here is our services</h3>
            </div>
          </div>
          <div className="row ml-3">
                    <div className=" portfolio-item">                    
                        <img className="" src={Banquets} alt="portfolio_img" height="400" width="400" />
                       
                        <div className="portfolio-caption">
                            <h4>Banquets</h4>
                            <p className="text-muted">A place to create beautiful memories</p>
                        </div>
                    </div>              
                    
                    <div className="col-md-4 col-sm-6 portfolio-item">
                     
                       <img className="" src={Rooms} alt="portfolio_img" height="400" width="400" />
                      
                        <div className="portfolio-caption">
                            <h4>Rooms</h4>
                            <p className="text-muted">A comfortable welcoming stay</p>
                        </div>
                    </div>
                    <div className=" portfolio-item">
                     
                     <img className="" src={dinning} alt="portfolio_img" height="400" width="400" />
                    
                      <div className="portfolio-caption">
                          <h4>Dinning</h4>
                          <p className="text-muted">Delight your taste buds</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                     
                     <img className="mr-2" src={wedding} alt="portfolio_img" height="400" width="400" />
                    
                      <div className="portfolio-caption">
                          <h4>Wedding Planning</h4>
                          <p className="text-muted">Still not a dream</p>
                      </div>
                  </div>

          </div>
        </div>
      </section>
    )
}