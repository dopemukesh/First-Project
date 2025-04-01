// Designed and developed by:
// - Mukesh Yadav

import React, { Suspense } from "react";
import Loader from "./Loader";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import { AppRoutes } from "./AppRoutes";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Loader />
      <Navbar />
      <div className="flex-grow">
        <Suspense fallback={<div />}>
          <AppRoutes />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
