import React from 'react';
import Footer from '../Footer/Footer';

const ProjectDetails = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto bg-transparent shadow-lg rounded-lg overflow-hidden">
        {/* First Image with Larger Height */}
        <img
          src="https://img.icons8.com/color/144/000000/source-code.png" // Use a higher resolution image
          alt="Project Image"
          className="w-full h-[400px] object-contain" // Adjust the height and use object-contain
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">Project Title</h1>

          <p className="text-gray-600 mb-8 text-lg">
            This is a detailed description of the project. It explains the goals, challenges, and outcomes of the project.
            The description provides context and highlights key aspects of the work done. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">Jane Smith</h3>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">Mike Johnson</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProjectDetails;
