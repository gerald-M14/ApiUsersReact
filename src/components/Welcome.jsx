import React from 'react'
import { Link } from 'react-router-dom';



export const Welcome = () => {
    return (
    
        <div className="min-h-screen flex flex-col justify-center items-center sm:flex-row">

            {/* fondo */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>

            <div className="container flex flex-col justify-center items-center w-full px-4 sm:px-0">
            <div className="text-center">
          <h1 className="text-3xl sm:text-7xl font-medium">Hello, welcome to the user and publication portal.</h1>
        </div>
            <div className='mt-5 sm:w-1/2'>
                <p className="text-lg sm:text-2xl text-gray-600">On this page you can find users and see the posts they have made.</p>
            </div>
            <Link to="/Users" className="mt-10 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:me-2 sm:mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                View users
            </Link>
            </div>
        </div>


    )
}
