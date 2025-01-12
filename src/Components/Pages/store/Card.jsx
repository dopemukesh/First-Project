// ReDesigned and developed by:
// - Mukesh Yadav

import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Common Components/Button";
import { IoMdArrowRoundForward } from "react-icons/io";

function Card({ book }) {
  return (
    <div className="w-full sm:w-80 md:w-[30rem]">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {/* Image Section */}
        <img
          className="object-cover w-full h-48 sm:h-64 md:h-auto md:w-48 rounded-t-lg md:rounded-none md:rounded-s-lg"
          src={book.image}
          alt=""
        />
        {/* Content Section */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {book.name}
          </h5>
          <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
            {book.description}
          </p>
          <NavLink to="">
            <Button variant='primary'>
              <p>Read More</p>
              <IoMdArrowRoundForward />
            </Button>
          </NavLink>
        </div>
      </a>
    </div>
  );
}

export default Card;
