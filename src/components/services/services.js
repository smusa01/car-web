import React from "react";
import {FaCameraRetro} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";


const skillsData = [
  {
    name: "Best price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choos Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:grid-cols-3 gap-4 dark:text-white">
          {skillsData.map((skill) => (
            <div 
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={skill.aosDelay}
            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 text-white bg-dark hover:bg-primary rounded-lg hover:text-black duration-300">
              <div className="grid place-items-center gap-y-10">{skill.icon}</div>
              <h1 className="text-lg font-bold">{skill.name}</h1>
              <p>{skill.description}</p>
              <br />
              <a href={skill.link} >Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
