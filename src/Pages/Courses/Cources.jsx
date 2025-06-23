/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import Container from "../../Components/Common/Container/Container";
import projectData from "../../api/ProjectDetails.json";
import { Button } from "../../Components/Common/Button/Button";
import { Navigate } from "react-router-dom";
import LiveClasses from "./LiveClass/LiveClasses";
import SkillsSection from "./SkillsSection/SkillsSection";
import SubscriptionSection from "./Subscription/SubscriptionSection";
import Testimonial from "./Testimonials/Testimonial";
import CourseDetails from "./CourseDetail/CourseDetails";
import React, { useRef } from "react";
import { useInView } from "motion/react";
import RealWorldChallenge from "../../Pages/Home/Promotion/RealWorldChallenge";


const Cources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <LiveClasses />
      <SkillsSection
        topHeader="All the skills you need in one place"
        parentRoute={'classes'}
        category
      />
      <SubscriptionSection />
      <Testimonial />
    </>
  );
};

export default Cources;
