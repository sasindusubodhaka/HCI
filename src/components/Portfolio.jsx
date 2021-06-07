import React from 'react'

import Banquets from '../assets/img/banquets.jpg';
import Conferences from '../assets/img/conference.jpg';
import Rooms from '../assets/img/rooms.jpg';
import wedding from '../assets/img/wedding.jpg';
import dinning from '../assets/img/dinning.jpg';
import spa from '../assets/img/spa.jpg';
import gym from '../assets/img/gym.jpg';

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Facilities</h2>
              <h3 className="section-subheading text-muted">Here is our Facilities</h3>
            </div>
          </div>
          
          <div className="row ml-3">
          
                    <div className=" portfolio-item">                    
                        <img className="" src={Banquets} alt="portfolio_img" height="300" width="300" />
                       
                        <div className="portfolio-caption">
                            <h4>Banquets</h4>
                            <p className="text-muted">contact the Service Centre for assistance in organising a private group meeting, cocktail or dinner during your stay. Vinora Beach has all the facilities you require to make your meeting run as smoothly as possible.</p>
                        </div>
                    </div>              
                    
                    <div className="col-md-4 col-sm-6 portfolio-item">
                     
                       <img className="" src={Rooms} alt="portfolio_img" height="300" width="300" />
                      
                        <div className="portfolio-caption">
                            <h4>Rooms</h4>
                            <p className="text-muted">Add some intimacy to your meals when you stay with us. Arrange to have an in-room or location dining experience with that special someone.</p>
                        </div>
                    </div>
                    <div className=" portfolio-item">
                     
                     <img className="" src={dinning} alt="portfolio_img" height="300" width="300" />
                    
                      <div className="portfolio-caption">
                          <h4>Dinning</h4>
                          <p className="text-muted">Add some intimacy to your meals when you stay with us. Arrange to have an in-room or location dining experience with that special someone.</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                     
                     <img className="mr-2" src={wedding} alt="portfolio_img" height="300" width="300" />
                    
                      <div className="portfolio-caption">
                          <h4>Wedding Planning</h4>
                          <p className="text-muted">Sri Lanka is just heaven when it comes to wedding venues and destinations. </p>
                      </div>
                  </div>

                  <div className="col-md-4 col-sm-6 portfolio-item">
                     
                     <img className="mr-2" src={spa} alt="portfolio_img" height="300" width="300" />
                    
                      <div className="portfolio-caption">
                          <h4>Spa – Operated by Spa Ceylon</h4>
                          <p className="text-muted">Relax and rejuvenate yourself with massage therapy, acupuncture treatment and more with Spa Ceylon at Cinnamon Bentota Beach. There is an array of treatments to soothe the body, calm the soul, and relieve stress.</p>
                      </div>
                  </div>

                  <div className="col-md-4 col-sm-6 portfolio-item">
                     
                     <img className="mr-2" src={gym} alt="portfolio_img" height="300" width="300" />
                    
                      <div className="portfolio-caption">
                          <h4>Gymnasium</h4>
                          <p className="text-muted">Keep up your exercise routine, burn off energy and any stress at our well-equipped fitness centre. Create a well-rounded workout with a range of cardio equipment and weights to suit all your fitness needs.</p>
                      </div>
                  </div>
                  
                  
                  
          </div>
         
        </div>
      </section>
    )
}