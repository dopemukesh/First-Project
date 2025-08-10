/* eslint-disable react/prop-types */
// Designed and developed by:
// - Mukesh Yadav

import React from 'react'
import Container from '../../Components/Common/Container/Container';
import TeamMember from './Member/TeamMember';
import ShauryaImg from '../../../public/images/Shaurya img.png';

const About3 = () => {

    const teamMembers = [
        {
            name: "Mukesh Yadav",
            position: "Frontend Developer",
            instagram: "https://www.instagram.com/curiousdevx",
            description:
                "Frontend Developer skilled in React.js, Tailwind CSS, and JavaScript, creating fast, responsive, and modern web applications.",
            image: "./images/members/mukeshYadav.jpg",
        },
        {
            name: "Shaurya",
            position: "Founder & CEO",
            instagram: "https://www.instagram.com/codewithtechries",
            description:
                "Leading CodeWithTechries with a vision to make tech education accessible, focusing on innovation and community growth.",
            image: "./images/shauryaImage.png",
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
            instagram: "https://www.instagram.com/thankiuday",
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
            image: "./images/members/aryanBhutani.jpg",
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
                            <h1 className='font-bold text-6xl'>
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
                            <div>
                                <p>
                                    <span className="text-gray-800 dark:text-white italic font-semibold">“If you can manifest it, you can achieve it.”</span><br />
                                    <span className="text-gray-400">– Mr. Shaurya</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <img src="./images/shauryaImage.png" alt="" className='h-96' />
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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 py-4'>
                            <p>
                                <span className='font-semibold'>"Simplifying Tech Education</span> - Delivering complex technical concepts in an easy-to-understand and engaging way"
                            </p>
                            <p>
                                <span className='font-semibold'>"Accessible for Everyone</span> - Ensuring anyone, regardless of background or location, can learn and grow in tech"
                            </p>
                            <p>
                                <span className='font-semibold'>"Empowering Learners</span> - Providing tools, resources, and mentorship to help learners succeed at any stage of their journey"
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

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
                                    year="2025"
                                    title="You already belong here"
                                    description="Join our journey and be part of something amazing."
                                    image={ShauryaImg}
                                    side="left"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

// Timeline Item Component
function TimelineItem({ year, title, description, image, side, tagline }) {
    return (
        <div
            className={`flex flex-col md:flex-row md:gap-8 ${side === "right" ? "md:flex-row-reverse" : ""}`}
        >
            {/* Timeline marker */}
            <div className="relative md:hidden">
                <div className="-ms-3.5 -mt-3 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit bg-gray-50 dark:bg-gray-950">
                    {year}
                </div>
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
                <div className="-mt-56 -ms-1 md:-mt-10 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit h-fit bg-white dark:bg-gray-950">
                    {year}
                </div>
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


export default About3;
