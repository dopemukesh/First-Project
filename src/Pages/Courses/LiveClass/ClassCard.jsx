import React from 'react'
import { Button } from '../../../Components/Common/Button/Button'

const ClassCard = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950  w-full sticky top-20 p-4 rounded-2xl'>
                <div className='h-52 overflow-hidden flex justify-center items-center bg-gray-500/20 relative rounded-xl'>
                <img src="./shape01.svg" alt="" />
                </div>
                <div>
                    {/* class title */}
                    <h1 className='text-xl font-semibold py-4'>
                        Take entry in Live Classes
                    </h1>

                    {/* class price */}
                    <div className='flex items-center justify-between py-4'>
                        <h1 className='text-3xl font-semibold'>Rs. 2499/-</h1>
                        <p className='discount px-4 py-1.5 bg-teal-800 text-white'>
                            50%
                        </p>
                    </div>

                    <div className=''>
                        <Button className='w-full'>
                            Enroll Now
                        </Button>
                    </div>

                    {/* points to be covered in class */}
                    <ul className='py-4'>
                        <li className='flex items-center gap-2'>
                            <img
                                src="./shape01.svg" alt="points-image"
                                className='h-4' />
                            Daily live classes on Google Meet
                        </li>
                        <li className='flex items-center gap-2'>
                            <img
                                src="./shape01.svg" alt="points-image"
                                className='h-4' />
                            Instant doubt support via WhatsApp
                        </li>
                    </ul>
                    {/* <p className='text-gray-500 max-w-2xl mt-6'>
                        Engage in real-time learning, interact with top mentors, and master
                        in-demand skills through immersive live sessions.
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default ClassCard