import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import ProjectHeroSection from './Hero/ProjectHeroSection';
import Container from '../../Components/Common/Container/Container';
import Button from '../../Components/Common/Button/Button';
import { IoMdArrowRoundForward } from 'react-icons/io';

const Projects = () => {
    const navigate = useNavigate();

    const ProjectsList = [
        {
            title: "Project No.1",
            description:
                "Project Description",
            image: "https://img.icons8.com/color/144/000000/programming.png",
            link: "/project-details", // Updated the link to navigate to the details page
        },
        {
            title: "Project No.2",
            description:
                "Project Description",
            image: "https://img.icons8.com/color/144/000000/programming.png",
            link: "/project-details",
        },
        {
            title: "Project No.3",
            description:
                "Project Description",
            image: "https://img.icons8.com/color/144/000000/programming.png",
            link: "/project-details",
        },
        // Add more projects as needed
    ];

    return (
        <>

            <ProjectHeroSection />
            <Container>
                <div className="px-4 pb-6">
                    <div className='mb-10 space-y-2'>
                        <p className='text-sm text-purple-500 font-semibold'>Featured</p>
                        <h2 className="text-2xl font-semibold">Our Projects</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Here are some of the projects that we have worked on.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {ProjectsList.map((item, index) => (
                            <div
                                key={index}
                                className="max-w-sm bg-white dark:bg-gray-800 shadow-xl border dark:border-gray-700 rounded-3xl overflow-hidden"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 m-2 text-sm">{item.description}</p>

                                    <div className='flex gap-4'>
                                        <Button onClick={() => navigate(item.link)} variant='secondary'>
                                            <p>Read More</p>
                                        </Button>

                                        <Button onClick={() => navigate(item.link)} variant='primary'>
                                            <p>Watch Demo</p>
                                            {/* <IoMdArrowRoundForward /> */}
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Projects;
