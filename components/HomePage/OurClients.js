import React from 'react'

const OurClients = () => {
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
                    <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                        <img src="./OurClients/gcash.png" alt="Gcash" className='w-full h-auto' />
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[175px] flex justify-center items-end mb-3'>
                        <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                            <img src="./OurClients/smart.png" alt="Gcash" className='w-full h-auto' />
                        </div>
                    </div>
                    
                    <div className='w-full h-[175px] flex justify-center items-start mt-3'>
                        <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                            <img src="./OurClients/bdo.png" alt="BDO" className='w-full h-auto' />
                        </div>
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                                <img src="./OurClients/pldt.png" alt="PLDT" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>
                    
                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                                <img src="./OurClients/puregold.png" alt="PureGold" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>  

                    <div className='w-full h-[117px] flex justify-center items-center'>
                        <div className='w-full h-[100px]'>
                            <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                                <img src="./OurClients/mercurydrug.png" alt="Mercury Drug" className='w-full h-auto' />
                            </div> 
                        </div>
                    </div>             
                </div>

               <div className='w-[150px] h-[350px] mx-2 screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[175px] flex justify-center items-end mb-3'>
                        <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                            <img src="./OurClients/starbucks.png" alt="StarBucks" className='w-full h-auto' />
                        </div>
                    </div>
                    
                    <div className='w-full h-[175px] flex justify-center items-start mt-3'>
                        <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                            <img src="./OurClients/711.png" alt="711" className='w-full h-auto' />
                        </div>
                    </div>
                </div>

                <div className='w-[150px] h-[350px] mx-2 flex justify-center items-center screen420px:w-[90px] screen420px:h-[300px]'>
                    <div className='w-full h-[100px] bg-white bg-gree-500 shadow-md flex justify-center items-center p-2'>
                        <img src="./OurClients/jollibee.png" alt="Jollibee" className='w-full h-auto' />
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurClients