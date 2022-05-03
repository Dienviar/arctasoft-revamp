import React, { useEffect } from 'react'
import TestimonialMessage from './TestimonialMessage'

const Testimonial = () => {

    useEffect(() => {
        var myIndex = 0;
        function carousel() {
            var i;
            var x = document.getElementsByClassName("slider");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
            setTimeout(carousel, 4000);
        }
        carousel();
    }, [])
    
    

  return (
    <section className='flex justify-center w-full h-auto mt-52 screen800px:mt-36 screen420px:mt-20'>
        <div className='w-[1100px] h-auto px-5'>
            <article className='flex items-center justify-center w-full h-20 '>
                <div className='w-auto h-auto text-center'>
                    <p className='text-4xl font-bold text-pal_blue'>Testimonials</p>
                    <p className='text-lg text-gray-400'>What our clients say</p>
                </div>
            </article>

            <div className='screen420px:mt-16'>
                <TestimonialMessage name="Maria Cruz Santos" position="Co-Chairman and Co-Founder"/>
                <TestimonialMessage name="Denver Dannel" position="Founder"/>
                <TestimonialMessage name="Maria Clarise" position="Co-Founder"/>
                <TestimonialMessage name="Micah Austria" position="President"/>
            </div>
        </div>
    </section>
  )
}

export default Testimonial