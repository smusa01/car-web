import React, { useState } from "react";
import { BiSolidSun , BiSolidMoon} from "react-icons/bi";
import Respomenu from "./showmenu";
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi'


export const NavLinks = [
   { 
    id: "1",
    name: "HOME",
    link: "/#",
   },
   { 
    id: "",
    name: "CARS",
    link: "/#cars",
   },
   { 
    id: "1",
    name: "ABOUT",
    link: "/#about",
   },
   { 
    id: "1",
    name: "BOOKING",
    link: "/#booking",
   },
   
   
]

const Navbar =({theme, setTheme}) => {
const [showMenu, setShowMenu] = useState(false);

const togglemenu = () => {
  setShowMenu (!showMenu)
}

  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-4 px-6 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
                {NavLinks.map((data)=>(
                <li key={data.id} className="py-4">
                    <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" 
                    href="{data.link}">{data.name}</a>
                </li>
                ))}
                {theme === "dark" ? (
                <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                onClick={() => setTheme ("dark")}
                className="text-2xl"
                />
              )
            }
            </ul>
            
          </div>
          
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
                <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                onClick={() => setTheme ("dark")}
                className="text-2xl"
                />
              )
            }
            {/* mobile hamborger menu  */}
            <div>
          {
          showMenu?(
            <HiMenuAlt1 onClick={togglemenu}
            size={30}
      className='cursor-pointer transition-all' />
          ): (
            <HiMenuAlt3 onClick={togglemenu} 
            size={30}
      className='cursor-pointer transition-all'/>
          )
          }
          </div>
          </div>
         
        </div>


      </div>
      <Respomenu showMenu={showMenu} 
       />
    </nav>
  );
}

export default Navbar;