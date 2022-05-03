import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/HomePage/Landing'
import OurProducts from '../components/HomePage/OurProducts'

export default function Home() {
  return (
    <main className='w-full h-auto'>
      <Landing/>
      <OurProducts/>
    </main>
  )
}
