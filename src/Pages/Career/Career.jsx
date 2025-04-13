import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, X } from "lucide-react";
import Categories from "./Categories/Categories";
import RecommendedJobs from "./Recommend/RecommendedJobs";
import HeroStats from "./Hero/HeroStats";
import RealWorldChallenge from "../Home/Promotion/RealWorldChallenge";
import { Button } from "../../Components/Common/Button/Button";
import Dropdown from "./PostJob/Dropdown";
import Container from "../../Components/Common/Container/Container";
import ShowJobs from "./Jobs/ShowJobs";

export default function Careers() {
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Experience options
  const experienceOptions = [
    { value: "All Experience", label: "All Experience" },
    { value: "Fresher (0-1 Year)", label: "Fresher (0-1 Year)" },
    { value: "Junior (1-3 Years)", label: "Junior (1-3 Years)" },
    { value: "Senior (3+ Years)", label: "Senior (3+ Years)" },
  ];

  const handleClear = (setter) => {
    setter("");
    setShowResults(false);
  };

  const handleSearch = () => {
    setShowResults(true);
    console.log("Searching for:", { skill, experience, location });
  };

  const bgGrads =
    "bg-gradient-to-tl from-white/5 via-transparent via-40% to-teal-200/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 rounded-xl";

  return (
    <>
      <Container>
        <motion.div
          className="min-h-[696px] flex flex-col items-center justify-center px-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl max-w-3xl font-semibold text-center"
            // className="text-4xl sm:text-5xl md:text-7xl max-w-3xl font-semibold text-center bg-gradient-to-b from-teal-400 to-teal-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Dream Tech Job
          </motion.h1>

          <p className="px-4 text-gray-500 dark:text-gray-400 text-center max-w-xl">
            Discover opportunities that match your expertise and aspirations in
            the tech industry
          </p>

          <motion.div
            className={`border dark:border-gray-800 bg-white dark:bg-transparent shadow-xl shadow-gray-200 dark:shadow-gray-950 grid grid-cols-1 sm:grid-cols-2 md:flex gap-4 justify-between items-center p-1 rounded-2xl w-full max-w-5xl`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Search box */}
            <div
              className={`${bgGrads} flex w-full h-12 focus-within:ring-1 ring-teal-600 dark:ring-teal-500`}
            >
              <div className="h-full w-12 grid place-items-center">
                <Search
                  size={18}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="e.g Frontend, Backend, etc."
                className={`h-full w-full outline-none ps-1 pe-8 bg-transparent`}
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
              {skill && (
                <button
                  onClick={() => handleClear(setSkill)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Experience Dropdown */}
            <div
              className={`${bgGrads} flex w-full h-12 md:w-auto z-10 focus-within:ring-1 ring-teal-600 dark:ring-teal-500`}
            >
              <div className="h-full w-12 grid place-items-center">
                <Briefcase
                  size={18}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>

              <div className="flex p-1 w-full items-center">
                <Dropdown
                  options={experienceOptions.map((opt) => opt.label)} // string array
                  placeholder="Select experience"
                  selected={experience}
                  onSelect={setExperience}
                />
              </div>
            </div>

            {/* Location Search */}
            <div
              className={`${bgGrads} flex w-full h-12 focus-within:ring-1 ring-teal-600 dark:ring-teal-500`}
            >
              <div className="h-full w-12 grid place-items-center">
                <MapPin
                  size={18}
                  className="text-gray-500 dark:text-gray-400"
                />
              </div>

              <input
                type="text"
                placeholder="Location..."
                className={`h-full w-full outline-none ps-1 pe-8 bg-transparent`}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {location && (
                <button
                  onClick={() => handleClear(setLocation)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
              disabled={!skill && !experience && !location}
            >
              Search Jobs
            </Button>
          </motion.div>

          {/* Post Job Button */}
          <div className="mt-8">
            <Button to="post-job" size="lg">
              Post a Job
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Show jobs here on search  */}
      {showResults && <ShowJobs searchCriteria={{ skill, experience, location }} />}

      {/* Categories */}
      <Container>
        <Categories />
      </Container>

      {/* RecommendedJobs */}
      <RecommendedJobs />

      {/* HeroStats */}
      <HeroStats />

      {/* RealWorldChallenge */}
      <RealWorldChallenge />

    </>
  );
}
