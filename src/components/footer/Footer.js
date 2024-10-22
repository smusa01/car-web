import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaPinterest, FaStar, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa'


const footerLinks = [
  {
    title: 'Home',
    link: '/#'
  },
  {
    title: 'Blog',
    link: '/#'
  },
  {
    title: 'About',
    link: '/#'
  },
  {
    title: 'Blog',
    link: '/#'
  },
]

const Footer = () => {
  return (
    <div className='bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl'>
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
              {/* ompany details  */}
              <div className="py-8 px-4">
                <h1 className="text-xl sm:text-3xl font-bold text-justify mb-3 gap-3 flex items-center">CAR RENTAL</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero repellendus eum iste id!</p>
                <br />
                <div className='flex items-center gap-2'>
                  <FaLocationArrow />
                  <p>Sector C street #16 Kanjo TownShip Swat</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaMobileAlt />
                  <a href='https://wa.me//+923481636323'>+92-348-1636323</a>
                </div>
                {/* social handles  */}
                <div className='flex items-center'>
                  <a href="#">
                    <FaInstagram className='text-3xl hover:text-primary duration-300 '/>
                  </a>
                  <a href="#">
                    <FaFacebook className='text-3xl hover:text-primary duration-300 '/>
                  </a>
                  
                 
                  <a href="#">
                    <FaGithub  className='text-3xl hover:text-primary duration-300 '/>
                  </a>
                  
                  <a href="#">
                    <FaLinkedin className='text-3xl hover:text-primary duration-300 '/>
                  </a>
                  
                 
                </div>
              </div>
              {/* nav links  */}
              <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                {/* first col  */}
                <div className='px-4 py-8'>
                  <div>
                    <h1 className='text-xl  font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                  
                  <ul className='flex flex-col gap-3'>
                    {
                      footerLinks.map((data) =>{
                        return <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                          <span className='mr-2'>&#11162;</span>
                          <a href={data.link}>
                            {data.title}
                          </a>
                        </li>

                      })
                    }
                    </ul>
                  </div>
                </div>
                {/* second col  */}
                <div className='px-4 py-8'>
                  <div>
                    <h1 className='text-xl  font-bold sm:text-left text-justify mb-3'>Links</h1>
                  
                  <ul className='flex flex-col gap-3'>
                    {
                      footerLinks.map((data) =>{
                        return <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                          <span className='mr-2'>&#11162;</span>
                          <a href={data.link}>
                            {data.title}
                          </a>
                        </li>

                      })
                    }
                    </ul>
                  </div>
                </div>
                {/* third col  */}
                <div className='px-4 py-8'>
                  <div>
                    <h1 className='text-xl  font-bold sm:text-left text-justify mb-3'>Locations</h1>
                  
                  <ul className='flex flex-col gap-3'>
                    {
                      footerLinks.map((data) =>{
                        return <li key={data.title} className='cursor-pointer hover:text-primary duration-300'>
                          <span className='mr-2'>&#11162;</span>
                          <a href={data.link}>
                            {data.title}
                          </a>
                        </li>

                      })
                    }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer