import React from 'react'

const Orbit = () => {
  return (
    <div className='flex items-center justify-center w-auto h-auto'>
        <div id="orbit-bx" className='ml-20 screen1020px:ml-16 screen650px:-mt-10'>
            <div className="orbit-system">
                <div className="orbit-main orbit1 ">
                    <img src='./Orbit/tailwindcss.png' className='orbit-object' alt="Tailwind CSS Icon" />
                </div>

                <div className="orbit-main orbit1 orbit13-main1">
                    <img src='./Orbit/php.png' className='orbit-object orbit13-object1' alt="PHP Icon" />
                </div>

                <div className="orbit-main orbit1 show12 orbit13-main2">
                    <img src='./Orbit/c_sharp.png' className='orbit-object orbit13-object2' alt="C# Icon" />
                </div>

                <div className="orbit-main orbit1 show13 orbit13-main3">
                    <img src='./Orbit/java.png' className='orbit-object orbit13-object3' alt="Java Icon" />
                </div>
            </div>

            <div className="orbit-system">
                <div className="orbit-main orbit2 show1">
                    <img src='./Orbit/mongodb.png' className='orbit-object' alt="MongoDB Icon" />
                </div>

                <div className="orbit-main orbit2 show2 orbit2-main1">
                    <img src='./Orbit/firebase.png' className='orbit-object orbit2-object1' alt="Firebase Icon" />
                </div>

                <div className="orbit-main orbit2 show3 orbit2-main2">
                    <img src='./Orbit/mysql.png' className='orbit-object orbit2-object2' alt="MySQL Icon" />
                </div>

                <div className="orbit-main orbit2 show4 orbit2-main3">
                    <img src='./Orbit/postgresql.png' className='orbit-object orbit2-object3' alt="PostGreSQL Icon" />
                </div>

                <div className="orbit-main orbit2 show5 orbit2-main4">
                    <img src='./Orbit/python.png' className='orbit-object orbit2-object4' alt="Python Icon" />
                </div>
            </div>

           <div className="orbit-system">
                <div className="orbit-main orbit3">
                    <img src='./Orbit/vue.png' className='orbit-object' alt="Vue Icon" />
                </div>

                <div className="orbit-main orbit3 orbit13-main1">
                    <img src='./Orbit/react.png' className='orbit-object orbit13-object1' alt="React Icon" />
                </div>

                <div class="orbit-main orbit3 show12 orbit13-main2">
                    <img src='./Orbit/angular.png' className='orbit-object orbit13-object2' alt="Angular Icon" />
                </div>

                <div className="orbit-main orbit3 show13 orbit13-main3">
                    <img src='./Orbit/laravel.png' className='orbit-object orbit13-object3' alt="Laravel Icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orbit