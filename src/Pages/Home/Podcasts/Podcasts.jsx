import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
// import earth from "../../../assets/earth4.png";
// import Container from "../../../Components/Common/Container/Container";
import { Button } from "../../../Components/Common/Button/Button";
import Podcast from "../../../api/PodcastData.json";

const Podcasts = () => {

    const podcastRef = useRef(null);
    const isPodcastInView = useInView(podcastRef, {
        triggerOnce: true,
        margin: "-50px",
    });


    const bgGrads =
        "bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border dark:border-gray-800 rounded-2xl";


    // const Podcasts = () => {
    return (
        <>
            {/* Podcast Section */}
            <div className="flex justify-center">
                <motion.div
                    ref={podcastRef}
                    className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 w-full max-w-3xl"
                    initial={{ opacity: 0 }}
                    animate={isPodcastInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {Podcast.map(({ podId, podTitle, podDescription }) => (
                        <motion.div
                            key={podTitle}
                            className={`${bgGrads} p-4 h-fit`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isPodcastInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: podId * 0.2 }}
                        >
                            <div className="mb-6 space-y-1">
                                {/* <h6 className="text-7xl font-extrabold text-gray-300 dark:text-gray-800/50 absolute right-2 -top-8">
                        {podId}
                      </h6> */}
                                <h6 className="text-xs text-teal-600 dark:text-teal-500">
                                    Podcast {podId}
                                </h6>
                                <h4 className="font-semibold">{podTitle}</h4>
                                <p className="text-sm text-gray-500">{podDescription}</p>
                            </div>
                            <Button variant="secondary" size="sm">
                                Listen Now
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Podcasts
