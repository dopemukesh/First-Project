import React, { useEffect, useState } from "react";
import { Button01 } from "../../../Components/Common/Button/Button";
import Container from "../../../Components/Common/Container/Container";
import { motion } from "motion/react";
import SearchBox from "../../../Components/Common/Search/SearchBox";
import { getRoleFromToken } from "../../../utils/GetUserRoleFromToken";

const HeroUI = () => {
  // State to track user login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData(user);
    }
  }, []);

  // Get user role from JWT token
  // const role = getRoleFromToken(localStorage.getItem("token"));
  const role = "developer"; // For testing purposes, you can set a default role

  // Role-based headings
  const roleHeadings = {
    recruiter: 'Transform Hiring with',
    student: 'Transform Your Learning with',
    developer: 'Transform Your Coding Career with',
    teacher: 'Transform Your Teaching with',
  };

  // Change the heading text based on role
  const headingText =
    isLoggedIn && role && roleHeadings[role]
      ? roleHeadings[role]
      : 'Transform Your Tech Career with';

  // role-specific subtexts
  const roleSubtexts = {
    recruiter: "Find top talent and grow your team with our trusted hiring tools.",
    student: "Learn cutting-edge skills with mentorship and live projects.",
    developer: "Level up your skills, collaborate, and land your dream job.",
    teacher: "Create impactful learning experiences for eager students.",
  };

  // fallback subtext
  const subText =
    isLoggedIn && role && roleSubtexts[role]
      ? roleSubtexts[role]
      : "Master in-demand skills, contribute to real projects, and connect with top techies, all in one community-driven platform.";


  // Render role-based button
  const renderButton = () => {
    if (isLoggedIn && userData && role) {
      switch (role) {
        case "recruiter":
          return <Button01 to="/career/post-job">Post a Job</Button01>;
        case "student":
          return <Button01 to="/classes">Start Learning</Button01>;
        case "developer":
          return <Button01 to="/career">Find a job</Button01>;
        case "teacher":
          return <Button01 to="/classes">Start a class</Button01>;
        default:
          return <Button01 to="/register">Get Started</Button01>;
      }
    }
    return <Button01 to="/register">Get Started</Button01>;
  };

  return (
    <>
      <Container className="py-14 h-fit items-center">
        <div className="flex flex-col items-center">
          <div className="mb-2 px-4">
            <SearchBox
              defaultText="Learners to Leaders"
              placeholderText="Search site..."
            />
          </div>

          <div className="flex flex-col my-8 space-y-6 items-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl max-w-3xl font-semibold text-center">
              {headingText} {" "}
              <span className="text-teal-600 dark:text-teal-500">
                &quot;CWT&quot;
              </span>
            </h1>
            <p className="px-4 text-gray-500 dark:text-gray-400 text-center max-w-xl">
              {subText}
            </p>
          </div>
          <div id="getStarted">
            {renderButton()}
          </div>
        </div>
      </Container>

      <Container className="relative">
        <img
          src="bg-gradient.png"
          alt=""
          className="absolute -z-10 left-0 w-full h-full blur-[86px] md:blur-[156px]"
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-10 flex flex-col items-center overflow-hidden rounded-2xl p-2 mb-14 bg-white/5"
        >
          <div className="rounded-xl overflow-hidden border-8 border-white/10">
            <img src="./images/vsCode-project.png" alt="" className="" />
          </div>
        </motion.div>
      </Container>
    </>
  );
};

export default HeroUI;
