import React from 'react'
import styled from './testimonials.module.css'

// NEXT
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className={`h-auto w-full ${styled.white} pb-20`}>
      <h2 className="text-lg text-center text-gray-400 my-20 font-fraunces font-bold">CLIENT TESTIMONIALS</h2>

      {/* List */}
      <div className="h-auto w-full md:w-10/12 md:mx-auto bg-transparent flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-10">
        {/* Emily */}
        <div className="h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-10">
          {/* Image */}
          <div className="h-28 w-28 rounded-full mx-auto overflow-hidden">
            <Image src={'/assets/images/image-emily.jpg'} height="150" width="150" className="bg-cover" />
          </div>

          {/* Comments */}
          <p className="w-9/12 md:w-full text-center text-md md:text-sm text-gray-700 font-medium font-barlow leading-normal">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <h3 className={`font-bold text-xl ${styled.desaturatedBlue} font-fraunces`}>Emily R.</h3>
            <h6 className="text-gray-400 font-normal md:font-medium text-sm">Marketing Director</h6>
          </div>
        </div>

        {/* Thomas */}
        <div className="h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-10">
          {/* Image */}
          <div className="h-28 w-28 rounded-full mx-auto overflow-hidden">
            <Image src={'/assets/images/image-thomas.jpg'} height="150" width="150" className="bg-cover" />
          </div>

          {/* Comments */}
          <p className="w-9/12 md:w-full text-center text-md md:text-sm text-gray-700 font-medium font-barlow leading-normal">
          Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>

          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <h3 className={`font-bold text-xl ${styled.desaturatedBlue} font-fraunces`}>Thomas S.</h3>
            <h6 className="text-gray-400 font-normal md:font-medium text-sm">Chief Operating Officer</h6>
          </div>
        </div>

        {/* Jennie */}
        <div className="h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-10">
          {/* Image */}
          <div className="h-28 w-28 rounded-full mx-auto overflow-hidden">
            <Image src={'/assets/images/image-jennie.jpg'} height="150" width="150" className="bg-cover" />
          </div>

          {/* Comments */}
          <p className="w-9/12 md:w-full text-center text-md md:text-sm text-gray-700 font-medium font-barlow leading-normal">
          Incredible end result! Our sales increased over 40% when we worked with Sunnyside. Highly recommended!</p>

          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <h3 className={`font-bold text-xl ${styled.desaturatedBlue} font-fraunces`}>Jennie F.</h3>
            <h6 className="text-gray-400 font-normal md:font-medium text-sm">Business Owner</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials