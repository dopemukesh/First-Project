import React from "react";
import { Navigate } from "react-router-dom";

const ROLE_PRIORITY = {
    teacher: 1,
    admin: 2,
    superadmin: 3
};

// role checking in token 
function getRoleFromToken(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role;
    } catch {
        return null;
    }
}

// token expiry validation checking
function isTokenValid(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp * 1000;
        return Date.now() < exp;
    } catch (err) {
        return false;
    }
}

const ProtectedRoutes = ({ children, minimumRole = "teacher" }) => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const token = localStorage.getItem("token");

    if (!user || !token || !isTokenValid(token)) {
        return <Navigate to="/login" replace />;
    }

    // const userRole = user.role && getRoleFromToken(token); 
    const userRole = user.role;
    const userLevel = ROLE_PRIORITY[userRole];
    const requiredLevel = ROLE_PRIORITY[minimumRole];

    if (!userLevel || !requiredLevel || userLevel < requiredLevel) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoutes;
