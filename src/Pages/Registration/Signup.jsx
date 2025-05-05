import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Common/Container/Container";
import Logo from "../../Components/Common/Logo/Logo";
import FormDataFields from "./FormDataFields/FormDataFields";
import { validateSignupForm } from "../../api/utils/validateSignupForm";
import { registerUser } from "../../api/services/authService";

const Signup = () => {
  const navigate = useNavigate();
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
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    general: "",
  });

  const roles = ["Student", "Developer", "Recruiter"];

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors and set loading
    setErrors({});
    setIsLoading(true);

    try {
      // Frontend validation
      const validationErrors = validateSignupForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      // API call
      const response = await registerUser(formData);

      // Handle successful response
      if (response?.result?.token ) {
        localStorage.setItem("token", response.result.token);
        localStorage.setItem("user", JSON.stringify({
          name: response.result.user?.name,
          email: response.result.user?.email,
          role: response.result.user?.role
        }));
        navigate("/login");
        return;
      }

      // Handle API error response
      setErrors({ general: response.message || "Registration failed" });

    } catch (e) {
      // Simplified error handling
      const errorMessage =
        e.message.includes("email") ? "Email already registered!" :
          e.message.includes("E11000") && e.message.includes("phoneNumber") ? "Phone number already registered!" :
            e.message.includes("E11000") && e.message.includes("email") ? "Email already registered!" :
              e.message.includes("E11000") && e.message.includes("username") ? "Username already registered!" :
                e.message.includes("NetworkError") ? "Network error, please try again." :
                  e.message || "An unexpected error occurred.";

      setErrors({ general: errorMessage });

    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-xl overflow-y-scroll w-full ${bgGrads}`}>
          <div className="flex flex-col gap-4 px-4 py-8 backdrop-blur rounded-t-2xl">
            <div className="w-fit"><Logo /></div>
            <div>
              <h2 className="font-semibold">Create Account</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join our community and start your journey
              </p>
            </div>
          </div>

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
        </div>
      </div>
    </Container>
  );
};

export default Signup;
