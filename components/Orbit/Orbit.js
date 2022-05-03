import React from 'react'

const Orbit = () => {
  return (
    <div className='flex items-center justify-center w-auto h-auto bg-red-500'>
        <div id="orbit-bx">
            <div class="orbit-system">
                <div class="orbit-main orbit1 ">
                    <img src='./favicon.PNG' className='orbit-object' alt="x" />
                </div>

                <div class="orbit-main orbit1 orbit13-main1">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object1' alt="x" />
                </div>

                <div class="orbit-main orbit1 show12 orbit13-main2">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object2' alt="x" />
                </div>

                <div class="orbit-main orbit1 show13 orbit13-main3">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object3' alt="x" />
                </div>
            </div>

            <div class="orbit-system">
                <div class="orbit-main orbit2 show1">
                    <img src='./favicon.PNG' className='orbit-object' alt="x" />
                </div>

                <div class="orbit-main orbit2 show2 orbit2-main1">
                    <img src='./favicon.PNG' className='orbit-object orbit2-object1' alt="x" />
                </div>

                <div class="orbit-main orbit2 show3 orbit2-main2">
                    <img src='./favicon.PNG' className='orbit-object orbit2-object2' alt="x" />
                </div>

                <div class="orbit-main orbit2 show4 orbit2-main3">
                    <img src='./favicon.PNG' className='orbit-object orbit2-object3' alt="x" />
                </div>

                <div class="orbit-main orbit2 show5 orbit2-main4">
                    <img src='./favicon.PNG' className='orbit-object orbit2-object4' alt="x" />
                </div>
            </div>

           <div class="orbit-system">
                <div class="orbit-main orbit3">
                    <img src='./favicon.PNG' className='orbit-object' alt="x" />
                </div>

                <div class="orbit-main orbit3 orbit13-main1">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object1' alt="x" />
                </div>

                <div class="orbit-main orbit3 show12 orbit13-main2">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object2' alt="x" />
                </div>

                <div class="orbit-main orbit3 show13 orbit13-main3">
                    <img src='./favicon.PNG' className='orbit-object orbit13-object3' alt="x" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orbit