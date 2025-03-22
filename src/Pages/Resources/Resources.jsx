// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import Container from '../../Components/Common/Container/Container'
import projectData from '../../api/ProjectDetails.json';
import {Button} from '../../Components/Common/Button/Button'
import { Navigate } from 'react-router-dom'

const Resources = () => {

    const { projects } = projectData;

    return (
        <>
            <div className='max-w-6xl mx-auto flex items-center justify-center bg-gray-50 dark:bg-gray-950 h-screen'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-center text-gray-800 dark:text-white'>This is the Resource Page</h1>
                    <p className='text-gray-800 dark:text-white'>Here you can add your resources</p>
                </div>
            </div>

            {/* <Container >
                <div className='p-14'>
                    <h1 className='text-xl font-semibold'>Try things out</h1>
                </div>

                {/* yt resources
                <div className="p-14">
                    <div>Youtube video</div>
                    <div className="p-4 flex flex-wrap gap-4 justify-center">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white/5 backdrop-blur-md p-5 h-fit shadow-xl border border-gray-300/50 dark:border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xs" >
                                <div className=''>
                                    <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className='bg-blue-600 overflow-hidden h-44 my-2 rounded-2xl'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className='mt-4 flex flex-col justify-between h-40'>
                                    <p className="text-gray-500 dark:text-gray-400 my-2">
                                        {project.description.split(' ').slice(0, 12).join(' ') + '...'}
                                    </p>

                                    <div className='flex items-center justify-between'>
                                        {/* User profile details of project owner. 
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <div className='flex items-center gap-2 bg-gray-300 dark:bg-gray-00 h-10 w-10 overflow-hidden rounded-full'>
                                                <img
                                                    src={project.userImage}
                                                    alt={project.userName}
                                                    className="w-12 h-12 scale-105" />
                                            </div>
                                            <div>
                                                <p className='font-medium text-sm text-gray-800 dark:text-gray-400'>{project.userName || 'Unknown'}</p>
                                                <p className='text-xs  text-gray-500'>{project.userRole || 'Not Specified'}</p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={() => Navigate(`/projects/details/${project.id}`)}
                                            variant='secondary'
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container> */}
        </>
    )
}

export default Resources