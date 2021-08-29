import React, { useState } from "react";
import styled from './nav.module.css'

// NEXT
import Link from 'next/link'

// Components
import MobileNav from "./MobileNav"

const Nav = () => {
   // state variables
  const [isDrawerOpened, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer(!isDrawerOpened);
  };

  return (
    <div className="h-auto w-full p-3 px-0">
      <div className="h-16 w-11/12 bg-transparent mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="h-12 w-1/2 flex flex-row justify-start items-center md:space-x-16">
          <h1 className="font-bold text-2xl md:text-3xl text-white md:-mt-3 relative logoAfter font-barlow">
            sunnyside
          </h1>
        </div>

        {/* Right */}
        <div className="h-12 w-1/2 flex flex-row justify-center md:justify-end md:pr-0 items-center">
          {/* Hamburger */}
          <div
            className="h-full w-7 flex flex-col justify-center items-end space-y-1 cursor-pointer ml-auto md:hidden"
            onClick={toggleDrawer}
          >
            <div
              className={`h-[3px] w-full bg-white rounded-3xl transition duration-700 ${
                isDrawerOpened
                  ? "w-full transform rotate-45"
                  : "opacity-1"
              }`}
            ></div>
            <div
              className={`h-[3px] w-full bg-white rounded-3xl transition duration-700 ${
                isDrawerOpened ? "transform scale-0" : "opacity-1"
              }`}
            ></div>
            <div
              className={`h-[3px] w-full bg-white ml-auto rounded-3xl transition duration-700 ${
                isDrawerOpened
                  ? "w-full transform -rotate-45 relative -top-2"
                  : "opacity-1"
              }`}
            ></div>
          </div>

          {/* Mobile Nav */}
          <MobileNav status={isDrawerOpened} />

          {/* Hidden on mobile */}
          <div className="responsiveVisibility md:flex justify-center items-center">
            <ul className="h-auto w-full flex flex-row justify-center items-center space-x-10">
              <li className="h-auto w-full flex justify-center items-center text-white font-barlow font-medium hover:font-bold transition duration-700">
                <Link href="#about">About</Link>
              </li>
               <li className="h-auto w-full flex justify-center items-center text-white font-barlow font-medium hover:font-bold transition duration-700">
                <Link href="#services">Services</Link>
              </li>
               <li className="h-auto w-full flex justify-center items-center text-white font-barlow font-medium hover:font-bold transition duration-700">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="h-auto w-full flex justify-center items-center">
                <button className={`h-9 w-24 bg-white ${styled.desaturatedWhite} text-gray-700 text-xs font-bold flex justify-center items-center shadow-sm
                transition duration-700 rounded-3xl border-0 py-3 px-0 focus:outline-none`}>
                  CONTACT
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav