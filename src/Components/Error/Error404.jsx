// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Common/Button/Button'
import { IoMdArrowRoundBack } from "react-icons/io";

const Error404 = () => {
  return (
    <>
      <div className='flex justify-center items-center mx-auto text-gray-800 dark:text-white h-screen max-w-6xl'>
        <div className='flex flex-col items-center justify-center'>

          <h1 className='font-bold text-4xl'>404</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>
          <NavLink to={-1} className="mt-4">
            <Button variant='danger'>
              <IoMdArrowRoundBack />
              <p>Return</p>
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Error404