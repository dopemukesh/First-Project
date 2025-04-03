/* eslint-disable no-unused-vars */
import React from 'react'
import {Button} from '../../Components/Common/Button/Button'

const Career = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto flex items-center justify-center bg-gray-50 dark:bg-gray-950 h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            This is the Career Page
          </h1>
          <p className="text-yellow-600 dark:text-yellow-500 text-center">
            The page you are looking is under development phase.
          </p>

          <Button to="post-job" variant="secondary">Post Job</Button>
        </div>
      </div>
    </>
  );
}

export default Career