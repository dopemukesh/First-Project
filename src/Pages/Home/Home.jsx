// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import Container from '../../Components/Common/Container/Container'
import Button from '../../Components/Common/Button/Button'
import { BsInstagram } from 'react-icons/bs'
import socialData from '../../api/SocialData.json'
import projects from '../../api/ProjectShowCase.json'

const Home = () => {
    const colorDif = ["emerald-500", "cyan-500", "lime-400", "yellow-500"];
    return (
        <>
            <Container className='h-[456px] md:h-[556px] items-center'>
                <div className='flex flex-col items-center'>
                    <div className='group cursor-default font-medium flex items-center gap-4 bg-gray-200 dark:bg-gray-800 py-2 px-4 rounded-full border border-gray-300  dark:border-gray-700'>
                        <div className='grid place-content-center'>
                            <img src="shape01.svg" alt="" className='h-5 group-hover:animate-spin' />
                        </div>
                        <p>Learners to Leaders</p>
                    </div>
                    <div className='flex flex-col my-8 space-y-6 items-center'>
                        <h1 className='text-4xl lg:text-6xl font-bold md:font-semibold text-center max-w-2xl leading-tight'>Transform Your Tech Career with "CWT"</h1>
                        <p className='text-gray-500 dark:text-gray-400 text-center'>Master in-demand skills, contribute to real projects, and connect with top techies, all in one community-driven platform</p>
                    </div>
                    <div>
                        <Button rounded='full'>Get Started for Free</Button>
                    </div>
                </div>
            </Container>

            <Container className='relative'>
                <img src="bg-gradient.png" alt="" className='absolute -z-10 left-0 w-full h-full blur-[86px] md:blur-[156px]' />
                <div className='z-10 flex flex-col items-center overflow-hidden rounded-2xl p-2 mb-14 bg-white/5'>
                    <div className='rounded-xl overflow-hidden border-8 border-white/10'>
                        <img src="./images/vsCode-project.png" alt="" className='blur-[2px]' />
                    </div>
                </div>
            </Container>

            <Container className='bg-gray-300/30 dark:bg-gray-950/30 py-14'>
                <div className='flex flex-col items-center text-center'>
                    <p className='text-sm text-gray-500 dark:textgray-400 font-semibold'>COMMUNITY</p>
                    <p className='my-4 text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl'>Our Community Empowers Innovators to <span className='text-emerald-500'>Connect, Learn, and Grow Together</span></p>
                    <p className='mb-8 text-lg text-gray-500 dark:text-gray-400'>Trusted and loved by over <span className='dark:text-white text-gray-800 font-medium'>22,000+ peoples on instagram</span></p>
                </div>

                <div className='flex flex-col md:flex-row  gap-4 justify-center items-center'>
                    {socialData.map((data, index) => (
                        <div key={index} className='cursor-default bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:scale-125 hover:shadow-emerald-500/50 hover:shadow-2xl transition-all duration-700 ease-in-out p-6 rounded-2xl w-72 flex flex-col gap-4'>
                            <h2 className='text-emerald-400 text-4xl'>{data.socialNumbers}</h2>
                            <h3 className='text-xl font-semibold'>{data.socialMedia}</h3>
                            <p className='text-sm text-gray-400'>{data.socialDescription}</p>
                        </div>
                    ))}
                </div>
            </Container>

            <Container className='py-24 px-4 z-10 relative overflow-hidden'>
                <div className='bg-gradient-to-r from-white to-transparent absolute rotate-12 md:-rotate-45 h-14 w-[2000px] top-0 -z-10 blur-[156px]'></div>
                <div className='flex flex-col items-center text-center py-8'>
                    <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>FEATURED PROJECTS</p>
                    <p className='my-4 text-4xl text-gray-900 dark:text-white font-semibold max-w-3xl'>Explore Our Latest <span className='text-emerald-500'>Projects</span></p>
                    <p className='mb-8 text-lg text-gray-500 dark:text-gray-400'>Check out some of our best work created by our talented community members</p>
                </div>

                <div className='grid gap-14 px-4 pb-14'>
                    {projects.map((item,index) => (
                        <div key={item.id} className="grid md:grid-cols-2 cursor-pointer">
                            <div className={`bg-gradient-to-tl from-transparent via-transparent to-emerald-500/30 border border-gray-300 dark:border-gray-800 pt-14 ps-14 w-fit rounded-3xl h-96 overflow-hidden`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-96 w-[456px] rounded-tl-2xl object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className='pt-14'>
                                <span className={`inline-block text-${colorDif[index % colorDif.length]} font-semibold`}>Project {item.id}</span>
                                <h3 className='text-2xl font-semibold mb-4'>{item.title}</h3>
                                <h3 className='mb-8 text-lg text-gray-500'>{item.description}</h3>
                            </div>

                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
}

export default Home