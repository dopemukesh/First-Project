// src/Components/Sections/PlanetSection.jsx

import React, { useEffect, useRef, useState } from 'react';
import { motion, spring, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Link } from 'react-router-dom';

import Rocket from '../../../assets/spaceAssets/rocket2.svg';
import Container from '../../../Components/Common/Container/Container';

import Planet01 from '../../../assets/spaceAssets/Capa_1.png';
import Planet02 from '../../../assets/spaceAssets/Capa_1-1.png';
import Planet03 from '../../../assets/spaceAssets/Capa_1-2.png';
import Planet04 from '../../../assets/spaceAssets/Capa_1-3.png';
import Planet05 from '../../../assets/spaceAssets/Capa_1-4.png';
import Planet06 from '../../../assets/spaceAssets/Capa_1-5.png';
import Planet07 from '../../../assets/spaceAssets/Earth.png';
import Planet08 from '../../../assets/spaceAssets/Mars.png';
import Planet09 from '../../../assets/spaceAssets/Saturn.png';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const planets = [
    { id: 1, image: Planet01 },
    { id: 2, image: Planet02 },
    { id: 3, image: Planet03 },
    { id: 4, image: Planet04 },
    { id: 5, image: Planet05 },
    { id: 6, image: Planet06 },
    { id: 7, image: Planet07 },
    { id: 8, image: Planet08 },
    { id: 9, image: Planet09 },
];

const courseCategory = [
    'Web Development',
    'DSA',
    'App Development',
    'Basic Programming',
    'Data Science',
    'AI/ML',
    'Digital Marketing',
    'Service Security',
    'Design'
];

// Map to IDs on Classes page
const categoryToId = {
    'Web Development': 'web-development',
    'DSA': 'dsa',
    'App Development': 'app-development',
    'Basic Programming': 'basic-programing',
    'Data Science': 'data-science',
    'AI/ML': 'ai-ml',
    'Digital Marketing' : 'digital-mrketing',
    'Service Security' : 'service-security',
    'Design' : 'design-and-editing'
};

const PlanetSection = () => {
    const rocketRef = useRef(null);
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.matchMedia('(max-width: 767px)').matches);
        };
        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    useEffect(() => {
        if (!rocketRef.current) return;
        const animation = gsap.to(rocketRef.current, {
            duration: 10,
            motionPath: {
                path: '#path',
                align: '#path',
                autoRotate: true,
                alignOrigin: [0.5, 0.5],
            },
            scrollTrigger: {
                trigger: rocketRef.current,
                start: 'top center',
                end: 'top -2800',
                scrub: 1,
                markers: false,
            },
        });
        return () => {
            animation.kill();
        };
    }, [isPhone]);

    return (
        <Container>
            <div id="explore-community" className="relative mb-28 transition-all duration-300 scroll-smooth">
                {isPhone ? (
                    <div className="absolute top-24 -left-8 h-fit flex justify-center w-full">
                        <img ref={rocketRef} src={Rocket} alt="Rocket" className="h-14" />
                        <svg height={1700} viewBox="0 0 252 1997" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                id="path"
                                d="M1.37012 1.13135L250.768 250.529L1.37012 499.927L250.768 749.325L1.37012 998.723L250.768 1248.12L1.37012 1497.52L250.768 1746.92L1.37012 1996.31"
                                stroke="transparent"
                            />
                        </svg>
                    </div>
                ) : (
                    <div className="absolute z-50 top-40 flex justify-center w-full">
                        <img ref={rocketRef} src={Rocket} alt="Rocket" className="h-20" />
                        <svg
                            width="697"
                            height="2362"
                            viewBox="0 0 697 2362"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id="path"
                                d="M0.231934 5.55678C71.3847 -15.3613 282.663 34.4065 331.817 99.6891C426.319 225.198 624.874 326.173 696.027 332.779C613.131 336.632 386.232 361.615 331.817 441.537C253.24 556.949 83.1282 596.513 0.231934 587.705C100.398 594.862 302.639 655.782 331.817 725.585C368.69 813.796 595.86 919.59 696.027 920.691C619.348 924.545 413.056 913.849 331.817 1065.78C250.579 1217.71 76.9109 1234.74 0.231934 1230.88C93.4904 1234.74 290.369 1278.82 331.817 1371.3C373.265 1463.78 602.768 1538.88 696.027 1536.68C613.131 1537.78 398.134 1515.3 331.817 1642.13C265.5 1768.96 83.1282 1800.67 0.231934 1800.67C88.6548 1793.52 278.764 1807.94 331.817 1922.88C384.871 2037.82 607.604 2100.92 696.027 2089.91C620.729 2097.62 392.241 2089.91 331.817 2236.37C288.263 2341.93 75.5293 2368.89 0.231934 2358.98"
                                stroke="transparent"
                            />
                        </svg>
                    </div>
                )}

                <div className="w-full md:px-4">
                    {planets.map((planet, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { amount: 0.5 });
                        const course = courseCategory[index % courseCategory.length];
                        const hash = categoryToId[course];

                        return (
                            <div
                                key={planet.id}
                                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative w-full`}
                            >
                                <div ref={ref} className="flex max-w-md justify-center">
                                    <Link
                                        to={`/classes/${hash}`}
                                        className="flex items-center justify-center p-6 rounded-full relative z-50 cursor-pointer"
                                    >
                                        <motion.img
                                            initial={{ y: 300, opacity: 0 }}
                                            animate={isInView && { y: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            src={planet.image}
                                            alt="Planet"
                                            className="w-40 md:w-64"
                                        />
                                        <motion.div
                                            initial={{ y: 300, opacity: 0 }}
                                            animate={isInView && { y: 0, opacity: 1, type: spring }}
                                            className="absolute w-48 h-48 bg-teal-600 rounded-full mt-8 -z-50 blur-[76px]"
                                        />
                                        <motion.div
                                            initial={
                                                index % 2 === 0 ? { x: -100, scaleX: 0 } : { x: 100, scaleX: 0 }
                                            }
                                            animate={
                                                isInView
                                                    ? { x: 0, scaleX: 1, opacity: 1 }
                                                    : { x: index % 2 === 0 ? -100 : 100, scaleX: 0, opacity: 0 }
                                            }
                                            transition={{ duration: 0.7 }}
                                            className={`absolute top-[40%] ${index % 2 === 0 ? 'left-[90%] md:left-[95%]' : 'right-[90%] md:right-[95%]'} mt-4 bg-teal-500/20 text-teal-800 dark:text-teal-500 px-4 py-2 border-x-[6px] border-teal-600 dark:border-teal-500 backdrop-blur-xl -z-10`}
                                        >
                                            <p className="whitespace-nowrap text-xs font-medium">{course}</p>
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default PlanetSection;
