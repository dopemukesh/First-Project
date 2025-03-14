import React from 'react';
import Container from '../../../Components/Common/Container/Container';
import Button from '../../../Components/Common/Button/Button';
import { NavLink } from 'react-router-dom';

const ProjectHeroSection = () => {
  return (
    <div className="">
      <Container>
        <div className='w-full py-24 flex items-center px-4 relative'>
          {/* Text Section */}
          <div className='w-full flex flex-col items-center sm:items-start'>
            <div className="flex flex-col gap-2 my-6 text-5xl font-medium sm:text-5.5xl md:text-7xl text-center sm:text-start">
              <p>Build projects </p>
              <p>like a team</p>
            </div>
            <p className="max-w-lg text-gray-500 dark:text-gray-400 text-center sm:text-start">
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
            <div className='bg-sky-500 h-[956px] w-10 blur-[96px] -rotate-[30deg] absolute z-[999] bottom-0'></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectHeroSection;
