/* eslint-disable no-unused-vars */
// Designed and developed by:
// - Mukesh Yadav

import React, { useRef } from "react";
import LiveClasses from "./LiveClass/LiveClasses";
import SubscriptionSection from "./Subscription/SubscriptionSection";
import Testimonial from "./Testimonials/Testimonial";
import { useInView } from "motion/react";
import CategorySection from "./CategorySection/CategorySection";


const Cources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <LiveClasses />
      <CategorySection
        topHeader="All the skills you need in one place"
        parentRoute={'classes'}
        endpoint={'v1/classes/all'}
      />
      <SubscriptionSection />
      <Testimonial />
    </>
  );
};

export default Cources;
