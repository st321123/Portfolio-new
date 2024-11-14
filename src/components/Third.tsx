import React from 'react';
import Slider from 'react-slick';
import { PortfolioPhoto } from './PortfolioPhoto';
import arr from "./details";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Third = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "slick-dots custom-dots",
    arrows: true,
    prevArrow: <button className="slick-prev custom-arrow">{"<"}</button>,
    nextArrow: <button className="slick-next custom-arrow">{">"}</button>,
  };

  return (
    <div className='bg-gray-50 h-screen text-teal-800 px-4 md:px-20 lg:px-40 font-bold min-h-screen'>
      
      <header className='w-full text-center py-6 '>
        <h1 className='font-serif text-2xl sm:text-3xl lg:text-4xl text-teal-800'>Portfolio</h1>
      </header>
      
      {/* Outer border wrapper with gradient and shadow */}
      <div className='flex items-center justify-center min-h-[80vh]'>
        <div className='w-full md:w-3/4 lg:w-2/3 p-6  from-teal-500 to-teal-200 rounded-lg shadow-2xl '>
          <div className='p-4  rounded-lg'>
            <Slider {...settings}>
              {arr.map(({ desc, img, add }) => (
                <div key={img} className='p-6 '>
                  <div className='relative bg-white shadow-lg rounded-lg overflow-hidden pb-10 border border-gray-400 transition-transform duration-500 transform hover:scale-105 '>
                    <PortfolioPhoto desc={desc} img={img} add={add} />

                    {/* Overlay for text */}
                    <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-teal-800 to-transparent text-white'>
                      <h2 className='text-lg font-bold '>{desc}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
    
    </div>
  );
};

export default Third;
