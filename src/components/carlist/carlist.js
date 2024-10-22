import React from 'react'
import car1 from "../Assets/images/gallery1.png"
import car2 from "../Assets/images/gallery3.png"
import car3 from "../Assets/images/gallery4.png"

const CarListData = [
  {
    name : "VEGO UX",
    price: 80,
    image: car2,
    aosDelay: 0,
    distance: 12,
  },
  {
    name : "TZ UX",
    price: 100,
    image: car3,
    aosDelay: 500,
    distance: 18,
  },
  {
    name : "BUGATTI UX",
    price: 120,
    image: car1,
    aosDelay: 1000,
    distance: 20,
  },
]
const Carlist = () => {
  return (
    <div  className='pb-24  pt-12 bg-white dark:bg-dark dark:text-white' >
      <div className="container">
        <h1 data-aos='fade-up' className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Lorem, ipsum dolor</h1>
        <p
        data-aos='fade-up'
        className='text-sm pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam beatae nesciunt deserunt!</p>
        {/* car listing card */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {
            CarListData.map((car) => {
              return (
              <div
              data-aos='fade-up' 
              data-aos-delay={car.aosDelay}
              className='space-y-3 border-2 border-gray-300 hover:border-primary p-4 rounded-xl relative group'>
                <div className='w-full h-[120px]'>
                  <img
                  className='w-full h[120px] object-contain sm:translate-x-6 group-hover:translate-x-16 duration-1000' src={car.image} alt="" />

                </div>
                <div className='space-y-2'>
                  <h1 className='text-primary font-semibold'>
                    {car.name}
                  </h1>
                  <div className='flex justify-between items-center text-xl font-semibold'>
                    <p>
                      ${car.price}/Day
                    </p>
                    <a href="#">Details</a>
                    
                  </div>
                  
                </div>
                
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    {car.distance}Km
                  </p>

                
              </div>
              );
              
            })
          }
        </div>
       <div className="grid place-content-center pt-8">
       <button
            data-aos="fade-up"
            data-aos-delay='1200'
             className="button-outline">Get Started</button>
         
       </div>
      </div>
    </div>
  )
}

export default Carlist