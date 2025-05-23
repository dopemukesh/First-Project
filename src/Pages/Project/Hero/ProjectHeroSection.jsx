import React from 'react';
import Container from '../../../Components/Common/Container/Container';
import { Button, Button01 } from '../../../Components/Common/Button/Button';

const ProjectHeroSection = () => {
  return (
    <div className="">
      <Container>
        <div className='py-24 flex items-center px-4 relative'>
          {/* Text Section */}
          <div className='w-full flex flex-col items-center sm:items-start'>
            <div className="flex flex-col gap-2 my-6 text-5xl font-semibold sm:text-5.5xl md:text-7xl text-center sm:text-start">
              <p>Build projects</p>
              <p>like a team</p>
            </div>
            <p className="max-w-lg text-gray-500 dark:text-gray-400 text-center sm:text-start">
              This is a brief description of my project. It's amazing and you should definitely check it out!
            </p>
            <div className="my-6 flex justify-center items-center sm:justify-start gap-4">
                <Button01 to="/register">Get Started</Button01>
                <Button disabled variant='secondary'>Watch Demo</Button>
            </div>
          </div>

          {/* Image Section */}
          <div className='absolute right-0 -z-10 top-14'>
            <img
              className="h-[456px] object-cover rounded-md opacity-30 md:opacity-100"
              src="./rocketImage.png"
              alt="Project" />
          </div>
          <span className='bg-teal-400 h-[556px] lg:h-[956px] w-10 blur-[126px] md:-rotate-[30deg] -rotate-[20deg] absolute left-[50%] z-[999] -top-12'></span>
        </div>
      </Container>
    </div>
  );
};

export default ProjectHeroSection;
