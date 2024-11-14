import React from 'react';

type Props = { desc: string, img: string, add: string };

export const PortfolioPhoto = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center mt-10 mb-4 ">
      <div className="group border  rounded-lg p-4 md:p-6 transition-shadow hover:shadow-2xl flex flex-col md:flex-row items-center md:items-start text-left space-y-4 md:space-y-0 md:space-x-6">
        
        {/* Left Side - Description */}
        <div className="flex-1">
          <a href={props.add} target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-semibold text-teal-800 group-hover:underline mb-2 ">
              {props.desc}
            </h3>
          </a>
         
        </div>

        {/* Right Side - Image */}
        <a href={props.add} target="_blank" rel="noopener noreferrer">
          <img
            className="rounded-md border-2  h-max w-max xs:h-48 xs:w-48 sm:h-60 sm:w-60 transition-transform duration-300 transform hover:scale-105"
            src={props.img}
            alt={props.desc}
          />
        </a>
      </div>
    </div>
  );
};
