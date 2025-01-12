// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Common Components/Button'
import { IoMdArrowRoundBack } from "react-icons/io";

const Error404 = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto text-gray-800 dark:text-white h-screen max-w-6xl'>
        <div className='flex flex-col items-center justify-center'>

          <h1 className='font-bold text-4xl'>404</h1>
          <p>Page not found</p>
          <NavLink to="/" className="mt-4">
            <Button variant='danger'>
              <IoMdArrowRoundBack />
              <p>Go to Home</p>
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Error404