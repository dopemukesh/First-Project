import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ContributorsList({ org, repo }) {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${org}/${repo}/contributors`
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    }

    fetchContributors();
  }, [org, repo]);

  return (
    <>
      {/* <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Contributors</h2>
        <p className="text-gray-600">
          Meet the amazing developers contributing to this project!
        </p>
      </div> */}

      <div className="flex gap-4 justify-center bg-green-500">
        {contributors.map((contributor, index) => (
          <NavLink
            key={index}
            to={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center w-60 gap-4 p-1 rounded-full cursor-default bg-gradient-to-tl from-white/10 via-transparent via-30% to-white/10 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950">
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="w-14 h-14 rounded-full"
              />
              <div className="text-">
                <h3 className="font-semibold">{contributor.login}</h3>
                <p className="text-gray-600">
                  Contributions: {contributor.contributions}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
