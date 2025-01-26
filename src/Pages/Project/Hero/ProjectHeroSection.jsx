import React from 'react';

const ProjectHeroSection = () => {
  return (
    <div className="relative bg-transparent">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center max-w-screen-lg">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-indigo-600 sm:text-4xl lg:text-5xl">
            Welcome To Our{' '}
            <span className="text-indigo-600">Projects Page</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            This is a brief description of my project. It's amazing and you
            should definitely check it out!
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Get started
            </a>
            <a
              href="#"
              className="px-6 py-2 text-black bg-indigo-100 rounded-md hover:bg-indigo-200"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-md"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="Project"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeroSection;
