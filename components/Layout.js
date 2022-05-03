import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-full h-auto screen250px:w-[250px]'>
        <Navigation/>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout