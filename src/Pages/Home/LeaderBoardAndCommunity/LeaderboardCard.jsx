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
        "bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

    return (
        <>
            <div className="flex justify-center">
                <motion.div
                    ref={leaderboardRef}
                    className={`w-full max-w-3xl ${bgGrads} p-6 sm:p-8 mb-4`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isLeaderboardInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                >
                    <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 pb-3">
                        <h3 className="text-lg font-semibold">Top Leaderboard</h3>
                        <h3 className="font-medium text-teal-600 dark:text-teal-500">
                            Contributions
                        </h3>
                    </div>
                    {/* Leaderboard List */}
                    <div className="space-y-6 mt-4">
                        {users.map((user, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center justify-between gap-4 hover:bg-gray-100 dark:hover:bg-gray-900 px-2 py-1 rounded-lg"
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
                                        <h4 className="font-semibold">{user.name}</h4>
                                        <p className="text-sm text-gray-500">
                                            {user.description}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-lg font-bold text-teal-600 dark:text-teal-500">
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
