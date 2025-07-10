import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";


const LeaderboardCard = () => {
    const leaderboardRef = useRef(null);
    const isLeaderboardInView = useInView(leaderboardRef, {
        triggerOnce: true,
        margin: "-50px",
    });


    const users = [
        {
            name: "Mukesh Yadav",
            points: 25,
            img: "https://avatars.githubusercontent.com/dopemukesh",
            description: "Frontend Developer at Code With Techries.",
        },
        {
            name: "Yasin Memon",
            points: 10,
            img: "https://avatars.githubusercontent.com/YasinMemon",
            description: "Contributing to CWT as a repo manager.",
        },
        {
            name: "Uday Thanki",
            points: 1,
            img: "https://avatars.githubusercontent.com/thankiuday",
            description: "Learning and contributing to open-source projects.",
        },
    ];

    const bgGrads =
        "bg-white dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-2xl";

    return (
        <>
            <div className="flex justify-center">
                <motion.div
                    ref={leaderboardRef}
                    className={`w-full max-w-xl ${bgGrads} mb-4 relative overflow-hidden`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isLeaderboardInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <i className="w-56 h-56 bg-teal-500/30 absolute blur-[96px] z-0 left-[30%] -bottom-56"></i>
                    
                    <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-800 p-4">
                        <h3 className="text-sm font-medium">Top Leaderboard</h3>
                        <h3 className="text-sm text-teal-600 dark:text-teal-500">
                            Contributions
                        </h3>
                    </div>
                    {/* Leaderboard List */}
                    <div className="py-4">
                        {users.map((user, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-between gap-4 cursor-pointer px-4 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-100/5"
                                initial={{ opacity: 0, x: -50 }}
                                animate={isLeaderboardInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <div className="flex flex-1 items-center space-x-4">
                                    <img
                                        src={user.img}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-gray-500"
                                    />
                                    <div className="flex flex-col space-y-1">
                                        <h4 className="text-sm font-semibold">{user.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {user.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-sm text-teal-600 dark:text-teal-500">
                                    {user.points}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default LeaderboardCard
