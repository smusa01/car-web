import React from "react";
import carPng1 from "../Assets/images/car2.png";

const About =()=> {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 relative sm:min-h-[600px]'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
          data-aos="slide-right"
          data-aos-duration="1500"
          >
            <img 
              src={carPng1} 
              alt="Car image" 
              className="sm:scale-105 sm:translate-x-11 max-h-[300px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-bold font-serif">About Us</h1>
            <p data-aos="fade-up">
              Welcome to SYED's CARS, your premier car rental destination. With years of experience, we offer top-notch vehicles, exceptional customer service, and unbeatable prices.
            </p>
            <p data-aos="fade-up">
              Our team is dedicated to ensuring a seamless rental experience. Learn more about our story, mission, and values that drive us to excellence in car rentals.
            </p>
            <button
            data-aos="fade-up"
             className="button-outline">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
