// src/hooks/useCurrentUser.js
import { useEffect, useState, useCallback } from "react";
import { getRoleFromToken } from "../utils/GetUserRoleFromToken";

// Custom events for cross-component sync
const AUTH_EVENTS = {
  LOGIN: "auth:login",
  LOGOUT: "auth:logout",
};

// Call this after successful login
export const triggerLogin = (userData) => {
  localStorage.setItem("currentUser", JSON.stringify(userData));
  window.dispatchEvent(
    new CustomEvent(AUTH_EVENTS.LOGIN, { detail: userData })
  );
};

// Call this on logout
export const triggerLogout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
  window.dispatchEvent(new CustomEvent(AUTH_EVENTS.LOGOUT));
};

export function useCurrentUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
    picture: "",
    // Role-specific fields will be added dynamically
  });

  const updateAuthState = useCallback(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);

        const token = localStorage.getItem("token");
        const role = getRoleFromToken(token);

        // Extract role: check if user has 'role' field, else infer from keys
        let userRole = role || "";
        if (!userRole) {
          // Fallback: if user has 'specialization' → teacher, 'companyName' → recruiter, etc.
          if (user.specialization !== undefined) userRole = "teacher";
          else if (user.companyName !== undefined) userRole = "recruiter";
          else if (user.enrolledCourses !== undefined) userRole = "student";
          else if (user.permissions !== undefined) userRole = "admin";
          else userRole = "user";
        }

        setIsLoggedIn(true);
        setRole(userRole);

        // Preserve all fields (including role-specific ones)
        setUserData({
          _id: user._id || user.id || "",
          name: user.name || "",
          email: user.email || "",
          picture: user.picture || user.avatar || "",
          ...user, // Spread all other fields (specialization, companyName, etc.)
        });
      } catch (e) {
        console.error("Failed to parse user data", e);
        triggerLogout();
      }
    } else {
      setIsLoggedIn(false);
      setRole("");
      setUserData({
        _id: "",
        name: "",
        email: "",
        picture: "",
      });
    }
  }, []);

  useEffect(() => {
    updateAuthState();

    const handleLogin = () => updateAuthState();
    const handleLogout = () => updateAuthState();

    window.addEventListener(AUTH_EVENTS.LOGIN, handleLogin);
    window.addEventListener(AUTH_EVENTS.LOGOUT, handleLogout);

    return () => {
      window.removeEventListener(AUTH_EVENTS.LOGIN, handleLogin);
      window.removeEventListener(AUTH_EVENTS.LOGOUT, handleLogout);
    };
  }, [updateAuthState]);

  return {
    isLoggedIn,
    role,
    userData,
    logout: triggerLogout,
  };
}
