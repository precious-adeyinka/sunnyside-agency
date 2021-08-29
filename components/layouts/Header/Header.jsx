import React, {useState, useEffect} from 'react'
import styled from './header.module.css'

// NEXT
import Image from 'next/image';
import { useRouter } from 'next/router';

// components
import Nav from '../Nav/Nav'

const Header = () => {
  // Next Router
  const router = useRouter();

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
    <header className={`h-auto w-full ${isOnMobileViewport ? styled.headerBgMobile : styled.headerBgDesktop}`} id="header">
      <div className="h-[35rem] md:h-[45rem] w-full bg-transparent">
        <Nav />
        {/* Hero Caption */}
        <div className="h-80 md:h-[25rem] w-full bg-transparent pt-16 md:pt-16 flex flex-col justify-center md:jusify-between items-center space-y-10 md:space-y-20">
          <h1 className="w-8/12 md:w-full text-5xl md:text-5xl text-white font-bold text-center leading-tight font-fraunces tracking-widest">WE ARE CREATIVES</h1>
          <div className="mx-auto my-2 cursor-pointer" onClick={() => router.push('#features')}>
            <Image src={'/assets/images/icon-arrow-down.svg'} height={isOnMobileViewport ? "100" : "110"} width={isOnMobileViewport ? "30" : "32"} />
          </div>
        </div>
      </div>
    </header> 
  )
}

export default Header