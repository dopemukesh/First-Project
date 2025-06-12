import React, { Suspense } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";
import ToastProvider from "./Components/Common/Toast/ToastProvider";
import JobDetails from "./Pages/Career/Jobs/Job-details";
import { AppRoutes } from "./AppRoutes";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ToastProvider />
      <ScrollToTop />
      <Loader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
        </Routes>
      </Suspense>
    </GoogleOAuthProvider>
  );
};

export default App;
