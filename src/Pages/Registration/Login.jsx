import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Custom components & utilities
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import GoogleSignIn from "./GoogleSignIn";
import validateLoginForm from "../../api/utils/validateLoginForm";
import { getUserProfile, loginUser } from "../../api/services/authService";
import { getRoleFromToken } from "../../utils/GetUserRoleFromToken";
import { showErrorToast, showSuccessToast } from "../../Components/Common/Toast/ToastProvider";
import usePWAInstall from '../../hooks/usePWAInstall';

const Login = () => {
  const { canInstall, promptInstall } = usePWAInstall();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // UI utility classes
  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";
  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";
  const labelTexts = "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });
    setLoading(true);

    try {
      const validationErrors = validateLoginForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        showErrorToast("Please fix the highlighted errors.");
        return;
      }

      const response = await loginUser(formData);

      if (response.token) {
        const token = response.token;
        localStorage.setItem("token", token);

        const profile = await getUserProfile();
        const role = getRoleFromToken(token);
        const userData = profile[role];

        localStorage.setItem("currentUser", JSON.stringify({ ...userData, isLoggedIn: true }));
        localStorage.setItem("showInstall", "true");

        showSuccessToast("Login successful!");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      const errMsg = error.message || "Login failed. Please try again.";
      if (errMsg.toLowerCase().includes("email")) {
        setErrors(prev => ({ ...prev, email: errMsg }));
      } else if (errMsg.toLowerCase().includes("password")) {
        setErrors(prev => ({ ...prev, password: errMsg }));
      } else {
        showErrorToast(errMsg);
      }
    } finally {
      setFormData({ email: "", password: "" });
      setLoading(false);
    }
  };

  // Trigger PWA install prompt if available
  useEffect(() => {
    if (canInstall) promptInstall();
  }, [canInstall, promptInstall]);

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-md overflow-hidden w-full ${bgGrads}`}>
          {/* Header */}
          <div className="text-center border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-smedium text-lg mb-1">Yooo, Welcome Back</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              First time here?{" "}
              <NavLink to="/register" className="text-teal-600 dark:text-teal-500 hover:underline">
                Register for free
              </NavLink>
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} autoComplete="off" className="p-4 space-y-6">
            {/* Email Input */}
            <div>
              <label className={labelTexts}>Email</label>
              <input
                type="email"
                className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                autoComplete="new-email"
              />
              {errors.email && (
                <p className="text-red-500 text-[12px] mt-2">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className={labelTexts}>Password</label>
              <input
                type="password"
                className={`${inputClass} ${errors.password ? "border-red-500" : ""}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                autoComplete="new-password"
              />
              {errors.password && (
                <p className="text-red-500 text-[12px] mt-2">{errors.password}</p>
              )}
            </div>

            {/* Forget Password */}
            <div className="flex items-center justify-end">
              <NavLink
                to="/forget-password"
                className="text-sm text-teal-600 dark:text-teal-500 hover:underline"
              >
                Forget password?
              </NavLink>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-center text-center">
              <div className="w-full py-4">
                <Button variant="secondary" type="submit" size="sm" className="w-full" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </Button>
              </div>

              {/* Registration Link */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <NavLink
                  to="/register"
                  className="text-teal-600 dark:text-teal-500 hover:underline"
                >
                  Register
                </NavLink>
              </p>
            </div>

            {/* OR Divider */}
            <div className="flex items-center">
              <i className="w-full block h-[0.1px] bg-gray-300 dark:bg-gray-800"></i>
              <span className="px-2 text-sm text-gray-400 dark:text-gray-500">or</span>
              <i className="w-full block h-[0.1px] bg-gray-300 dark:bg-gray-800"></i>
            </div>

            {/* Google Sign In */}
            <div>
              <GoogleSignIn labelText={'Sign in with Google'}/>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
