import React from 'react'
import BranchLeft from "../../../../public/images/BRANCH!.png";
import Member from "../../../../public/images/Shaurya img.png";

const Branch1 = () => {
    return (
        <>
            <section>
                <div className='flex justify-start relative pb-96'>
                    <img src={BranchLeft} className='z-10' />
                    <div className='flex justify-around w-[1525px] absolute top-0'>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-teal-600 inline-block mt-52 z-0'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-teal-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-teal-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-64 w-1.5 border border-t-0 border-teal-600 inline-block mt-6 z-10'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-teal-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-teal-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-teal-600 inline-block mt-44'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-teal-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-teal-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Branch1;
