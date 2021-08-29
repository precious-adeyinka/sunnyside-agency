import React from 'react'

const Footer = () => {
  return (
    <div className="h-auto w-full mt-2 overflow-hidden">
      {/* Gallery */}
      <div className="h-auto w-full bg-gray-200 p-2 grid grid-cols-2 gap-1">
        <div className="h-52 w-full bg-gray-300"></div>
        <div className="h-52 w-full bg-gray-300"></div>
        <div className="h-52 w-full bg-gray-300"></div>
        <div className="h-52 w-full bg-gray-300"></div>
      </div>

      {/* Credits */}
      <div className="h-96 w-full bg-gray-200">
      </div>
    </div>
  )
}

export default Footer