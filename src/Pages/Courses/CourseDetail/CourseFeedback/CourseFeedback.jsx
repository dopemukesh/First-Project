import React from 'react';
import RatingsOverview from './RatingsOverview';
import AddReview from './AddReview';
import ReviewList from './ReviewList';
import { useCurrentUser } from '../../../../hooks/useCurrentUser';

const CourseFeedback = ({ reviews, setReviews, averageRating }) => {

const { isLoggedIn, userData, isAdmin } = useCurrentUser();

  return (
    <section className="">
      <h3 className="text-xl font-medium mb-4">Student Feedback</h3>
      <div className="flex flex-col gap-2 p-2 bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 rounded-2xl">
        <RatingsOverview averageRating={averageRating} count={reviews.length} />
        <AddReview
          isLoggedIn={isLoggedIn}
          userData={userData}
          setReviews={setReviews}
          reviews={reviews}
        />
        <ReviewList
          reviews={reviews}
          setReviews={setReviews}
          isLoggedIn={isLoggedIn}
          userData={userData}
          isAdmin={isAdmin}
        />
      </div>
    </section>
  );
};

export default CourseFeedback;
