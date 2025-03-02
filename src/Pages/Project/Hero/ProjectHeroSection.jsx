import React from 'react';
import Container from '../../../Components/Common/Container/Container';
import Button from '../../../Components/Common/Button/Button';
import { NavLink } from 'react-router-dom';

const ProjectHeroSection = () => {
  return (
    <div className="relative">
      <Container>
        <div className='w-full py-24 flex items-center px-4 relative'>
          {/* Text Section */}
          <div className='w-full flex flex-col items-center sm:items-start'>
            <p className="my-6 text-5xl font-semibold sm:text-5.5xl md:text-6xl text-center sm:text-start">
              Welcome To <br /> Our Projects Page
            </p>
            <p className="max-w-lg text-gray-500 text-center sm:text-start">
              This is a brief description of my project. It's amazing and you should definitely check it out!
            </p>
            <div className="my-6 flex justify-center sm:justify-start gap-4">
              <NavLink to="">
                <Button>Get Started</Button>
              </NavLink>

              <NavLink to="">
                <Button variant='secondary'>Watch Demo</Button>
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className='absolute right-0 top-14'>
            <img
              className="h-[456px] object-cover rounded-md animate-pulse"
              src="./react.png"
              alt="Project"
            />
            {/* <img
              className="w-full h-auto object-cover rounded-md"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Project"
            /> */}
            <div className='bg-sky-500 h-[956px] w-10 blur-[96px] -rotate-45 absolute z-[999] bottom-0'>v</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectHeroSection;
