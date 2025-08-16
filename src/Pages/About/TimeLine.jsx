import Container from "../../Components/Common/Container/Container";
import ShauryaImg from '../../../public/images/Shaurya img.webp';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {

    const StoryInfo = [
        {
            year: '2018',
            tagline: 'Started with a question',
            title: 'Main koi task karch kyuki kar sake hoon ?',
            description: 'It started as a simple idea to help local businesses establish their online presence.',
            image: `${ShauryaImg}`,
            side: 'left'
        },
        {
            year: '2021',
            tagline: 'A Dream Turns Into a Vision',
            title: 'What if we built better ?',
            description: 'We expanded our services and built a team of talented developers and designers.',
            image: `${ShauryaImg}`,
            side: 'right'
        },
        {
            year: '2022',
            tagline: '',
            title: 'The Team That Turned Build Into Art',
            description: 'Our team grew to 10+ professionals, each bringing unique expertise to every project.',
            image: `${ShauryaImg}`,
            side: 'left'
        },
        {
            year: '2023',
            tagline: '',
            title: 'This was how far App vision.',
            description: 'Today we continue to push boundaries and create innovative solutions for our clients.',
            image: `${ShauryaImg}`,
            side: 'right'
        },
        {
            year: '2024',
            tagline: '',
            title: 'This is just the beginning',
            description: 'Looking forward to what we can build together in the future.',
            image: `${ShauryaImg}`,
            side: 'left'
        },
        {
            year: '2025',
            tagline: '',
            title: 'You already belong here',
            description: 'Join our journey and be part of something amazing.',
            image: `${ShauryaImg}`,
            side: 'right'
        }
    ]

    useEffect(() => {
    gsap.fromTo(
      "#filLine",
      { height: 96 }, // starting height
      {
        height: "96%", // final height
        ease: "none",
        scrollTrigger: {
          trigger: "#timeline",   // kis element ke scroll par effect hoga
          start: "top 96",       // jab timeline top pe aaye tab start
          end: "bottom 400",   // jab timeline bottom tak scroll ho
          scrub: true,            // smooth animation scroll ke liye baby
        },
      }
    );
  }, []);

    return (
        <Container >
            <div className="flex" >
                <div className="flex justify-center w-full px-4 relative overflow-hidden">

                    {/* Timeline line */}
                    <div id='timeline' className="w-0.5 h-full bg-gray-300 dark:bg-gray-800 md:absolute md:mt-10">
                        
                        {/* filLine */}
                        <div id="filLine" className="bg-teal-600 dark:bg-teal-500 w-0.5 h-56 relative">
                            <div className='absolute z-50 -bottom-3 -left-[11px] bg-teal-500/30 backdrop-blur-[2px] w-6 h-6 rounded-full flex justify-center items-center'>
                                <div className='bg-teal-600 w-2.5 h-2.5 rounded-full flex justify-center items-center'>
                                    <div className='bg-teal-600 w-2.5 h-2.5 animate-ping rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* main contents */}
                    <div className="flex flex-col w-full gap-6">
                        {StoryInfo.map(({ year, tagline, title, description, image, side }, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center md:items-center md:pt-10 md:flex-row ${side === "right" ? "md:flex-row-reverse" : ""
                                    } w-full`}
                            >
                                {/* year on phone */}
                                <div className="relative flex md:hidden">
                                    <div className="-ms-4 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit h-10 grid place-content-center bg-gray-50 dark:bg-gray-950">
                                        {year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 max-w-md">
                                    <div className="rounded-xl p-4">
                                        <div className={`space-y-2 ${side === "right" ? "" : "md:text-right"}`}>
                                            {tagline &&
                                                <i className="text-gray-500 dark:text-gray-400">
                                                    {tagline}
                                                </i>}
                                            <h3 className="font-bold text-lg">{title}</h3>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* year on desktops */}
                                <div className="relative hidden md:flex">
                                    <div className="-mt-36 text-teal-600 dark:text-teal-500 text-2xl font-semibold p-2 w-fit h-10 grid place-content-center bg-gray-50 dark:bg-gray-950">
                                        {year}
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="flex-1 max-w-md px-4">
                                    <div className="h-52 rounded-lg overflow-hidden bg-gray-800">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* dusara element (aur bhi ho sakte hain) */}
                    </div>

                </div>
            </div>
        </Container>
    );
}

export default Timeline;