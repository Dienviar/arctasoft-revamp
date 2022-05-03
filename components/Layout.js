import React from 'react'
import Navigation from './Navigation'

const Layout = ({ children }) => {
  return (
    <div className='w-full h-auto screen250px:w-[250px]'>
        <Navigation/>
        { children }
    </div>
  )
}

export default Layout