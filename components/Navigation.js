import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = () => {

    const { pathname } = useRouter()

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-center w-full h-20 bg-white shadow-md'>  
        <div className='relative w-[1200px] h-full'>
            <section className='absolute left-0 w-auto h-full screen600px:left-5'>
                <img src="./Logo/logo.png" alt="Arctasoft Logo" className='w-full h-full py-1 screen600px:hidden' />
                <img src="./Logo/icon.png" alt="Arctasoft Icon" className='hidden w-auto h-full py-1 screen600px:block'/>
            </section>

            <section className='absolute flex items-center w-auto h-full right-5 screen1000px:hidden'>
                <ul className='flex items-center'>
                    <li className={`${pathname == "/" ? 'text-pal_green' : 'text-black'} mx-5 duration-300 hover:text-pal_green text-lg`}>
                        <Link href="/">Home</Link>
                    </li>

                    <li className={`${pathname == "/products" ? 'text-pal_green' : 'text-black'} mx-5 duration-300 hover:text-pal_green text-lg`}>
                        <Link href="/">Products</Link>
                    </li>

                    <li className={`${pathname == "/services" ? 'text-pal_green' : 'text-black'} mx-5 duration-300 hover:text-pal_green text-lg`}>
                        <Link href="/">Services</Link>
                    </li>

                    <li className={`${pathname == "/clients" ? 'text-pal_green' : 'text-black'} mx-5 duration-300 hover:text-pal_green text-lg`}>
                        <Link href="/">Clients</Link>
                    </li>

                    <li className={`${pathname == "/aboutus" ? 'text-pal_green' : 'text-black'} mx-5 duration-300 hover:text-pal_green text-lg`}>
                        <Link href="/">About Us</Link>
                    </li>

                    <li>
                        <Button variant="contained" style={{ backgroundColor : "#017f7f" }}>Contact Us</Button>
                    </li>
                </ul>
            </section>

            <section className='absolute items-center hidden w-auto h-full screen1000px:flex right-5'>
                <GiHamburgerMenu className='w-8 h-8 duration-300 cursor-pointer hover:text-pal_green'/>
                {/* Hamburger Here */}
            </section>
        </div>
    </nav>
  )
}

export default Navigation