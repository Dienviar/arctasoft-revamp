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
                <TestimonialMessage name="Maria Cruz Santos" position="General Manager" company={"Sports Equipment Company, UK"} message={"I am really impressed by the quality of services I received from Arctasoft. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Arctasoft and I will definitely use your services again."} />
                <TestimonialMessage name="Collin Roman" position="Spokesperson" company={"Leading System Integrator, EMEA Region"} message={"We thank Arctasoft for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future."}/>
                <TestimonialMessage name="Christopher Rasmussen" position="Spokesperson" company={"itrueque.com"} message={"We are very happy with Arctasoft; very serious and consistent in their work. Joseph and his team of programmers have always been there for us all the time. This is a company I can recommend to anyone to perform any work."}/>
                <TestimonialMessage name="Jakobe Mata" position="Directorr" company={"International new-media agency headquartered in Scotland"} message={"Under tight deadlines and with high expectations, Arctasoft was a pleasure to partner with, on a high profile political campaign website. Professional, conscientious and thoroughly competent - I wouldn't hesitate in recommending them to other agencies."}/>
            </div>
        </div>
    </section>
  )
}

export default Testimonial