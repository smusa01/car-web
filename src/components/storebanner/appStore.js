import React from 'react';
import pattern from "../Assets/images/banner.jpg";
import playstore from '../Assets/images/play-store.png';
import applestore from '../Assets/images/apple-store.png';

const bannerImg = {
    backgroundImage: `url(${pattern}) `,
    backgroundRepeat:'no-repeat',
    backgrpundSize:'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
};

const AppStore = () => {
  return (
    <div
    className='container pb-16 pt-10'>
        <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}>
            <div>
                <div data-aos='fade-up' className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl font-bold text-center sm:text-4xl font-serif'>Get Started With Our App</h1>
                    <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet voluptas ratione porro mollitia quas!</p>
                    <div
                    data-aos='fade-up' className='flex flex-wrap justify-center items-center gap-4'>
                        <a href="#">
                            <img src={playstore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] ' />
                        </a>
                        <a href="#">
                            <img src={applestore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStore