import React, { useState, useEffect } from "react";
import styled from './mobilenav.module.css'

const MobileNav = ({ status }) => {
  // state variables
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(status);
  }, [status]);

  return (
    <div
      className={`${
        isOpen
          ? "block h-auto opacity-1 pt-10 p-5 shadow-2xl transform scale-100"
          : "hidden h-auto opacity-0 p-0 shadow-none transition duration-700 transform scale-90"
      } transition duration-700 w-11/12 mx-auto bg-white py-10
      flex flex-row justify-center items-center absolute top-28 left-4 z-50 md:hidden ${styled.mobilenavAfter}`}
    >
      <ul className="h-auto w-full flex flex-col justify-center items-center space-y-5">
        <li className="h-auto w-full flex justify-center font-bold text-lg text-gray-500 hover:text-black font-barlow">
          About
        </li>
        <li className="h-auto w-full flex justify-center font-bold text-lg text-gray-500 hover:text-black font-barlow">
          Services
        </li>
        <li className="h-auto w-full flex justify-center font-bold text-lg text-gray-500 hover:text-black font-barlow">
          Projects
        </li>
        {/* Buttons */}
        <li className="h-auto w-full flex justify-center items-center">
          <button
            className={`h-14 w-32 ${styled.bgYellow} text-gray-800 shadow-lg text-md font-bold 
          flex justify-center items-center rounded-3xl border-0 py-3 px-5 focus:outline-none`}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
