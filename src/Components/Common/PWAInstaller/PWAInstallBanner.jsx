import { useEffect, useState } from 'react';
import usePWAInstall from '../../../hooks/usePWAInstall';
import { Button } from '../Button/Button';
import { motion, spring } from 'framer-motion'

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
        <motion.div
            initial={{ height: 0, opacity: '0' }}
            animate={{ height: '100%', opacity: '1', type: spring }}
            transition={{ duration: 0.4 }}
            className="fixed flex justify-center h-full top-0 w-full bg-gray-950/50 backdrop-blur-md p-4 z-[99999999999999999999]">
            <motion.div
                initial={{ y: -150, opacity: '0' }}
                animate={{ y: 0, opacity: '1', type: spring }}
                className='flex flex-col flex-1 max-w-sm h-fit bg-white dark:bg-gray-800 border dark:border-gray-600 shadow-lg p-4 rounded-2xl '>

                <div className='flex items-start gap-4'>
                    <img src="./logo/cwtLogo-animatedColor.svg" alt="cwt-logo" className='h-9 bg-gray-700 p-1.5 rounded-lg' />
                    <p className="text-sm font-medium">
                        Install
                        <span className='text-teal-600 dark:text-teal-500'> {'"CodeWithTechries"'} </span>
                        app on your device?
                    </p>
                </div>
                <div className="flex gap-2 mt-4 justify-end">
                    <Button
                        onClick={handleInstallClick}
                        variant='info'
                        size='ssm'
                    >
                        Install
                    </Button>
                    <Button
                        onClick={() => setShowBanner(false)}
                        variant='secondary'
                        size='ssm'
                    >
                        Dismiss
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PWAInstallBanner;
