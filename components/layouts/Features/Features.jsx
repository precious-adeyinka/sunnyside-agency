import React, {useState, useEffect} from 'react'
import styled from './features.module.css';

const Features = () => {
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
    <div className="h-auto w-full" id="features">
      <div className="h-auto w-full bg-gray-200 flex flex-col justify-center items-center">
        {/* Brand */}
        <div className="h-auto w-full bg-transparent flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Content */}
          <div className="h-[45rem] md:h-[35rem] w-full md:w-1/2 bg-white flex flex-col justify-center items-center md:items-start md:pl-32 space-y-10 md:space-y-5">
            {/* Title */}
            <h2 className={`w-8/12 font-bold font-fraunces text-4xl text-center md:text-left leading-slug ${styled.desaturatedBlue}`}>Transform your brand</h2>

            {/* Desc */}
            <p className={`w-11/12 md:w-10/12 leading-loose md:leading-slug text-lg md:text-[15px] text-gray-500 text-center md:text-left font-medium md:font-normal`}>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>

            {/* Button */}
            <div className={`h-auto w-44 bg-transparent ${styled.transformGroupHover} relative z-50 flex flex-col justify-center items-center md:items-start`}>
              <button className={`h-14 w-40 text-lg font-bold mx-auto ${styled.desaturatedBlue} md:text-left`}>LEARN MORE</button>
              {/* After ELement */}
              <span className={`h-2 w-9/12 md:w-8/12 mx-auto block ${styled.paleYellow} absolute bottom-4 left-6 md:left-2 rounded-lg ${styled.negIndex}`}></span>
            </div>
          </div>

          {/* Image */}
          <div className={`h-[25rem] md:h-[35rem] w-full md:w-1/2 ${isOnMobileViewport ? styled.transformBgMobile : styled.transformBgDesktop}`}></div>
        </div>

        {/* Audience */}
        <div className="h-auto w-full bg-transparent flex flex-col-reverse md:flex-row-reverse justify-center items-center">
          {/* Content */}
          <div className="h-[45rem] md:h-[35rem] w-full md:w-1/2 bg-white flex flex-col justify-center items-center md:items-start md:pl-32 space-y-10 md:space-y-5">
            {/* Title */}
            <h2 className={`w-9/12 font-bold font-fraunces text-4xl text-center md:text-left leading-slug ${styled.desaturatedBlue}`}>Stand out to the right audience</h2>

            {/* Desc */}
            <p className={`w-11/12 md:w-10/12 leading-loose md:leading-slug text-lg md:text-[15px] text-gray-500 text-center md:text-left font-medium md:font-normal`}>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>

            {/* Button */}
            <div className={`h-auto w-44 bg-transparent ${styled.standOutGroupHover} relative z-50 flex flex-col justify-center items-center md:items-start`}>
              <button className={`h-14 w-40 text-lg font-bold mx-auto ${styled.desaturatedBlue} md:text-left`}>LEARN MORE</button>
              {/* After ELement */}
              <span className={`h-2 w-9/12 md:w-8/12 mx-auto block ${styled.paleRed} absolute bottom-4 left-6 md:left-2 rounded-lg ${styled.negIndex}`}></span>
            </div>
          </div>

          {/* Image */}
          <div className={`h-[25rem] md:h-[35rem] w-full md:w-1/2 ${isOnMobileViewport ? styled.standOutBgMobile : styled.standOutBgDesktop}`}></div>
        </div>

        {/* Graphic Design & Photography */}
        <div className="h-auto w-full bg-transparent flex flex-col-reverse md:flex-row justify-center items-center">
          {/* Graphic Design */}
          <div className={`h-[40rem] md:h-[35rem] w-full md:w-1/2 pb-16 ${isOnMobileViewport ? styled.graphicDesignBgMobile : styled.graphicDesignBgDesktop} 
          flex flex-col justify-end items-center md:items-start md:pl-32 space-y-5`}>
            {/* Title */}
            <h2 className={`w-9/12 font-bold font-fraunces text-2xl text-center leading-slug ${styled.graphicDesignText}`}>Graphic Design</h2>

            {/* Desc */}
            <p className={`w-11/12 md:w-8/12 leading-normal text-lg md:text-[15px] ${styled.graphicDesignText} text-center font-medium`}>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
          </div>

          {/* Photography */}
         <div className={`h-[40rem] md:h-[35rem] w-full md:w-1/2 pb-16 ${isOnMobileViewport ? styled.photographyBgMobile : styled.photographyBgDesktop} 
          flex flex-col justify-end items-center md:items-start md:pl-32 space-y-5`}>
            {/* Title */}
            <h2 className={`w-9/12 font-bold font-fraunces text-2xl text-center leading-slug ${styled.photographyText}`}>Photography</h2>

            {/* Desc */}
            <p className={`w-11/12 md:w-8/12 leading-normal text-lg md:text-[15px] ${styled.photographyText} text-center font-medium`}>
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features