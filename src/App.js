import React, {useEffect, useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/home/hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/about/about";
import Services from "./components/services/services";
import Carlist from "./components/carlist/carlist";
import Testimonial from "./components/testimonial/testimonial";
import AppStore from "./components/storebanner/appStore";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";


function App() {

  const [theme, setTheme] = React.useState(localStorage.getItem ("theme") ?
    localStorage.getItem("theme"):"light");
  const element = document.documentElement;
  useEffect(() =>{
    if(theme=== "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");

    }
  },[theme]);

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh()
  },[]);

  return ( 
    <div className="bg-white dark:bg-dark dark:text-white ">
      <Navbar theme={theme} setTheme={setTheme} />

      <Hero theme={theme}/>

      <About />

      <Services />
      <Carlist />
      <Testimonial />
      <AppStore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
