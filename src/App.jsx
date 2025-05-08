import React, { Suspense } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppRoutes } from "./AppRoutes";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Loader";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ScrollToTop />
      <Loader />
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </GoogleOAuthProvider>
  );
};

export default App;
