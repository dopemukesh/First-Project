import React, { useState } from "react";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import { NavLink } from "react-router-dom";
import RegistrationData from '../../api/RegistrationData'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user with matching email
    const user = RegistrationData.find(user => user.email === formData.email);

    if (!user) {
      setError("Email not found. Please check your email or register.");
      return;
    }

    // Validate password
    if (user.password !== formData.password) {
      setError("Invalid password. Please try again.");
      return;
    }

    // Clear any previous errors
    setError("");

    // Save user data in localStorage if remember is checked
    if (formData.remember) {
      localStorage.setItem("currentUser", JSON.stringify({
        email: user.email,
        name: user.name,
        isLoggedIn: true
      }));
    }

    // TODO: Add your navigation logic here after successful login
    console.log("Login successful!");
    window.location.href = '/';
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-md overflow-hidden w-full ${bgGrads}`}>
          {/* Header */}
          <div className="border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-semibold">Welcome Back</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            <div>
              <label className={labelTexts}>Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <div>
              <label className={labelTexts}>Password</label>
              <input
                type="password"
                className={inputClass}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
            <div>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded text-teal-600 focus:ring-teal-500"
                  checked={formData.remember}
                  onChange={(e) =>
                    setFormData({ ...formData, remember: e.target.checked })
                  }
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Remember me
                </span>
              </label>

              <NavLink
                to="/forget-password"
                className="text-sm text-teal-600 dark:text-teal-500 hover:underline"
              >
                Forget password?
              </NavLink>
            </div>

            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don't have an account ?{" "}
                <NavLink
                  to="/register"
                  className="text-teal-600 dark:text-teal-500 hover:underline"
                >
                  Sign up
                </NavLink>
              </p>
              <Button variant="secondary" type="submit" size="sm">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
