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
      {/* <Container className="py-14 px-4 w-full"> */}
      <LiveClasses />
      <SkillsSection />
      <SubscriptionSection />
      <Testimonial />
      {/* <CourseDetails /> */}
      <RealWorldChallenge refProp={ref} isInView={isInView} />
      {/* </Container> */}
    </>
  );
};

export default Cources;
