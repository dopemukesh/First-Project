// Set the status bar theme color based on stored theme
const theme = localStorage.getItem('theme') || 'light';
const themeColorMeta = document.getElementById('theme-color-meta');

const lightThemeColor = '#ffffff'; // adjust as per your light theme
const darkThemeColor = '#030712';  // adjust as per your dark theme

if (themeColorMeta) {
  themeColorMeta.setAttribute('content', theme === 'dark' ? darkThemeColor : lightThemeColor);
}

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}


// App code below
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
