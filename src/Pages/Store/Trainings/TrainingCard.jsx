import React from "react";
import { Button } from "../../../Components/Common/Button/Button";
import { useNavigate } from "react-router-dom";

function TrainingCard({ training }) {
  const navigate = useNavigate();

  if (!training) {
    return null;
  }

  const handleViewDetails = () => {
   navigate(`/checkout`, { state: { training } });
  };

  return (
    <div className="w-96 md:w-80 mt-2 group bg-inherit">
      <div className="relative flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-xl">
        {/* Image */}
        <div className="overflow-hidden h-48">
          <img
            src={training.image}
            alt={training.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300?text=Course+Image";
            }}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-teal-600 font-medium">
              {training.platform}
            </span>
            <span className="text-sm text-gray-500">
              {training.duration}
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {training.name}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {training.description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="text-lg font-bold text-teal-600">
              {training.price > 0 ? `$${training.price}` : 'Free'}
            </div>
            <Button variant="primary" onClick={handleViewDetails}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
