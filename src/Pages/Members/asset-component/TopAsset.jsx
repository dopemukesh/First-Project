import React from 'react'

const TopAsset = (className) => {
    return (
        <div className={`{relative w-screen ${className}}`
}>
            <div className="absolute inset-x-0 -top-11 mt-[calc(-3/16*1rem)] flex items-end">
                <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-50"></div>
                <div className="flex justify-between mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
                    <svg viewBox="0 0 56 48" aria-hidden="true" className="-ml-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-gray-50">
                        <path d="M 2.686 3 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 3 Z"></path>
                    </svg>
                    <svg viewBox="0 0 56 48" aria-hidden="true" className="-mr-1.5 mb-[calc(-1/16*1rem)] w-14 flex-none overflow-visible fill-gray-50">
                        <path d="M 53.314 3 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 3 Z"></path>
                    </svg>
                </div>
                <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-gray-50"></div>
            </div>
        </div>
    )
}

export default TopAsset