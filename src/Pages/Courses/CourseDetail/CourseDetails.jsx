import React, { useState, useEffect } from "react";
import { Button } from "../../../Components/Common/Button/Button";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Container from "../../../Components/Common/Container/Container";
import { IoIosArrowForward } from "react-icons/io";
import CourseFeedback from "./CourseFeedback/CourseFeedback";
import RazorpayCheckoutButton from "../../../Components/PaymentButtons/RazorPayCheckoutButton";
import PriceCard from "./ProductPrice/PriceCard";
import FetchAPI from "../../../api/fetchAPI/FetchAPI";

import InstructorInfo from "./comp/InstructorInfo";
import FeatureList from "./comp/FeatureList";
import RelatedTopics from "./comp/RelatedTopics";
import WhatYouWillLearn from "./comp/WhatYouWillLearn";

const CourseDetails = () => {
  const { className, id } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await FetchAPI("v1/classes/all", { method: "get" });
        if (res && Array.isArray(res.classes)) {
          const course = res.classes.find((c) => c._id === id);
          if (course) {
            setCourseData(course);
          } else {
            setError("Course not found.");
          }
        } else {
          setError("No classes found in response.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="flex justify-center w-full pt-14">
        <div className='p-3 text-center flex items-center justify-center gap-2'>
          <div className='space-y-4 py-4'>
            <div className='space-y-2'>
              <h2 className='font-bold text-xl'>No data found for this course</h2>
              <p className='text-sm text-gray-400 dark:text-gray-500 max-w-md'>
                Sorry we couldn't find any data related to
                <span className='font-mono'> "{id}"</span>. Please check your&nbsp;
                <span className='font-mono px-1 bg-gray-200 dark:bg-white/10'>network</span> or try again.
              </p>
            </div>
            <div className='flex justify-center'>
              <Button
                variant='secondary'
                rounded='full'
                size='sm'
                to={-1}
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container className="min-h-screen py-14">
      <div className="px-4">
        {/* Header with back link, initials and title */}
        <div className="mb-8">
          <div className="flex items-center gap-1 text-sm text-gray-400 w-fit py-2 mb-4 sticky top-16">
            <NavLink to={-1} className="flex items-center gap-1">
              Back <IoIosArrowForward />
            </NavLink>

            <span
              className="whitespace-nowrap lowercase overflow-x-auto max-w-52 md:max-w-md"
              title={courseData.className}
            >
              {courseData.className.split(" ").map(word => word.charAt(0)).join("")}
            </span>
          </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 max-w-2xl">{courseData.className}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl">{courseData.longDescription}</p>
          </div>

          <div className="space-y-4 mt-4">
            <div className="flex gap-4">
              <span className="text-sm text-gray-400 dark:text-gray-500">
                {courseData.createdAt === courseData.updatedAt ? "Created: " : "Last updated: "}
                {new Date(
                  courseData.createdAt === courseData.updatedAt
                    ? courseData.createdAt
                    : courseData.updatedAt
                ).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <span className="text-sm flex items-center text-gray-700 dark:text-gray-500 border border-gray-700 rounded-md px-2">
                {courseData.language}
              </span>
            </div>

            <div className="flex gap-4 w-fit">
              <Button variant="secondary" size="sm">Download Syllabus</Button>
              <RazorpayCheckoutButton course={courseData} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* What You'll Learn Section */}
            <WhatYouWillLearn points={courseData.whatYouWillLearn} />

            {/* Related Topics */}
            <RelatedTopics topics={courseData.relatedTopics} />

            {/* Course Features */}
            <FeatureList title="This course includes:" features={courseData.thisCourseIncludes} />

            {/* Instructor Info */}
            <InstructorInfo
              instructor={courseData.instructor}
              teacherName={courseData.teacherName}
              teacherSpecialization={courseData.teacherSpecialization}
              teacherRating={courseData.teacherRating}
              averageRating={averageRating}
            />

            {/* Mobile Price Card */}
            <section className="md:hidden">
              <PriceCard data={courseData} />
            </section>

            {/* Student Feedback */}
            <section>
              <CourseFeedback reviews={reviews} setReviews={setReviews} averageRating={averageRating} />
            </section>
          </div>

          {/* Desktop Price Card */}
          <PriceCard className="hidden md:block" data={courseData} />
        </div>
      </div>
    </Container>
  );
};

export default CourseDetails;
