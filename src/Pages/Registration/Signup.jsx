import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../../Components/Common/Container/Container";
import Logo from "../../Components/Common/Logo/Logo";
import FormDataFields from "./FormDataFields/FormDataFields";
import { validateSignupForm } from "../../api/utils/validateSignupForm";
import { registerUser } from "../../api/services/authService";
import {
  showErrorToast,
  showSuccessToast,
} from "../../Components/Common/Toast/ToastProvider";
import GoogleSignIn from "./GoogleSignIn";
import { Button } from "../../Components/Common/Button/Button";
import ThemeChange from "../../Components/Layout/Navbar/ThemeChange";

const roles = ["Student", "Developer", "Recruiter"];

const defaultFormData = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  bio: "",
  role: "",
  fieldOfInterest: "",
  linkedin: "",
  github: "",
  portfolioWebsite: "",
  skills: [""],
  experience: [
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  projects: [{ title: "", description: "", url: "", technologies: [""] }],
  position: "Available",
  openPositions: [],
  companyWebsite: "",
};

const defaultErrors = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  general: "",
};

const fieldStyle = {
  input:
    "w-full px-3 py-2 border dark:border-gray-600 focus:border-teal-600 outline-none bg-transparent rounded-lg placeholder-gray-500",
  label: "block mb-1 text-xs font-medium text-gray-500 dark:text-gray-400",
  input2:
    "w-full px-3 py-2 border border-gray-600 focus:border-teal-600 outline-none bg-transparent rounded-lg placeholder-gray-500 text-white",
  label2: "block mb-1 text-xs font-medium text-gray-400",
};

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState(defaultErrors);

  // Form input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    try {
      const validationErrors = validateSignupForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      const response = await registerUser(formData);
      if (response.success) {
        showSuccessToast("Registration successful!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        showErrorToast(response.message || "Registration failed.");
      }
    } catch (error) {
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

  return (
    <div className="min-h-screen grid md:grid-cols-2 py-14 md:py-0">
      {/* Left Section */}
      <div className="flex flex-col justify-center px-4 md:px-8 space-y-6">
        {/* Logo */}
        <div className="mb-6 w-fit">
          <Logo className="scale-150 origin-left" />
        </div>
        {/* Title */}
        <div>
          <h2 className="text-3xl font-semibold">Create your account</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Join our community and start your journey
          </p>
        </div>
        {/* Social Buttons */}
        <div className="space-y-3">
          <GoogleSignIn labelText={"Continue with Google"} />
        </div>
        {/* Divider */}
        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm my-2">
          <span className="h-[1px] w-full bg-gray-300 dark:bg-gray-800"></span>
          <span>OR</span>
          <span className="h-[1px] w-full bg-gray-300 dark:bg-gray-800"></span>
        </div>
        {/* Email and Password Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={fieldStyle.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={`${fieldStyle.input} ${
                errors?.email ? "ring-1 ring-red-500" : ""
              }`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className={fieldStyle.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className={`${fieldStyle.input} ${
                errors?.password ? "ring-1 ring-red-500" : ""
              }`}
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>
          <div className="block md:hidden">
            <FormDataFields
              formData={formData}
              errors={errors}
              isLoading={isLoading}
              inputClass={fieldStyle.input}
              labelTexts={fieldStyle.label}
              roles={roles}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          </div>
          <Button
            variant="secondary"
            type="submit"
            size="md"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Continue"}
          </Button>
        </form>
        {/* Footer */}
        <p className="text-sm text-gray-500 pt-2">
          Already have an account?{" "}
          <NavLink to="/login" className="text-teal-600 font-medium">
            Login
          </NavLink>
        </p>
        <p className="text-xs text-gray-600 pt-4">
          By continuing, you agree to the{" "}
          <span className="underline">Terms of Service</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
      {/* Right Section */}
      <div className="relative hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden px-6 py-8">
        {/* Gradient Background Blob */}
        <div className="absolute bottom-[-150px] w-full h-[500px] bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-50 rounded-full"></div>
        {/* Input Bubble */}
        <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-2 ps-4 flex items-center gap-3 text-white mb-6">
          <span>
            Enter your extra details here like{" "}
            <span className="font-semibold">Fullname</span>
          </span>
          <button className="rounded-full">
            <ThemeChange className="bg-white dark:bg-gray-950 hover:bg-gray-200 dark:hover:bg-white/10" />
          </button>
        </div>
        {/* Developer Fields Section */}
        <div className="relative z-10 hidden md:block w-full max-w-sm overflow-y-auto h-[600px] bg-black/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-lg">
          <FormDataFields
            formData={formData}
            errors={errors}
            isLoading={isLoading}
            inputClass={fieldStyle.input2}
            labelTexts={fieldStyle.label2}
            roles={roles}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
