import React from "react";

function TraningCard({ traning }) {
  return (
    <>
      <div class=" grid place-content-center w-72 my-2">
        <div class=" text-white p-8 text-center h-auto max-w-sm mx-auto rounded-md">
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl min-w-72 mx-auto mt-1 min-h-48">
            <img
              src={traning.image}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90">
              <h3 class="relative mt-10 text-xl font-bold text-white">
                {traning.name}
              </h3>
            </div>
          </article>
        </div>
        <div class="bg-white py-2 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 mx-auto max-w-56 h-auto">
          <h2 class="text-md my-2 font-bold">Course Instructor</h2>
          <img
            class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src={traning.instructor.image}
            alt="User avatar"
          />
          <p class="capitalize text-xl mt-1">{traning.instructor.name}</p>
          <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto my-2">
            <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
            Free
          </span>
          <button class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-2 py-1 inline text-sm my-2">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
}

export default TraningCard;
