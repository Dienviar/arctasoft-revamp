import React from 'react'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className='w-full h-auto screen250px:w-[250px]'>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout