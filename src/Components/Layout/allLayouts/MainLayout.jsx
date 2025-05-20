// src/layouts/MainLayout.jsx
import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useInView } from "framer-motion";
import RealWorldChallenge from "../../../Pages/Home/Promotion/RealWorldChallenge";

const MainLayout = () => {

// for real word challenge
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <RealWorldChallenge refProp={ref} isInView={isInView} />
            <Footer />
        </div>
    );
};

export default MainLayout;
