/* eslint-disable react/prop-types */
// ReDesigned and developed by:
// - Mukesh Yadav

import { Button } from "../../../Components/Common/Button/Button";
import { useNavigate } from "react-router-dom";

function Card({ book }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/book-details/${book.id}`);
  };

  return (
    <div className="w-full max-w-lg sm:max-w-lg">
      <div className="flex flex-col md:flex-row items-center overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        {/* Image Section */}
        <div className="w-full md:w-56 h-56 md:h-72 rounded-xl p-4 flex-shrink-0 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg scale-105 hover:scale-125 transition-all duration-500"
            src={book.image}
            alt={book.name}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between items-start p-5">
          <div>
            <h5 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.name}
            </h5>
            <p className="mt-2 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
              {book.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex justify-center sm:justify-start gap-3">
            <Button variant="secondary" size="sm">
              View Demo
            </Button>
            <Button size="sm" onClick={handleViewDetails}>
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
