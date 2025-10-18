import React, { useState } from 'react';
import { Button } from '../../../../Components/Common/Button/Button';


const ReviewList = ({ reviews, setReviews, isLoggedIn, userData, isAdmin }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedComment, setEditedComment] = useState('');
  const [editedRating, setEditedRating] = useState(0);
  const [editedHoverRating, setEditedHoverRating] = useState(0);

  const resetEditStates = () => {
    setEditingId(null);
    setEditedComment('');
    setEditedRating(0);
    setEditedHoverRating(0);
  };

  const handleSaveEdit = async () => {
    if (!editedComment.trim() || editedRating === 0) {
      alert('Please provide a comment and rating.');
      return;
    }

    try {
      // await api.updateReview(editingId, { comment: editedComment, rating: editedRating });

      setReviews((prev) =>
        prev.map((review) =>
          review.id === editingId ? { ...review, comment: editedComment, rating: editedRating } : review
        )
      );
      resetEditStates();
    } catch {
      alert('Failed to update review.');
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this review?');
    if (!confirmed) return;

    try {
      // await api.deleteReview(id);

      setReviews((prev) => prev.filter((review) => review.id !== id));
      if (editingId === id) resetEditStates();
    } catch {
      alert('Failed to delete review.');
    }
  };

  return (
    <div className="space-y-2">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex flex-col overflow-hidden bg-white dark:bg-gray-950 rounded-xl border border-gray-300 dark:border-gray-800"
        >
          <div className="flex flex-col gap-2 p-2">
            <div className="flex gap-2 items-center w-full">
              <div className="w-8 h-8 p-2 bg-teal-600 text-white rounded-full text-xs flex justify-center items-center">
                {review.name
                  .split(' ')
                  .map((w) => w[0].toUpperCase())
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                  <h4 className="font-medium text-xs">{review.name}</h4>
                  <span className="text-gray-500 text-xs">{review.date}</span>
                </div>
                <p className="flex items-center gap-1 text-yellow-400 text-sm">{'★'.repeat(review.rating)}</p>
              </div>
            </div>

            {/* Editable Review */}
            {editingId === review.id ? (
              <div className="p-2">
                <div className="flex items-center gap-1 w-fit text-xl cursor-pointer select-none">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onMouseEnter={() => setEditedHoverRating(star)}
                      onMouseLeave={() => setEditedHoverRating(0)}
                      onClick={() => setEditedRating(star)}
                      className={star <= (editedHoverRating || editedRating) ? 'text-yellow-400' : 'text-gray-400'}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-xs ps-4 cursor-default text-gray-500 dark:text-gray-400">Select to update</span>
                </div>
                <textarea
                  className="w-full p-3 rounded-xl border bg-gray-50 dark:border-gray-800 dark:bg-gray-950 outline-none focus:border-teal-600"
                  rows={3}
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
                <div className="flex justify-end gap-2 mt-2">
                  <Button size="xs" variant="warning" onClick={handleSaveEdit}>
                    Update now
                  </Button>
                  <Button size="xs" variant="secondary" onClick={resetEditStates}>
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <p className="px-10 text-sm text-gray-800 dark:text-gray-300">{review.comment}</p>
            )}
          </div>

          {/* Edit/Delete Controls */}
          {isLoggedIn && (review.name === userData?.name || isAdmin) && editingId !== review.id && (
            <div className="flex justify-end p-2 gap-2">
              <Button
                size="xs"
                variant="secondary"
                onClick={() => {
                  setEditingId(review.id);
                  setEditedComment(review.comment);
                  setEditedRating(review.rating);
                  setEditedHoverRating(review.rating);
                }}
              >
                Edit
              </Button>
              <Button size="xs" variant="danger" onClick={() => handleDelete(review.id)}>
                Delete
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
