import React from 'react';
import carPng from "../Assets/images/car-dark.png";
import whiteCar from "../Assets/images/car-white.png";

function Hero({ theme }) {
  return (
    <div>
      <div className='dark:bg-black dark:text-white duration-300 relative'>
        <div className='container min-h-[620px] flex'>
          <div className='grid place-items-center grid-cols-1 sm:grid-cols-2'>
            <div 
              data-aos="zoom-in"
              data-aos-duration="1500"
              className='order-1 sm:order-2'>
              <img 
                className="max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]" 
                src={theme === "dark" ? carPng : whiteCar} 
                alt='car'
              />
            </div>
            <div className='order-1 sm:order-1 space-y-5 sm:pr-32'>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className='text-primary text-2xl font-serif'>
                Effortless
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="800"
                className='text-7xl font-semibold font-serif'>
                Car Rental
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, incidunt? Dicta ducimus culpa facere aperiam quisquam. Mollitia cum voluptas unde.
              </p>
              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                className='btn bg-black dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-black text-white px-4 py-2 rounded-md hover:bg-primary duration-300 hover:text-black'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
