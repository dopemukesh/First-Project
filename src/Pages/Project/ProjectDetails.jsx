import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../../Components/Common/Container/Container';
import projectData from '../../api/ProjectDetails.json';
import Button from '../../Components/Common/Button/Button';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projectData.projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <Container>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                    <Button onClick={() => navigate('/projects')} variant="primary">
                        Back to Projects
                    </Button>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Button
                        onClick={() => navigate('/projects')}
                        variant="secondary"
                        className="mb-6 sticky top-[72px]"
                    >
                        Back to Projects
                    </Button>

                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                        {project.title}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="cursor-default bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-400 px-3 py-1 rounded-md text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                            Key Features
                        </h2>
                        <ul className="list-disc list-inside space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-300">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        <Button
                            onClick={() => window.open(project.demoLink, '_blank')}
                            variant="primary"

                        >
                            Live Demo
                        </Button>
                        <Button
                            onClick={() => window.open(project.githubLink, '_blank')}
                            variant="secondary"
                            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                        >
                            GitHub
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProjectDetails; 