import React from "react";
import members from "../../api/MembersData.json";
import { NavLink } from "react-router-dom";

const MemberCard = ({ filters = {} }) => {
  const filteredMembers = members.filter((member) => {
    // Loop through all filter keys and check if each matches
    return Object.entries(filters).every(([key, value]) => {
      return member[key] === value;
    });
  });

  return (
    <>
      <div className="my-8 flex gap-4 flex-wrap justify-center">
        {filteredMembers.length > 0 ? (
          filteredMembers.map(
            ({ name, image, path, position, description, status, role }) => (
              <NavLink to={path || "/"} key={image}>
                <div className="w-80 flex-1 flex bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-xl p-4 hover:scale-105 transition-transform duration-500 ease-in-out">
                  <img
                    src={image}
                    alt={`${name} profile`}
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="w-full ml-4">
                    <div className="w-full flex justify-between items-center">
                      <p className="dark:text-gray-300 text-sm font-semibold">
                        {name}
                      </p>
                      {status && (
                        <p className="text-white text-[8px] px-3 py-1 bg-emerald-500 rounded absolute -top-3 left-4">
                          {status}
                        </p>
                      )}
                      <p className="text-gray-500 text-[8px] font-medium p-1 bg-gray-200 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700">
                        {position}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
              </NavLink>
            )
          )
        ) : (
          <p>No contributors found.</p>
        )}
      </div>
    </>
  );
};

export default MemberCard;
