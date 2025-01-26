import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProjectHeroSection from './Hero/ProjectHeroSection';

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
            <section className="bg-black-50 py-10 px-5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-yellow-500">PROJECTS</h2>
                    <p className="text-center text-purple-900 mb-8">
                        Here are some of the projects that we have worked on.
                    </p>
                    <div className="flex flex-wrap justify-center gap-14">
                        {ProjectsList.map((item, index) => (
                            <div
                                key={index}
                                className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                                    <a
                                        href={item.link}
                                        className="inline-block mt-4 px-6 py-2 text-yellow-500 bg-transparent rounded-3xl transition"
                                    >
                                        Ongoing
                                    </a>
                                    <button
                                        onClick={() => navigate(item.link)} // Navigate to the project details page
                                        className="inline-block mt-4 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
