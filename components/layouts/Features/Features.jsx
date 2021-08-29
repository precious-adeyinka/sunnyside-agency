import React from 'react'

const Features = () => {
  return (
    <div className="h-auto w-full my-10" id="features">
      <div className="h-auto w-full bg-gray-200 flex flex-col justify-center items-center space-y-3">
        <div className="h-auto md:h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-3">
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
        </div>
        <div className="h-auto md:h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-3">
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
        </div>
        <div className="h-auto md:h-96 w-full bg-transparent flex flex-col justify-center items-center space-y-3">
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
          <div className="h-96 w-full md:w-1/2 bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}

export default Features