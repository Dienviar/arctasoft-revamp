import React, { useEffect, useRef } from 'react'
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navigation = ({homeRef, productsRef, servicesRef, clientsRef, aboutUsRef}) => {
    const home = useRef()
    const products = useRef()
    const services = useRef()
    const clients = useRef()
    const aboutus = useRef()


// function elementInViewport(el) {
//   var top = el.offsetTop;
//   var left = el.offsetLeft;
//   var width = el.offsetWidth;
//   var height = el.offsetHeight;

//   while(el.offsetParent) {
//     el = el.offsetParent;
//     top += el.offsetTop;
//     left += el.offsetLeft;
//   }

//   return (
//     top >= window.pageYOffset &&
//     left >= window.pageXOffset &&
//     (top + height) <= (window.pageYOffset + window.innerHeight) &&
//     (left + width) <= (window.pageXOffset + window.innerWidth)
//   );
// }

    const elementInViewport = (el) => {
        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while(el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }

    const changeNavLinkToActive = (ref) => {
        ref.current.style.color = "#017f7f"     
    }

    const changeNavLinkToInactive = (ref) => {
        ref.current.style.color = "black"       
    }

    const checkIfOnViewPort = (divRef, NavRef) => {
        if(elementInViewport(divRef.current)){
            changeNavLinkToInactive(NavRef)
            return true
        }
        changeNavLinkToActive(NavRef)
        return false
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(checkIfOnViewPort(homeRef, home)){
                document.title = "Home"
                return
            }
            else if(checkIfOnViewPort(productsRef, products)){
                document.title = "Products"
                return
            }
            else if(checkIfOnViewPort(servicesRef, services)){
                document.title = "Services"
                return
            }
            else if(checkIfOnViewPort(clientsRef, clients)){
                document.title = "Clients"
                return
            }
            else if(checkIfOnViewPort(aboutUsRef, aboutus)){
                document.title = "About Us"
                return
            }   
        })
    }, [])
    
    const goHome = () => {
        homeRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
    }

    const goProducts = () => {
        productsRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
    }

    const goServices = () => {
        servicesRef.current.scrollIntoView({behavior: "smooth", block: "center", inline: "start"})
    }
    
    const goClients = () => {
        clientsRef.current.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})
    }

    const goAboutUs = () => {
        aboutUsRef.current.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"})
    }

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-center w-full h-20 bg-white shadow-md'>  
        <div className='relative w-[1200px] h-full'>
            <section className='absolute left-0 w-auto h-full screen600px:left-5'>
                <img src="./Logo/logo.png" alt="Arctasoft Logo" className='w-full h-full py-1 screen600px:hidden' />
                <img src="./Logo/icon.png" alt="Arctasoft Icon" className='hidden w-auto h-full py-1 screen600px:block'/>
            </section>

            <section className='absolute flex items-center w-auto h-full right-5 screen1000px:hidden'>
                <ul className='flex items-center select-none'>
                    <li onClick={goHome} ref={home} className='mx-5 text-lg text-black duration-300 cursor-pointer hover:text-pal_green'>
                        Home
                    </li>

                    <li onClick={goProducts} ref={products} className='mx-5 text-lg text-black duration-300 cursor-pointer hover:text-pal_green'>
                        Products
                    </li>


                    <li onClick={goServices} ref={services} className='mx-5 text-lg text-black duration-300 cursor-pointer hover:text-pal_green'>
                        Services
                    </li>


                     <li onClick={goClients} ref={clients} className='mx-5 text-lg text-black duration-300 cursor-pointer hover:text-pal_green'>
                        Clients
                    </li>


                    <li onClick={goAboutUs} ref={aboutus} className='mx-5 text-lg text-black duration-300 cursor-pointer hover:text-pal_green'>
                        About Us
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