import React, { useEffect, useState } from 'react'
import BranchLeft from "../../../../public/images/BRANCH!.png";
import BranchRight from "../../../../public/images/branch2.png";
import Member from "../../../../public/images/Shaurya img.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Branch1 = () => {

    useEffect(() => {
        gsap.to('#memberTree1', {
            xPercent: -70,
            ease: 'none',
            duration: 10,
            scrollTrigger: {
                trigger: '#memberTree1',
                // pin: true,
                start: 'top 15%',
                end: 'bottom 70%',
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <>
            <section>
                <div id='memberTree1' className='flex  justify-start w-[1525px] h-[586px] overflow-hidden'>
                    <img src={BranchLeft} className='z-10 -ms-2 h-fit' />
                    <div className='flex justify-around w-[1525px] absolute top-0'>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-52 z-0'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-64 w-1.5 border border-t-0 border-emerald-600 inline-block mt-6 z-10'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-44'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
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

export const Branch2 = () => {

    useEffect(() => {
        gsap.to('#memberTree2', {
            xPercent: 70,
            ease: 'none',
            duration: 10,
            scrollTrigger: {
                trigger: '#memberTree2',
                // pin: true,
                start: 'top 15%',
                end: 'bottom 70%',
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <>
            <section>
                <div id='memberTree2' className='flex justify-end w-[1525px] h-[586px] overflow-hidden'>
                    <img src={BranchRight} className='z-10 -me-14 h-fit' />
                    <div className='flex justify-around w-[1525px] absolute top-0'>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-40 z-0'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-64 w-1.5 border border-t-0 border-emerald-600 inline-block mt-[90px] z-10'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-44'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
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

export const Branch3 = () => {

    useEffect(() => {
        gsap.to('#memberTree3', {
            xPercent: -70,
            ease: 'none',
            duration: 10,
            scrollTrigger: {
                trigger: '#memberTree3',
                // pin: true,
                start: 'top 15%',
                end: 'bottom 70%',
                scrub: 1,
                // markers: true,
            },
        });
    }, []);

    return (
        <>
            <section>
                <div id='memberTree3' className='flex  justify-start w-[1525px] h-[586px] overflow-hidden'>
                    <img src={BranchLeft} className='z-10 -ms-2 h-fit' />
                    <div className='flex justify-around w-[1525px] absolute top-0'>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-52 z-0'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-64 w-1.5 border border-t-0 border-emerald-600 inline-block mt-6 z-10'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
                                    <h2 className='text-sm font-bold'>Mukesh Yadav</h2>
                                    <p className='text-sm'>Frontend Dev</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <i className='h-44 w-1.5 border border-t-0 border-emerald-600 inline-block mt-44'></i>
                            <div className='relative backdrop-blur-md overflow-hidden bg-white/10 z-10 -mt-4 w-40 h-52 rounded-2xl border-2 border-emerald-600'>
                                <img src={Member} alt="image" className='-mt-8' />
                                <div className='bg-gradient-to-t from-emerald-600 to-transparent backdrop-blur-[20px] text-center w-full p-4 bottom-0 absolute'>
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
