import React from "react";
import members from "../../api/MembersData.json";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Common/Button/Button";

const MemberCard = ({ filters = {} }) => {
  const filteredMembers = members.filter((member) => {
    // Loop through all filter keys and check if each matches
    return Object.entries(filters).every(([key, value]) => {
      return member[key] === value;
    });
  });

  return (
    <>
      <div className="my-8 flex gap-4 flex-wrap justify-center items-end">
        {filteredMembers.length > 0 ? (
          filteredMembers.map(
            ({ name, image, githubUrl, description, status }) => (
              <NavLink to={githubUrl || "/"} key={image}>
                <div
                  className={`w-80 flex flex-col flex-1 items-center bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out overflow-hidden`}
                >
                  {status ? (
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center px-3 py-1 w-full">
                      <p className="text-white text-[10px] font-medium w-full">
                        {status}
                      </p>
                      <Button variant="secondary" size="xs">
                        View
                      </Button>
                    </div>
                  ) : null}

                  <div className="flex items-center w-full p-2">
                    <img
                      src={image}
                      alt={`${name} profile`}
                      className="w-14 h-14 rounded-lg"
                    />
                    <div className="w-full ml-4">
                      <div className="w-full flex justify-between items-center">
                        <p className="dark:text-gray-300 text-sm font-semibold">
                          {name}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">{description}</p>
                    </div>
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

export const MemberAvatar = ({ filters = {} }) => {
  const filteredMembers = members.filter((member) => {
    // Loop through all filter keys and check if each matches
    return Object.entries(filters).every(([key, value]) => {
      return member[key] === value;
    });
  });

  const showMembers = 4; // Number of members to show in avatars
  return (
    <>
      <div className="py-10 mt-4 -space-x-2 w-full h-full flex flex-wrap justify-center items-center">
        {filteredMembers.length > 0 ? (
          <>
            {filteredMembers
              .slice(0, showMembers)
              .map(({ name, image, githubUrl, position }, index) => (
                <NavLink to={githubUrl || "/"} key={index}>
                  <div className="relative p-0.5 bg-gray-300 hover:bg-purple-500 hover:z-50 rounded-full shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-500 ease-in group">
                    <img
                      src={image}
                      alt={`${name} profile`}
                      className="w-14 h-14 rounded-full"
                    />
                    <div className="absolute hidden group-hover:flex group-hover:animate-bounce -top-[38px] left-[50%] right-[50%] z-10 items-center flex-col">
                      <p className="whitespace-nowrap font-semibold text-sm">
                        {name}
                      </p>
                      <p className="whitespace-nowrap text-[10px] text-gray-500">
                        {position}
                      </p>
                      <i className="bg-purple-500 w-2 h-2 rotate-45"></i>
                    </div>
                  </div>
                </NavLink>
              ))}

            {filteredMembers.length > showMembers && (
              <div className="relative p-0.5 bg-gray-700 dark:bg-gray-700 hover:bg-purple-500 hover:z-50 rounded-full shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-500 ease-in group">
                <div className=" h-14 w-14 rounded-full flex items-center justify-center">
                  <p className="whitespace-nowrap text-white font-semibold text-2xl">
                    +{filteredMembers.length - showMembers}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <p>No contributors found.</p>
        )}
      </div>
    </>
  );
};
