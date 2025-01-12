import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <div className='text-gray-800 dark:text-white h-screen w-screen grid place-content-center text-center'>
        <h1 className='font-bold text-4xl'>404</h1>
        <p>Page not found</p>
        <NavLink to="/" className="text-white p-2 mt-4 bg-blue-500 dark:bg-blue-400 rounded-md">
          Go to Home
        </NavLink>
      </div>
    </>
  )
}

export default Error404