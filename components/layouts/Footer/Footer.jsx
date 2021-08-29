import React, {useState, useEffect} from 'react'
import styled from './footer.module.css'

// NEXT
import Link from 'next/link'

const Footer = () => {
  // state vars
  const [isOnMobileViewport, updateViewportType] = useState(false);

  useEffect(() => {
    // Get viewport status
    checkViewport();
  }, [isOnMobileViewport]);

  // Check the viewport status and update the bg image accordingly
  const checkViewport = () => {
    if (
      window.matchMedia("only screen (max-width: 500px)").matches ||
      window.screen.availWidth <= 425
    ) {
      updateViewportType(true);
    } else {
      updateViewportType(false);
    }
  };

  return (
    <div className="h-auto w-full mt-2 overflow-hidden">
      {/* Gallery */}
      <div className="h-auto w-full bg-gray-200 p-0 grid grid-cols-2 md:grid-cols-4 gap-0">
        <div className={`h-52 md:h-96 w-full bg-gray-300 ${isOnMobileViewport ? styled.milkbottlesBgMobile : styled.milkbottlesBgDesktop}`}></div>
        <div className={`h-52 md:h-96 w-full bg-gray-300 ${isOnMobileViewport ? styled.orangeBgMobile : styled.orangeBgDesktop}`}></div>
        <div className={`h-52 md:h-96 w-full bg-gray-300 ${isOnMobileViewport ? styled.coneBgMobile : styled.coneBgDesktop}`}></div>
        <div className={`h-52 md:h-96 w-full bg-gray-300 ${isOnMobileViewport ? styled.sugarCubesBgMobile : styled.sugarCubesBgDesktop}`}></div>
      </div>

      {/* Credits */}
      <div className={`h-80 w-full ${styled.paleGreen} flex flex-col justify-center items-center`}>
        <h1 className={`font-bold text-4xl text-center ${styled.green} font-sans`}>sunnyside</h1>

        <div className="mt-10 flex justify-center items-center">
          <ul className="flex justify-center items-center space-x-16">
            <li className={`${styled.green} hover:text-white font-bold text-xl md:text-lg font-barlow`}>
              <Link href="#">About</Link>
            </li>
            <li className={`${styled.green} hover:text-white font-bold text-xl md:text-lg font-barlow`}>
              <Link href="#">Services</Link>
            </li>
            <li className={`${styled.green} hover:text-white font-bold text-xl md:text-lg font-barlow`}>
              <Link href="#">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="my-3 flex justify-center items-center mt-20">
          <ul className="flex justify-center items-center space-x-5">
            <li className={`${styled.green} hover:text-white cursor-pointer`}>
              <i className="la la-facebook text-4xl md:text-3xl"></i>
            </li>

            <li className={`${styled.green} hover:text-white cursor-pointer`}>
              <i className="la la-instagram text-4xl md:text-3xl"></i>
            </li>

            <li className={`${styled.green} hover:text-white cursor-pointer`}>
              <i className="la la-twitter text-4xl md:text-3xl"></i>
            </li>

            <li className={`${styled.green} hover:text-white cursor-pointer`}>
              <i className="la la-pinterest text-4xl md:text-3xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer