// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from '../Common/Button/Button'
import { IoMdArrowRoundBack } from "react-icons/io";

const Error404 = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto text-gray-800 dark:text-white min-h-svh max-w-6xl">
        <div className="flex gap-6 flex-col items-center justify-center p-4 rounded-2xl text-center">
          <h1 className="font-bold text-red-500 text-7xl w-full rounded-2xl flex items-center justify-center">
            404
          </h1>
          <p className='max-w-80'>
            Oops! The page you're looking for doesn't exist or{" "}
            <strong className='text-red-500'>Not Found !</strong>{" "}
          </p>
          <NavLink to={-1}>
            <Button variant="secondary">
              {/* <IoMdArrowRoundBack /> */}
              <p>Go Back</p>
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Error404