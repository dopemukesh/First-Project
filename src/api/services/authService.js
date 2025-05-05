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
    role: formData.role.toLowerCase()
});

// Developer specific fields
const getDeveloperPayload = (formData) => ({
    experience: formData.experience || "0-1 years",
    fieldOfInterest: formData.fieldOfInterest || "Web Development",
    linkedin: formData.linkedin || "",
    github: formData.github || ""
});

export const registerUser = async (formData) => {
    try {
        const normalizedRole = formData.role.toLowerCase();

        if (!ROLE_ENDPOINTS[normalizedRole]) {
            throw new Error("Invalid role selected");
        }

        const payload = {
            ...getCommonPayload(formData),
            ...(normalizedRole === "developer" && getDeveloperPayload(formData))
        };

        const response = await FetchAPI(ROLE_ENDPOINTS[normalizedRole], {
            method: "POST",
            payload
        });

        return response;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

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