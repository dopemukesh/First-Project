/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from '../../../Components/Common/Button/Button';
import { useCurrentUser } from '../../../hooks/useCurrentUser';

const CourseFeedback = ({ reviews, setReviews, averageRating }) => {
    // State for editing existing reviews
    const [editingId, setEditingId] = useState(null);
    const [editedComment, setEditedComment] = useState('');
    const [editedRating, setEditedRating] = useState(0);
    const [editedHoverRating, setEditedHoverRating] = useState(0);

    // State for adding new reviews
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);
    const [newHoverRating, setNewHoverRating] = useState(0);

    const bgBorder = "bg-gray-100 dark:bg-gray-900 border dark:border-gray-800";

    const handleSaveEdit = () => {
        setReviews(prev =>
            prev.map(review =>
                review.id === editingId
                    ? { ...review, comment: editedComment, rating: editedRating }
                    : review
            )
        );
        setEditingId(null);
        setEditedComment('');
        setEditedRating(0);
        setEditedHoverRating(0);
    };

    const handleDelete = (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this review?");
        if (confirmed) {
            setReviews(prevReviews => prevReviews.filter(review => review.id !== id));
        }
    };

    const handleAddReview = () => {
        if (!newComment.trim() || newRating === 0) {
            alert("Please add a comment and rating.");
            return;
        }
        const today = new Date();
        const newReview = {
            id: Date.now().toString(),
            name: userData.name || "Anonymous",
            comment: newComment.trim(),
            rating: newRating,
            date: today.toLocaleDateString('en-IN'),
        };
        setReviews(prev => [...prev, newReview]);
        setNewComment('');
        setNewRating(0);
        setNewHoverRating(0);
    };

    const { isLoggedIn, userData, isAdmin } = useCurrentUser(); // Mocked user data for demonstration

    return (
        <section className="mb-8">
            <h3 className="text-xl font-medium mb-4">Student Feedback</h3>
            <div className={`${bgBorder} p-4 rounded-xl`}>
                {/* Ratings Overview */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl font-bold text-teal-600 dark:text-teal-500">{averageRating}</div>
                    <div>
                        <div className="flex gap-1 text-yellow-400 mb-1 text-xl">
                            {'★'.repeat(Math.floor(averageRating))}
                            {'☆'.repeat(5 - Math.floor(averageRating))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-500">{reviews.length} Course Ratings</p>
                    </div>
                </div>

                {/* Add New Review */}
                <div className="mb-8 space-y-3">
                    <textarea
                        placeholder="Write your review..."
                        className="w-full p-3 rounded-xl border dark:border-gray-800 dark:bg-gray-950 outline-none focus:border-teal-600 dark:focus:border-teal-500"
                        rows={3}
                        value={newComment}
                        onChange={e => setNewComment(e.target.value)}
                    />
                    <div className="flex items-center gap-4">
                        <div className="flex gap-1 text-xl cursor-pointer">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span
                                    key={star}
                                    onMouseEnter={() => setNewHoverRating(star)}
                                    onMouseLeave={() => setNewHoverRating(0)}
                                    onClick={() => setNewRating(star)}
                                    className={
                                        star <= (newHoverRating || newRating) ? 'text-yellow-400' : 'text-gray-400'
                                    }
                                >★</span>
                            ))}
                        </div>
                        <Button
                            // variant='tertiary'
                            size='sm'
                            onClick={handleAddReview}
                            disabled={!isLoggedIn && !userData.name}
                        >
                            Submit Review
                        </Button>
                    </div>
                </div>

                {/* Reviews */}
                <div className="space-y-6">
                    {reviews.map(review => (
                        <div key={review.id} className="border-b border-gray-300 dark:border-gray-800 pb-4 last:border-0">
                            <div className="flex justify-between mb-2">
                                <div className="flex gap-3 items-center w-full">
                                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm">
                                        {review.name.split(' ').map(w => w[0].toUpperCase()).slice(0, 2).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-sm">{review.name}</h4>
                                        <div className="flex items-center gap-2">
                                            <div className="flex text-yellow-400 text-sm">
                                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                            </div>
                                            <span className="text-gray-400 text-xs">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                {(isLoggedIn && (review.name === userData.name || isAdmin)) && (
                                    <div className="flex gap-2">
                                        <Button
                                            size='xs'
                                            variant='secondary'
                                            onClick={() => {
                                                setEditingId(review.id);
                                                setEditedComment(review.comment);
                                                setEditedRating(review.rating);
                                                setEditedHoverRating(review.rating);
                                            }}
                                        >Edit</Button>
                                        <Button
                                            size='xs'
                                            variant='danger'
                                            onClick={() => handleDelete(review.id)}
                                        >Delete</Button>
                                    </div>
                                )}
                            </div>
                            {editingId === review.id ? (
                                <div className="space-y-2">
                                    <div className="flex gap-1 w-fit text-xl cursor-pointer select-none">
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <span
                                                key={star}
                                                onMouseEnter={() => setEditedHoverRating(star)}
                                                onMouseLeave={() => setEditedHoverRating(0)}
                                                onClick={() => setEditedRating(star)}
                                                className={
                                                    star <= (editedHoverRating || editedRating)
                                                        ? 'text-yellow-400' : 'text-gray-400'
                                                }
                                            >★</span>
                                        ))}
                                        <span className='text-[12px] ps-4 cursor-default text-gray-400 dark:text-gray-600'>Select to update</span>
                                    </div>
                                    <textarea
                                        className="w-full p-3 rounded-xl border dark:border-gray-800 dark:bg-gray-950 outline-none focus:border-teal-500"
                                        rows={3}
                                        value={editedComment}
                                        onChange={e => setEditedComment(e.target.value)}
                                    />
                                    <div className="flex gap-2">
                                        <Button
                                            size='xs'
                                            onClick={handleSaveEdit}
                                        // className="px-3 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                                        >Save now</Button>
                                        <Button
                                            size='xs'
                                            variant='secondary'
                                            onClick={() => {
                                                setEditingId(null);
                                                setEditedComment('');
                                                setEditedRating(0);
                                                setEditedHoverRating(0);
                                            }}
                                        // className="px-3 py-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 rounded-md hover:bg-gray-600"
                                        >Cancel</Button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-800 dark:text-gray-200 mt-4">{review.comment}</p>
                            )}
                        </div>
                    ))}
                </div>

                <button className="text-teal-600 dark:text-teal-500 hover:text-teal-700 mt-4">Show more</button>
            </div>
        </section>
    );
};

export default CourseFeedback;
