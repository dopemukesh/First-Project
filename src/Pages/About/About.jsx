import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import ShauryaImg from '../../../public/images/Shaurya img.png';
import { Branch1, Branch2, Branch3 } from './Branch/Branches';
import Container from '../../Components/Common/Container/Container';

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Container className="bg-gradient-to-t from-gray-200 dark:from-gray-900 to-transparent px-4 pt-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:place-items-center">
          {/* Left */}
          <div className="">
            <div className='space-y-4'>
              <h1 className="text-4xl font-light">
                I’m <br />
                <span className="text-teal-600 dark:text-teal-500 font-bold text-5xl">Shaurya</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                A founder who believes skills matter more than degrees. Through{" "}
                <span className="font-semibold text-gray-800 dark:text-white">"CodeWithTechries"</span>,
                I guide and mentor aspiring developers and students to grow by building and doing.
              </p>
              <p className="pt-4">
                <span className="text-gray-800 dark:text-white italic font-semibold">
                  “If you can manifest it, you can achieve it.”
                </span><br />
                <span className="text-gray-400">– Mr. Shaurya</span>
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="grid place-content-center">
            <div className="w-[356px] h-[356px] flex items-center justify-center rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <img
                src={ShauryaImg}
                alt="Shaurya"
              />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <p className="font-semibold">Services</p>
            <p className="text-gray-500 dark:text-gray-400">
              Let’s build the future of tech learning with real-world projects, open-source contributions, and industry-led growth.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" target='_blank' className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full"><FaFacebookF /></a>
              <a href="#" target='_blank' className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full"><FaYoutube /></a>
              <a href="#" target='_blank' className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full"><FaLinkedinIn /></a>
              <a href="#" target='_blank' className="bg-gray-300 dark:bg-gray-800 p-2 rounded-full"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-gray-50 -mb-12 dark:bg-gray-800 shadow-2xl mt-12 rounded-2xl p-4 md:flex items-center gap-4">
          <div className="space-y-2">
            <h2 className="font-semibold">Vision</h2>
            <p className="text-gray-600 dark:text-gray-400">
              To build a global ecosystem where skills define success, empowering learners to grow through real-world experience and community collaboration.
            </p>
          </div>

          <div className="hidden md:flex bg-gray-500 h-16 w-[1px]" />

          <div className="space-y-2 mt-8 md:mt-0">
            <h2 className="font-semibold">Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              To turn students and developers into industry-ready professionals through hands-on projects, open-source work, and direct access to mentors and recruiters.
            </p>
          </div>
        </div>
      </Container>

      {/* newM - Team Tree Section */}
      <section className='py-14'>
        <Branch1 />
        <Branch2 />
        <Branch3 />
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-16 lg:px-12 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div id='timeline' className="absolute md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-800">
              <div className='absolute top-9 md:top-2 -left-[11px] bg-teal-500/30 backdrop-blur-md w-6 h-6 rounded-full flex justify-center items-center'>
                <div className='bg-teal-600 w-2.5 h-2.5  rounded-full'></div>
              </div>
            </div>


            <div className="space-y-16">
              <TimelineItem
                year="2018"
                tagline={'Started with a question'}
                title="Main koi task karch kyuki kar sake hoon?"
                description="It started as a simple idea to help local businesses establish their online presence."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2021"
                tagline={'A Dream Turns Into a Vision'}
                title="What if we built better?"
                description="We expanded our services and built a team of talented developers and designers."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2022"
                title="The Team That Turned Build Into Art"
                description="Our team grew to 10+ professionals, each bringing unique expertise to every project."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2022"
                title="To paisa kush builds ni mange"
                description="We introduced new technologies and methodologies to deliver even better results."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2023"
                title="This was how far App vision."
                description="Today we continue to push boundaries and create innovative solutions for our clients."
                image={ShauryaImg}
                side="left"
              />

              <TimelineItem
                year="2024"
                title="This is just the beginning"
                description="Looking forward to what we can build together in the future."
                image={ShauryaImg}
                side="right"
              />

              <TimelineItem
                year="2021"
                title="You already belong here"
                description="Join our journey and be part of something amazing."
                image={ShauryaImg}
                side="left"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, image, side, tagline }) {
  return (
    <div
      className={`flex flex-col md:flex-row md:gap-8 ${side === "right" ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline marker */}
      <div className="relative md:hidden">
        <div className="-ms-3.5 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit bg-gray-100 dark:bg-gray-950">{year}</div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-md">
        {/* border border-dashed border-gray-400 dark:border-gray-500 */}
        <div className="rounded-xl p-4">
          <div className={`mt-6 space-y-2 ${side === 'right' ? '' : 'md:text-right'}`}>
            {tagline && <i className="text-gray-500 dark:text-gray-400">{tagline}</i>}
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline marker */}
      <div className="relative hidden md:flex">
        <div className="-mt-56 -ms-1 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit h-fit bg-white dark:bg-gray-950">{year}</div>
      </div>

      {/* Image */}
      <div className="flex-1 max-w-md px-4">
        <div className="h-52 rounded-lg overflow-hidden bg-gray-200">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;