import React, { useState } from 'react';
import { Pyramid } from 'lucide-react';

const AddReview = ({ isLoggedIn, userData, setReviews, reviews }) => {
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newHoverRating, setNewHoverRating] = useState(0);

  const handleAddReview = async () => {
    if (!newComment.trim() || newRating === 0) {
      alert('Please add a comment and rating.');
      return;
    }
    if (!isLoggedIn || !userData?.name) {
      alert('Please login to add a review.');
      return;
    }

    const today = new Date();
    const newReview = {
      id: Date.now().toString(),
      name: userData.name,
      comment: newComment.trim(),
      rating: newRating,
      date: today.toLocaleDateString('en-IN'),
    };

    try {
      // await api.addReview(newReview);

      setReviews([...reviews, newReview]);
      setNewComment('');
      setNewRating(0);
      setNewHoverRating(0);
    } catch {
      alert('Failed to add review.');
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-r from-teal-500/30 to-yellow-500/30 p-1 rounded-2xl">
      <div className="p-1 bg-white dark:bg-gray-950 rounded-xl overflow-hidden">
        <textarea
          placeholder="Write your review..."
          className="w-full p-1 outline-none bg-transparent min-h-20 max-h-56"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex items-center justify-between gap-4 mt-1">
          <div className="flex gap-1 text-xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onMouseEnter={() => setNewHoverRating(star)}
                onMouseLeave={() => setNewHoverRating(0)}
                onClick={() => setNewRating(star)}
                className={star <= (newHoverRating || newRating) ? 'text-yellow-400' : 'text-gray-400'}
              >
                ★
              </span>
            ))}
          </div>
          <button
            className="group p-2 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 active:scale-90 duration-500 transition-all"
            onClick={handleAddReview}
            disabled={!isLoggedIn || !userData?.name}
            type="button"
          >
            {!isLoggedIn ? 'Login' : <Pyramid className="rotate-45 text-white scale-90 group-hover:scale-110 transition-transform duration-500" />}
          </button>
        </div>
      </div>
      <p className="text-xs font-light py-1.5 px-1">
        <span>Tip: </span>
        <span>Be honest and constructive in your feedback.</span>
      </p>
    </div>
  );
};

export default AddReview;
