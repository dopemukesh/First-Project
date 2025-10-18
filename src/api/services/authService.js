import { getRoleFromToken } from "../../utils/GetUserRoleFromToken";
import FetchAPI from "../fetchAPI/FetchAPI";

// Role-based endpoints
const ROLE_ENDPOINTS = {
    student: "v1/students/register",
    developer: "v1/developers/register",
    recruiter: "v1/recruiters/register"
};

// Common payload fields
const getCommonPayload = (formData) => ({
    name: formData.fullName.trim(),
    email: formData.email.toLowerCase().trim(),
    password: formData.password,
    phoneNumber: formData.phone.trim(),
    username: formData.email.split("@")[0].toLowerCase(),
    bio: formData.bio || "N/A",
    role: formData.role.toLowerCase()
});

// Developer specific fields
const getDeveloperPayload = (formData) => ({
    projects: formData.projects,
    skills: formData.skills,
    experience: formData.experience,
    fieldOfInterest: formData.fieldOfInterest || "N/A",
    linkedin: formData.linkedin || "N/A",
    github: formData.github || "N/A",
    portfolioWebsite: formData.portfolioWebsite || "N/A"
});

// Developer specific fields
const getRecruiterPayload = (formData) => ({
    position: formData.openings,
    linkedin: formData.linkedin || "N/A",
    companyWebsite: formData.companyWebsite,
    openPositions: formData.openPositions || "N/A",
});

// User registration here
export const registerUser = async (formData) => {
    try {
        const normalizedRole = formData.role.toLowerCase();

        if (!ROLE_ENDPOINTS[normalizedRole]) {
            throw new Error("Invalid role selected");
        }

        const payload = {
            ...getCommonPayload(formData),
            ...(normalizedRole === "developer" && getDeveloperPayload(formData)),
            ...(normalizedRole === "recruiter" && getRecruiterPayload(formData)),
        };

        console.log("User Payload : ", payload);


        const response = await FetchAPI(ROLE_ENDPOINTS[normalizedRole], {
            method: "POST",
            payload
        });

        console.log("Registration response:", response);
        return response;
    } catch (error) {
        console.log("Registration error:", error);
        throw error;
    }
};

// User login here
export const loginUser = async (formData) => {
    try {
        const { email, password } = formData;

        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        const payload = {
            email: email.trim().toLowerCase(),
            password
        };

        const response = await FetchAPI("v1/auth/login", {
            method: "POST",
            payload
        });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

// User profile fetching
export const getUserProfile = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Token not found. Please login again.");
        }

        const role = getRoleFromToken(token);
        if (!role) {
            throw new Error("User role not found in token.");
        }

        const PROFILE_ENDPOINTS = {
            student: "v1/students/myprofile",
            developer: "v1/developers/myprofile",
            recruiter: "v1/recruiters/myprofile",
            teacher: "v1/teachers/myprofile",
            admin: "v1/admin/myprofile"
        };

        const endpoint = PROFILE_ENDPOINTS[role.toLowerCase()];
        if (!endpoint) {
            throw new Error(`No profile endpoint found for role "${role}"`);
        }

        const response = await FetchAPI(endpoint, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response;
    } catch (error) {
        console.error("Profile fetch error:", error);
        throw error;
    }
};