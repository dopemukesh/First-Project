// Designed and developed by:
// - Mukesh Yadav

import React, { Suspense } from "react";
import Loader from "./Loader";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import { AppRoutes } from "./AppRoutes";

const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Suspense fallback={<Loader />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </>
  );
};

export default App;