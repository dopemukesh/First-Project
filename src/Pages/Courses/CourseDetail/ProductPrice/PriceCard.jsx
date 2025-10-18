import React from 'react'
import DiscountPrice from './DiscountPrice'
import RazorpayCheckoutButton from '../../../../Components/PaymentButtons/RazorPayCheckoutButton'

const PriceCard = ({ className, data }) => {

    const bgBorder = "bg-white dark:bg-gray-900 border dark:border-gray-800";

    return (
        <>
            <div className={`md:col-span-1 ${className}`}>
                <div className={`${bgBorder} p-6 rounded-xl md:sticky top-16`}>
                    {/* Price */}
                    {/* <DiscountPrice data={data} /> */}

                    {/* Description */}
                    <div className='mb-6'>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <span className='text-gray-700 dark:text-gray-300'>"{data.className}" </span>
                            offers everything you need at this price point to become confident, job-ready, or start freelancing.
                        </p>
                    </div>

                    {/* Enroll Button */}
                    <div className="space-y-4">
                        <RazorpayCheckoutButton course={data} />
                    </div>

                    {/* Course Includes */}
                    {/* <div className="mt-6 space-y-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span>📺</span><span>30 hours on-demand live classes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📝</span><span>12 coding exercises</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📱</span><span>Access on mobile and laptop</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>🏆</span><span>Certificate of completion</span>
                        </div>
                    </div> */}

                    <h2 className='mt-6 text-sm text-gray-600 dark:text-gray-400'>What you learn</h2>
                    <div className="mt-2 ms-2 space-y-3 text-sm">
                        {data.whatYouWillLearn.map((point, index) => (
                            <div key={index} className="flex gap-3">
                                <span className="text-teal-600 dark:text-teal-500">✓</span>
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>

                    <hr className='border-dashed border-gray-400 dark:border-gray-600 my-6' />

                    <h2 className='text-sm text-gray-600 dark:text-gray-400'>Features</h2>
                    <div className="mt-2 ms-2 space-y-3 text-sm">
                        {data.thisCourseIncludes.map((point, index) => (
                            <div key={index} className="flex gap-3">
                                <span className="text-teal-600 dark:text-teal-500">✓</span>
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default PriceCard
