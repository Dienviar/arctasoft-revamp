import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import BackTopTop from './BackToTop'

const Layout = ({ children }) => {

  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
   window.addEventListener('scroll', () => {
      let scroll =  window.pageYOffset

      if(scroll > 0) {
        setShowToTop(true)
      }
      else{
        setShowToTop(false)
      }
    })
  }, [])
  

  return (
    <div className='w-full h-auto screen250px:w-[250px]'>
        { children }
        <Footer/>
        <BackTopTop showToTop={showToTop}/>
    </div>
  )
}

export default Layout