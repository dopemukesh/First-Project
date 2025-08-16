/* eslint-disable react/prop-types */
// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import Container from '../../Components/Common/Container/Container';
import TeamMember from './Member/TeamMember';
import Timeline from './TimeLine';

const About = () => {

  const teamMembers = [
    {
      name: "Mukesh Yadav",
      position: "Frontend Developer",
      instagram: "https://www.instagram.com/curiousdevx",
      description:
        "Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript, creating fast, responsive, and modern web applications.",
      image: "./images/members/mukeshYadav.webp",
    },
    {
      name: "Shaurya",
      position: "Founder & CEO",
      instagram: "https://www.instagram.com/codewithtechries",
      description:
        "Leading CodeWithTechries with a vision to make tech education accessible, focusing on innovation and community growth.",
      image: "./images/shauryaImage.webp",
    },
    {
      name: "Ananya Bisen",
      position: "Frontend Developer",
      instagram: "https://www.instagram.com/ananyabisen",
      description:
        "Specializes in crafting intuitive UI/UX designs using React.js, Next.js, and modern CSS frameworks to deliver pixel-perfect web experiences.",
      image: "./images/members/ananyabisen.jpg",
    },
    {
      name: "Uday Thanki",
      position: "Frontend Developer",
      instagram: "https://www.instagram.com/udaythankii",
      linkedIn: "https://www.linkedin.com/in/uday-thanki-b1491a272",
      description:
        "Creative frontend engineer with expertise in React.js, Framer Motion, and Tailwind CSS, passionate about animations and interactive design.",
      image: "./images/members/thankiuday.jpg",
    },
    {
      name: "Aryan Bhutani",
      position: "Backend Developer",
      instagram: "https://www.instagram.com/aryanbhutani",
      description:
        "Backend engineer skilled in Node.js, Express, and MongoDB, focused on building scalable APIs and secure server-side architectures.",
      image: "./images/members/aryanBhutani.webp",
    },
    {
      name: "Gautam Agarwal",
      position: "Backend Developer",
      instagram: "https://www.instagram.com/gautamagarwal",
      description:
        "Passionate about server-side programming, database optimization, and developing high-performance backend systems using Node.js and PostgreSQL.",
      image: "./images/members/gautamAgarwal.jpg",
    },
  ];



  return (
    <>
      {/* intro to the founder */}
      <Container>
        <div className='flex flex-col-reverse md:flex-row gap-14 py-14 px-4'>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <p className='text-sm text-teal-600 dark:text-teal-500 capitalize'>
                Meet the Man
              </p>
              <h1 className='font-bold text-5xl lg:text-6xl'>
                Shaurya, <br /> the Founder of CWT
              </h1>
            </div>

            <div className='space-y-8'>
              <div>
                <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-400">
                  A founder who believes skills matter more than degrees. Through
                  <span className="font-semibold text-gray-800 dark:text-white"> "CodeWithTechries"</span>,
                  I guide and mentor aspiring developers and students to grow by building and doing.
                </p>
              </div>

              <div className='flex flex-col gap-3 border-s-2 border-teal-600 px-4'>
                <p>
                  <span className='text-xl text-teal-600 dark:text-teal-500'>"</span>
                  If you can manifest it, you can achieve it.
                  <span className='text-xl text-teal-600 dark:text-teal-500'>"</span>
                </p>
                <div className='flex items-center gap-2'>
                  <img src={"./images/shauryaImage.webp"}
                    alt="profile-pic"
                    className='h-6 w-6 object-cover rounded-full bg-gray-200 dark:bg-gray-700' />
                  <p className="text-sm">– Mr. Shaurya, <span className="text-gray-400">Founder & CEO</span></p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <div>
              <img src={"./images/shauryaImage.webp"} alt="" className='h-96' />
              {/* <img src="./images/Shaurya img.png" alt="" className='h-96' /> */}
            </div>
          </div>
        </div>
      </Container>

      {/* our teams */}
      <Container >
        <div className='flex flex-col gap-14 py-20 px-4 items-center'>
          <div className='flex flex-col gap-4 items-center text-center'>
            <p className='text-sm text-teal-600 dark:text-teal-500 capitalize'>
              Our top leaders
            </p>
            <h2 className='max-w-md font-bold text-4xl'>
              <span className='font-light'>Meet with,</span> the teams behind CWT
            </h2>
          </div>

          {/* team members details */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {/* first grid */}
            <div className='space-y-6'>
              <TeamMember
                name={teamMembers[0].name}
                position={teamMembers[0].position}
                description={teamMembers[0].description}
                image={teamMembers[0].image}
                instagram={teamMembers[0].instagram}
              />
              <TeamMember
                name={teamMembers[5].name}
                position={teamMembers[5].position}
                description={teamMembers[5].description}
                profilePic={teamMembers[5].image}
                instagram={teamMembers[5].instagram}
              />
            </div>

            {/* second grid */}
            <div className='space-y-6'>
              <TeamMember
                name={teamMembers[3].name}
                position={teamMembers[3].position}
                description={teamMembers[3].description}
                profilePic={teamMembers[3].image}
                instagram={teamMembers[3].instagram}
                linkedIn={teamMembers[3].linkedIn}
              />
              <TeamMember
                name={teamMembers[1].name}
                position={teamMembers[1].position}
                description={teamMembers[1].description}
                image={teamMembers[1].image}
                instagram={teamMembers[1].instagram}
              />
            </div>

            {/* third grid */}
            <div className='space-y-6'>
              <TeamMember
                name={teamMembers[4].name}
                position={teamMembers[4].position}
                description={teamMembers[4].description}
                image={teamMembers[4].image}
                instagram={teamMembers[4].instagram}
              />
              <TeamMember
                name={teamMembers[2].name}
                position={teamMembers[2].position}
                description={teamMembers[2].description}
                profilePic={teamMembers[2].image}
                instagram={teamMembers[2].instagram}
              />
            </div>
          </div>

        </div>
      </Container>

      {/* who we are */}
      <Container className='bg-slate-200/50 dark:bg-gray-500/10'>
        <div className='py-20 px-4 flex flex-col gap-4 items-center text-center'>
          <h2 className="max-w-xl text-4xl text-gray-900 dark:text-white font-bold">
            Who we
            <span className='font-light'> are</span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            We are a team of passionate individuals committed to transforming the tech education landscape.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-4 w-full'>
            {/* grid1 */}
            <div className='space-y-6'>
              <div className='flex flex-col w-full items-center justify-between gap-4 h-60 bg-gray-50 dark:bg-gray-950 p-4 rounded-3xl border dark:border-gray-800'>
                <div className='relative group flex items-center justify-center bg-gray-200/70 dark:bg-gray-500/10 h-32 w-[80%] p-2 rounded-2xl'>
                  <div className='flex items-center bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-xl w-fit p-2 rounded-3xl'>
                    <div className='grid place-content-center bg-gray-100 dark:bg-gray-900 h-10 w-10 rounded-full overflow-hidden border-[3px] dark:border-gray-600 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                      <p className='text-5xl'>🧙‍♂️</p>
                    </div>
                    <div className='grid place-content-center bg-gray-100 dark:bg-gray-900 h-10 w-10 rounded-full overflow-hidden border-[3px] dark:border-gray-600 -ms-2 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                      <img src={teamMembers[1].image} alt="" />
                    </div>
                    <div className='grid place-content-center bg-gray-100 dark:bg-gray-900 h-10 w-10 rounded-full overflow-hidden border-[3px] dark:border-gray-600 -ms-2 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                      <p className='text-5xl'>🧑‍💻</p>
                    </div>
                    <div className='grid place-content-center bg-gray-100 dark:bg-gray-900 h-10 w-10 rounded-full overflow-hidden border-[3px] dark:border-gray-600 -ms-2 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                      <p className='text-3xl'>🐼</p>
                    </div>
                    <div className='grid place-content-center bg-gray-100 dark:bg-gray-900 h-10 w-10 rounded-full overflow-hidden border-[3px] dark:border-gray-600 -ms-2 hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                      <p className='text-3xl'>🧑‍🦱</p>
                    </div>
                  </div>
                </div>
                <p className='text-sm max-w-sm text-gray-700 dark:text-gray-400 font-light'>
                  CodeWithTechries is a learning platform <span className='font-medium'>built for students, developers, and tech enthusiasts.</span>
                </p>
              </div>
            </div>

            {/* grid2 */}
            <div className='space-y-6'>
              <div className='flex flex-col w-full items-center gap-4 bg-gray-50 dark:bg-gray-950 p-4 rounded-3xl border dark:border-gray-800'>
                <div className='relative group flex items-center justify-center bg-gray-200/70 dark:bg-gray-500/10 h-32 w-[80%] p-2 rounded-2xl'>
                  <div className='flex items-center gap-4 p-2 absolute top-8 w-[110%] bg-gray-100 dark:bg-gray-800 border dark:border-gray-900 group-hover:animate-bounce shadow-2xl rounded-3xl'>
                    <div className='h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full'></div>
                    <div className='h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded-md'></div>
                    <div className='h-4 w-14 bg-gray-200 dark:bg-gray-700 rounded-md'></div>
                  </div>
                </div>
                <p className='text-sm max-w-sm text-gray-700 dark:text-gray-400 font-light'>
                  We provide real-world <span className='font-medium'> coding skills, industry-standard projects, and career guidance</span> so you can turn your ideas into reality.
                </p>
              </div>
            </div>

            {/* grid3 */}
            <div className='space-y-6'>
              <div className='flex flex-col w-full items-center gap-4 bg-gray-50 dark:bg-gray-950 p-4 rounded-3xl border dark:border-gray-800'>
                <div className='relative group overflow-hidden flex items-center justify-center bg-gray-200/70 dark:bg-gray-500/10 h-32 w-32 p-2 rounded-full'>
                  <p className='text-[130px]'>🧙‍♂️</p>
                </div>
                <p className='text-sm max-w-sm text-gray-700 dark:text-gray-400 font-light'>
                  Our aim is to bridge the gap <span className='font-medium'> between theory and practical knowledge </span> by delivering high-quality, hands-on learning experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* our Mission */}
      <Container>
        <div className='py-20 px-4 flex flex-col gap-4 items-center text-center'>
          <p className='text-teal-600 dark:text-teal-500 capitalize'>
            Our Mission
          </p>
          <h2 className="max-w-3xl text-4xl text-gray-900 dark:text-white font-semibold">
            <span className='font-light'>Making tech education </span>
            simple, accessible, and impactful for everyone
          </h2>

          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 dark:text-gray-300 py-4'>
              <div className='border-s-2 border-teal-600 text-start px-4'>
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
                <span className='text-gray-500'>Simplifying Tech Education</span>
                - Delivering complex technical concepts in an easy-to-understand and engaging way
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
              </div>

              <div className='border-s-2 border-teal-600 text-start px-4'>
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
                <span className='text-gray-500'>Accessible for Everyone</span>
                - Ensuring anyone, regardless of background or location, can learn and grow in tech
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
              </div>

              <div className='border-s-2 border-teal-600 text-start px-4'>
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
                <span className='text-gray-500'>Empowering Learners</span>
                - Providing tools, resources, and mentorship to help learners succeed at any stage of their journey
                <span className='text-2xl text-teal-600 dark:text-teal-500'>"</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Our Story */}
      <Container>
        <div className='py-14 px-4 flex flex-col gap-4 items-center text-center'>
          <div className='mb-14'>
            <p className='text-teal-600 dark:text-teal-500 capitalize'>
              Our Story
            </p>
            <h2 className="max-w-xl text-4xl text-gray-900 dark:text-white font-semibold">
              <span className='font-light'>The idea for CodeWithTechries </span>
              began in 2018
            </h2>
          </div>

          <Timeline />
        </div>
      </Container>
    </>
  );
}


export default About;
