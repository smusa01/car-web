import React from 'react';
import{ FaUserCircle  } from 'react-icons/fa'
import { NavLinks } from './Navbar';

const Respomenu = ({showMenu}) => {
  return (
    <div className= {`${
      showMenu ? "left-0": "-left-full"
    } fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[65%] md:hidden rounded-r-lg shadow-md flex flex-col justify-between `} >
      <div className="card">
        <div className="flex items-center justify-start gap-3 px-8 pt-16 pb-6 duration-300">
          <FaUserCircle size={50}   />
          <div>
            <h1>Hello User</h1>
            <h1>Premium User</h1>
          </div>
          
        </div>
        <nav><ul className='space-y-4 text-xl px-16 '>
          {
            NavLinks.map((data) => (
              <li className="py-2 hover:border-r-2 hover:text-primary hover:border-primary transition-colors duration-500  font-medium">
                <a href={data.link}>{data.name}</a>
              </li>
            ))
          }</ul></nav>
      </div>
      <div>
        <h1>
          Made with ❤️ By <a href="https://smusa01.github.io">SYED MUSA</a>
        </h1>
      </div>
    </div>
  )
}

export default Respomenu;