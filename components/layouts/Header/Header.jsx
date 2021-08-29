import React from 'react'

// components
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <div className="h-auto w-full mb-2">
      <div className="h-96 w-full bg-gray-200">
        <Nav />
      </div>
    </div>
  )
}

export default Header