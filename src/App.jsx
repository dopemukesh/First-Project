// Designed and developed by:
// - Mukesh Yadav

import React, { Suspense } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loader from "./Loader";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import { AppRoutes } from "./AppRoutes";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Loader />
        <Navbar />
        <div className="flex-grow">
          <Suspense fallback={<div />}>
            <AppRoutes />
          </Suspense>
        </div>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
