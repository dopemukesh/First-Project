import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// 🌐 Common Components
import Container from "../../Components/Common/Container/Container";
import Logo from "../../Components/Common/Logo/Logo";
import FormDataFields from "./FormDataFields/FormDataFields";

// ✅ Utilities & API Services
import { validateSignupForm } from "../../api/utils/validateSignupForm";
import { registerUser } from "../../api/services/authService";

// 🔔 Toast Notifications
import { showErrorToast, showSuccessToast } from "../../Components/Common/Toast/ToastProvider";
import GoogleSignIn from "./GoogleSignIn";

const Signup = () => {
  const navigate = useNavigate();

  // 🌐 Local State for Form & Loading
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    experience: "",
    fieldOfInterest: "",
    linkedin: "",
    github: "",
    position: "Available", // New field for openings
    openPositions: [],
    companyWebsite: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    general: "",
  });

  // 👤 Roles available for registration
  const roles = ["Student", "Developer", "Recruiter"];
  const matchedRole = roles.includes("Student");

  // 🎨 UI Classes
  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  // 📌 Input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // 🚀 Submit Handler - Backend Interaction
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors and indicate loading
    setErrors({});
    setIsLoading(true);

    try {
      // ✅ Frontend Validation
      const validationErrors = validateSignupForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      // ✅ Backend API Call
      const response = await registerUser(formData);

      if (response.success) {
        showSuccessToast("Registration successful!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        showErrorToast(response.message || "Registration failed.");
      }

    } catch (error) {
      // ❌ Handle Backend Errors & MongoDB Conflict Messages
      let errorMessage = "An unexpected error occurred.";

      if (error?.message?.includes("E11000")) {
        if (error.message.includes("phoneNumber")) {
          errorMessage = "Phone number already registered!";
        } else if (error.message.includes("email")) {
          errorMessage = "Email already registered!";
        } else if (error.message.includes("username")) {
          errorMessage = "Username already registered!";
        }
      } else if (error?.message?.includes("NetworkError")) {
        errorMessage = "Network error. Please try again.";
      } else if (error?.message) {
        errorMessage = error.message;
      }

      showErrorToast(errorMessage);

    } finally {
      setIsLoading(false);
    }
  };

  // 🧱 JSX Layout
  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-xl overflow-y-scroll w-full ${bgGrads}`}>

          {/* 🔰 Header with Logo */}
          <div className="flex items-center gap-4 px-4 py-8 backdrop-blur rounded-t-2xl">
            <div className="w-fit"><Logo /></div>
            <div>
              <h2 className="font-semibold">Create Account</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Join our community and start your journey
              </p>
            </div>
          </div>

          {/* 🎓 Role Restriction Message */}
          {matchedRole && roles.length === 1 && (
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              Only <span className="text-amber-500 font-semibold animate-pulse">Students</span> can register for now
            </p>
          )}

          {/* 📝 Form Fields Section */}
          <FormDataFields
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            inputClass={inputClass}
            labelTexts={labelTexts}
            roles={roles}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
          />

          {/* OR Divider */}
          <div className="flex items-center">
            <i className="w-full block h-[0.1px] bg-gray-300 dark:bg-gray-800"></i>
            <span className="px-2 text-sm text-gray-400 dark:text-gray-500">or</span>
            <i className="w-full block h-[0.1px] bg-gray-300 dark:bg-gray-800"></i>
          </div>

          {/* Google Sign In */}
          <div className="my-4 mx-4">
            <GoogleSignIn labelText='Sign up with Google' />
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Signup;
