import React from 'react'

// components
import Header from '../../layouts/Header/Header'
import Features from '../../layouts/Features/Features'
import Testimonials from '../../layouts/Testimonials/Testimonials'
import Footer from '../../layouts/Footer/Footer'

const Home = () => {
  return (
    <div className="h-auto w-full">
      <Header />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home