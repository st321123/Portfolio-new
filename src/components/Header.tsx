import React, { useState, useEffect } from 'react';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { Contact } from '../components/contact';

function Header() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenHeight = window.innerHeight;
      // Hide the header when scrolling past the screen height
      setIsVisible(scrollTop < screenHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Conditionally hide the header after scrolling past h-screen */}
      <div
        className={`fixed top-0 left-0 w-full z-10 bg-white text-teal-800 flex justify-between items-center text-sm xs:text-base sm:text-lg px-10 py-2 shadow-md transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
      >
        <div>
          <h1 className='font-bold hover:underline'>Shubham Tewari</h1>
        </div>
        <div className='flex items-center'>
          {/* CgMail Icon to open Contact Sheet */}
          <a
            className='hover:text-black py-1 cursor-pointer'
            onClick={() => setIsContactOpen(true)}
          >
            <CgMail className='mx-1' size={19} />
          </a>
          <a
            className='hover:text-black'
            target="_blank"
            href="https://www.linkedin.com/in/shubham-tewari-97336b24b/"
            rel="noopener noreferrer"
          >
            <FaLinkedin className='mx-1' size={15} />
          </a>
          <a
            className='hover:text-black py-1'
            href='https://www.instagram.com/shubham07112/'
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className='mx-1' size={15} />
          </a>
        </div>
      </div>

      {/* Render the Contact component if isContactOpen is true */}
      {isContactOpen && (
        <div className="fixed inset-0 z-20">
          <Contact setIsContactOpen={setIsContactOpen} isContactOpen={isContactOpen} />
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsContactOpen(false)}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Header;
