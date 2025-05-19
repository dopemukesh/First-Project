/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button } from '../../../Components/Common/Button/Button';
import courses from "../../../api/Courses.json";
import { NavLink, useParams } from 'react-router-dom';
import Container from '../../../Components/Common/Container/Container';
import { IoIosArrowForward } from 'react-icons/io';
import CourseFeedback from './CourseFeedback'
import DiscountPrice from './ProductPrice/DiscountPrice';


const CourseDetails = () => {
  const { id } = useParams();  // id is a string from useParams
  const courseData = courses.find((course) => course.id.toString() === id);  // convert course.id to string for comparison
  const [reviews, setReviews] = useState(courseData?.ratings?.reviews || []);

  if (!courseData) {
    return (
      <div className="text-center text-white mt-10">
        <h1 className="text-2xl font-bold">Course Not Found</h1>
        <p className="text-gray-400">The course you are looking for does not exist.</p>
      </div>
    );
  }


  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1)
    : "0.0";


  const bgBorder = "bg-gray-100 dark:bg-gray-900 border dark:border-gray-800";

  return (
    <Container className="min-h-screen py-14">
      <div className="px-4">
        {/* Course Header */}
        <div className="mb-8">
          <div className={`flex items-center gap-1 text-sm bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border dark:border-gray-800 rounded-lg w-fit px-3 py-2 mb-4 sticky top-16`}>
            <NavLink
              to={-1}
              className='whitespace-nowrap flex items-center gap-1 text-gray-400'
            >
              Back <IoIosArrowForward />
            </NavLink>
            <p className=''>{courseData.category}</p>
          </div>
          <h1 className="text-4xl font-semibold mb-4 max-w-2xl">{courseData.subtitle}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">{courseData.description}</p>

          <div className="space-y-4 mt-4">
            <div className='flex gap-4'>
              <span className="text-gray-400 dark:text-gray-500">Last updated : {courseData.lastUpdated}</span>
              <span className="text-sm flex items-center text-gray-700 dark:text-gray-500 border border-gray-700 rounded-md px-2">{courseData.language}</span>
            </div>

            <div className='flex gap-4 w-fit'>
              <Button
                variant='secondary'
                size='sm'
              >
                Download Syllabus
              </Button>
              <Button
                // variant='tertiary'
                size='sm'
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* What you'll learn */}
            <section className={`${bgBorder} p-6 rounded-xl mb-8`}>
              <h3 className="text-xl font-semibold mb-4">What you'll learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.learningPoints.map((point, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-teal-500">✓</span>
                    <p className="text-gray-600 dark:text-gray-400">{point}</p>
                  </div>
                ))}
              </div>
              {/* <button className="text-teal-600 dark:text-teal-500 mt-4 hover:text-teal-700">Show more</button> */}
            </section>

            {/* Related Topics */}
            <section className="mb-8">
              <h3 className="text-xl font-medium mb-4">Explore related topics</h3>
              <div className="flex flex-wrap gap-2">
                {courseData.topics.split(",").map((tag, index) => (
                  <span key={index} className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Course Features */}
            <section className="mb-8">
              <h3 className="text-xl font-medium mb-4">This course includes:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-teal-500">✓</span>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="mb-8">
              <h3 className="text-xl font-medium mb-4">Instructor</h3>
              <div className="flex gap-4 p-2 rounded-xl max-w-sm">
                <div className="min-w-24 h-24 bg-gray-700 rounded-full"></div>
                <div>
                  <h4 className="text-lg font-semibold">{courseData.instructor?.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{courseData.instructor?.title}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <span className='text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5'>⭐ {averageRating}</span>
                    <span className='text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5'>👥 {courseData.instructor?.students}</span>
                    <span className='text-gray-500 border dark:border-gray-900 rounded-md px-1.5 py-0.5'>📚 {courseData.instructor?.courses}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Price Card on phone */}
            <section className="mb-8 md:hidden">
              <PriceCard />
            </section>

            {/* Student Feedback */}
            <section className="mb-8">
              <CourseFeedback reviews={reviews} setReviews={setReviews} averageRating={averageRating} />
            </section>
          </div>


          {/* Price Card on desktop*/}
          {/* <div className="hidden md:block md:col-span-1 mb-8 sticky top-16"> */}
            <PriceCard className="hidden md:block"/>
          {/* </div> */}
        </div>
      </div>
    </Container>
  );
};

export default CourseDetails;


const PriceCard = ({className}) => {
  const bgBorder = "bg-gray-100 dark:bg-gray-900 border dark:border-gray-800";

  return (
    <>
      {/* Price Card */}
      <div className={`md:col-span-1 ${className}`}>
        <div className={`${bgBorder} p-6 rounded-xl md:sticky top-16`}>
          {/* Main Price */}
          <DiscountPrice />

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button
              // variant='tertiary'
              className='w-full'
            >
              Enroll now
            </Button>
            <Button
              variant='outline'
              className='w-full border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500'
            >
              Add to cart
            </Button>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              30-Day Money-Back Guarantee
            </p>
          </div>

          {/* Course Includes */}
          <div className="mt-6 space-y-3">
            <h4 className="font-medium mb-3">This course includes:</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📺</span>
              <span>14 hours on-demand video</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📝</span>
              <span>12 coding exercises</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>📱</span>
              <span>Access on mobile and TV</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>🏆</span>
              <span>Certificate of completion</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4 pt-6 border-t border-gray-300 dark:border-gray-700">
            <button className="text-gray-500 hover:text-teal-500 transition-colors">
              <span>Share</span>
            </button>
            <button className="text-gray-500 hover:text-teal-500 transition-colors">
              <span>Gift this course</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}