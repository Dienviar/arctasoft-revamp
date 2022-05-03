import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/HomePage/Landing'
import OurProducts from '../components/HomePage/OurProducts'
import OurServices from '../components/HomePage/OurServices'
import OurClients from '../components/HomePage/OurClients'
import Testimonial from '../components/HomePage/Testimonial'
import AboutUs from '../components/HomePage/AboutUs'
import { useRef } from 'react'
import Navigation from '../components/Navigation'

export default function Home() {

  const homeRef = useRef()
  const productsRef = useRef()
  const servicesRef = useRef()
  const clientsRef = useRef()
  const aboutUsRef = useRef()

  return (
    <>
      <Navigation homeRef={homeRef} productsRef={productsRef} servicesRef={servicesRef} clientsRef={clientsRef} aboutUsRef={aboutUsRef}/>
      <main className='w-full h-auto'>
        <div ref={homeRef}><Landing /></div>
        <div ref={productsRef}><OurProducts/></div>
        <div ref={servicesRef}><OurServices/></div>
        <div ref={clientsRef}>
          <OurClients/>
          <Testimonial/>
        </div>
        <div ref={aboutUsRef}><AboutUs/></div>
      </main>    
    </>
  )
}
