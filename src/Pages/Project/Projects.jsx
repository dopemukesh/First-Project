import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectHeroSection from './Hero/ProjectHeroSection';
import Container from '../../Components/Common/Container/Container';
import Button from '../../Components/Common/Button/Button';
import projectData from '../../api/ProjectDetails.json';

const Projects = () => {
    const navigate = useNavigate();
    const { projects } = projectData;

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

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white dark:bg-gray-800 shadow-xl border dark:border-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 my-2 text-sm">
                                        {project.shortDescription}
                                    </p>

                                    <div className='flex gap-4'>
                                        <Button
                                            onClick={() => window.open(project.demoLink, '_blank')}
                                            variant='primary'
                                        >
                                            Watch Demo
                                        </Button>
                                        <Button
                                            onClick={() => navigate(`/projects/details/${project.id}`)}
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
            </Container>
        </>
    );
};

export default Projects;
