import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const OurClients = () => {

    useEffect(() => {
        gsap.to(".client1", {
            rotateY: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".client1",
                start: "30% bottom"
            }
        })

        gsap.to(".client2", {
            rotateY: 0,
            duration: 1,
            delay: .5,
            scrollTrigger: {
                trigger: ".client2",
                start: "30% bottom"
            }
        })

        gsap.to(".client3", {
            rotateY: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".client3",
                start: "30% bottom"
            }
        })

        gsap.to(".client4", {
            rotateY: 0,
            duration: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: ".client4",
                start: "30% bottom"
            }
        })

        gsap.to(".client5", {
            rotateY: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".client5",
                start: "30% bottom"
            }
        })

        gsap.to(".client6", {
            rotateY: 0,
            duration: 1,
            delay: .5,
            scrollTrigger: {
                trigger: ".client6",
                start: "30% bottom"
            }
        })

        gsap.to(".client7", {
            rotateY: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: ".client7",
                start: "30% bottom"
            }
        })

        gsap.to(".client8", {
            rotateY: 0,
            duration: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: ".client8",
                start: "30% bottom"
            }
        })

        gsap.to(".client9", {
            rotateY: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".client9",
                start: "30% bottom"
            }
        })
    }, [])
    

  return (
    <section className='flex justify-center w-full h-auto py-20 mt-48 bg-gray-100 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>Our Clients</p>
                    <p className='text-lg text-gray-400'>Those who have trusted us</p>
                </div>
            </article>

            <article className='flex items-center justify-center w-full h-auto mt-10 screen850px:flex-wrap'>
                <div className='w-[150px] h-[350px] mx-1 flex justify-center items-center screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='client1 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                        <img src="./OurClients/GTC.png" alt="GTC" className='w-auto h-full screen420px:w-full screen420px:h-auto' />
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[175px] flex justify-center items-end mb-3'>
                        <div className='client2 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                            <img src="./OurClients/Instacafe.png" alt="Instacafe" className='w-full h-auto' />
                        </div>
                    </div>
                    
                    <div className='w-full h-[175px] flex justify-center items-start mt-3'>
                        <div className='client3 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                            <img src="./OurClients/Duchess.png" alt="Duchess" className='w-auto h-full screen420px:w-full screen420px:h-auto' />
                        </div>
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='client4 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                                <img src="./OurClients/Bunpler.png" alt="Bunpler" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>
                    
                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='client5 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                                <img src="./OurClients/Umami.png" alt="Umami" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>  

                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='client6 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                                <img src="./OurClients/Sentry.png" alt="Sentry" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>             
                </div>

               <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[175px] flex justify-center items-end mb-3'>
                        <div className='client7 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                            <img src="./OurClients/KAPs.png" alt="KAPs" className='w-auto h-full screen420px:w-full screen420px:h-auto' />
                        </div>
                    </div>
                    
                    <div className='w-full h-[175px] flex justify-center items-start mt-3'>
                        <div className='client8 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                            <img src="./OurClients/Mazyoona.png" alt="Mazyoona" className='w-full h-auto' />
                        </div>
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 flex justify-center items-center screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='client9 rounded-md w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2 rotateY_150deg'>
                        <img src="./OurClients/L'Armoire.png" alt="L'Armoire" className='w-full h-auto' />
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurClients