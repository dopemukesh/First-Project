import { useEffect, useState } from 'react';
import usePWAInstall from '../../../hooks/usePWAInstall';
import { Button01 } from '../Button/Button';
import { motion } from 'framer-motion'

const PWAInstallBanner = () => {
    const { canInstall, promptInstall } = usePWAInstall();
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const shouldShow = localStorage.getItem('showInstall');
        if (shouldShow === 'true' && canInstall) {
            setShowBanner(true);
            localStorage.removeItem('showInstall');
        }
    }, [canInstall]);

    const handleInstallClick = async () => {
        await promptInstall();
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div
            className="fixed inset-0 flex justify-center items-center bg-gray-100/50 dark:bg-gray-950/50 backdrop-blur-xl z-[9999999] transition-all duration-500 ease-in-out">
            <motion.div
                initial={{ y: "-50%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-50%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col w-full md:max-w-sm h-full md:h-fit bg-white dark:bg-gray-950 md:border border-gray-300 dark:border-gray-800 shadow-xl p-8 md:rounded-2xl md:overflow-hidden"
            >
                <div className="h-full grid place-content-center md:mb-8 relative">
                    <img
                        src="./icons/download-icon.svg"
                        alt="cwt-logo"
                        className="h-64 md:h-24 animate-bounce"
                    />
                    <i className="w-56 h-56 bg-teal-500/50 absolute blur-[96px] z-0 bottom-24 md:bottom-4"></i>
                </div>

                <div className="flex flex-col items-center justify-end text-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        Your Coding Journey Starts Here
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        Join the CodeWithTechries community! Explore, collaborate, and grow with fellow developers.
                    </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <Button01
                        onClick={handleInstallClick}
                        width="w-full"
                        rounded="xl"
                    >
                        Download App
                    </Button01>
                    <button
                        onClick={() => setShowBanner(false)}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                    >
                        Skip
                    </button>
                </div>
            </motion.div>
        </div>

    );
};

export default PWAInstallBanner;
