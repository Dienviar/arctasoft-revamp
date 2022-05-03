import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const OurProducts = () => {

    useEffect(() => {
        gsap.to(".our-products" ,{
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".our-products",
                start: "50% bottom"
            }
        })
    }, [])
    

  return (
    <section className='flex justify-center w-full h-auto mt-48'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 bg-red-500'>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>Our Products</p>
                    <p className='text-lg text-gray-400'>Choose what you need</p>
                </div>
            </article>

            <article className='flex w-full h-auto bg-red-500 opacity-0 our-products'>
                <div className='w-full h-full bg-green-500'>
                    <img src="./testing.jpg" alt=""/>
                </div>
                <div className='w-full h-full bg-yellow-500'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default OurProducts