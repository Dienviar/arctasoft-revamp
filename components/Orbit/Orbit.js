import React from 'react'

const Orbit = () => {
  return (
    <div className='flex items-center justify-center w-auto h-auto'>
        <div id="orbit-bx" className='ml-20 screen1020px:ml-16 screen650px:-mt-10'>
            <div className="orbit-system">
                <div className="orbit-main orbit1 ">
                    <img src='./Orbit/react.png' className='orbit-object' alt="React Icon" />
                </div>

                <div className="orbit-main orbit1 orbit13-main1">
                    <img src='./Orbit/soap.png' className='orbit-object orbit13-object1 rounded-xl' alt="SOAP Icon" />
                </div>

                <div className="orbit-main orbit1 show12 orbit13-main2">
                    <img src='./Orbit/graphql.png' className='orbit-object orbit13-object2' alt="GraphQL" />
                </div>

                {/* <div className="orbit-main orbit1 show13 orbit13-main3">
                    <img src='./Orbit/firebase.png' className='orbit-object orbit13-object3' alt="C# Icon" />
                </div> */}
            </div>

            <div className="orbit-system">
                <div className="orbit-main orbit2 show1">
                    <img src='./Orbit/sqlserver.png' className='orbit-object' alt="SQLServer Icon" />
                </div>

                <div className="orbit-main orbit2 show2 orbit2-main1">
                    <img src='./Orbit/angular.png' className='orbit-object orbit2-object1' alt="Angular Icon" />
                </div>

                <div className="orbit-main orbit2 show3 orbit2-main2">
                    <img src='./Orbit/net_m.png' className='orbit-object orbit2-object2' alt="Microsoft Net Icon" />
                </div>

                <div className="orbit-main orbit2 show4 orbit2-main3">
                    <img src='./Orbit/c_sharp.png' className='orbit-object orbit2-object3' alt="C# Icon" />
                </div>

                <div className="orbit-main orbit2 show5 orbit2-main4">
                    <img src='./Orbit/rest.png' className='orbit-object orbit2-object4' alt="Rest Icon" />
                </div>
            </div>

           <div className="orbit-system">
                <div className="orbit-main orbit3">
                    <img src='./Orbit/net_core.png' className='orbit-object' alt="NET Core Icon" />
                </div>

                <div className="orbit-main orbit3 orbit13-main1">
                    <img src='./Orbit/openapi.png' className='orbit-object orbit13-object1' alt="OPENAPI Icon" />
                </div>

                <div className="orbit-main orbit3 show12 orbit13-main2">
                    <img src='./Orbit/primeng.png' className='orbit-object orbit13-object2' alt="PrimeNG Icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Orbit