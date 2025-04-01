import { useState, useEffect } from "react";

const ContributorsList = ({ owner, repo }) => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contributors`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contributors");
        }
        const data = await response.json();

        // Har contributor ki extra details fetch karna
        const contributorsWithDetails = await Promise.all(
          data.map(async (contributor) => {
            const userResponse = await fetch(
              `https://api.github.com/users/${contributor.login}`
            );
            const userData = await userResponse.json();
            return { ...contributor, ...userData };
          })
        );

        setContributors(contributorsWithDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [owner, repo]);

  if (loading) return <p>Loading contributors...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Contributors</h2>
      <ul className="space-y-4">
        {contributors.map((contributor) => (
          <li
            key={contributor.id}
            className="flex items-center space-x-4 p-3 border-b"
          >
            <img
              src={contributor.avatar_url}
              alt={contributor.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                {contributor.name || contributor.login}
              </a>
              <p className="text-gray-600 text-sm">@{contributor.login}</p>
              {contributor.bio && (
                <p className="text-gray-500 text-sm italic">
                  "{contributor.bio}"
                </p>
              )}
              <p className="text-gray-600 text-sm">
                Location: {contributor.location || "N/A"}
              </p>
              <p className="text-gray-600 text-sm">
                Followers : {contributor.followers} | Following :{" "}
                {contributor.following}
              </p>
              <p className="text-gray-600 text-sm">
                Contributions : {contributor.contributions} | Repos :{" "}
                {contributor.public_repos}
              </p>
              {contributor.twitter_username && (
                <a
                  href={`https://twitter.com/${contributor.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Twitter: @{contributor.twitter_username}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributorsList;
