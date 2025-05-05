import React, { useState } from "react";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import { NavLink } from "react-router-dom";
// import RegistrationData from '../../api/RegistrationData'
import GoogleSignIn from "./GoogleSignIn";
import validateLoginForm from "../../api/utils/validateLoginForm";
import { loginUser } from "../../api/services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";


  // backend connection start 👇🏻
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    const validationErrors = validateLoginForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // const payload = {
      //   email: formData.email.trim().toLowerCase(),
      //   password: formData.password,
      // };

      const response = await loginUser(formData);

      console.log("Login response:", response);

      if (response.token) {
        const currentUser = response.user;

        localStorage.setItem("token", response.token);
        // localStorage.setItem("currentUser", JSON.stringify({
        //   currentUser: currentUser,
        // }));

        if (formData.remember) {
          localStorage.setItem("currentUser", JSON.stringify({
            email: currentUser.email,
            name: currentUser.name,
            isLoggedIn: true,
            role: currentUser.role || 'undefined',
            picture: currentUser.profilePicture,
          }));
        }

        window.location.href = "/"; // Redirect to the desired page after successful login

      } else {
        throw new Error("Invalid login credentials");
      }

    } catch (error) {
      const errMsg = error.message || "Login failed. Please try again.";
      if (errMsg.toLowerCase().includes("email")) {
        setErrors(prev => ({ ...prev, email: errMsg }));
      } else if (errMsg.toLowerCase().includes("password")) {
        setErrors(prev => ({ ...prev, password: errMsg }));
      }
    }
  };
  // backend connection end 👆🏻

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-md overflow-hidden w-full ${bgGrads}`}>
          {/* Header */}
          <div className="text-center border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-smedium text-lg mb-1">Yooo, Welcome Back</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              First time here ?{" "}
              <NavLink
                to="/register"
                className="text-teal-600 dark:text-teal-500 hover:underline"
              >
                Register for free
              </NavLink>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            <div>
              <label className={labelTexts}>Email</label>
              <input
                type="email"
                className={`${inputClass} ${errors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              {errors.email && (
                <>
                  <p className="text-red-500 text-[12px] mt-2">{errors.email}</p>
                  {console.log("Email error : ", errors)} {/* Log the response for debugging */}
                </>
              )}
            </div>

            <div>
              <label className={labelTexts}>Password</label>
              <input
                type="password"
                className={`${inputClass} ${errors.password ? "border-red-500" : ""}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              {errors.password && (
                <p className="text-red-500 text-[12px] mt-2">{errors.password}</p>
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

            <div className="flex flex-col justify-center text-center">
              <div className="w-full py-4">
                <Button variant="secondary" type="submit" size="sm" className="w-full">
                  Sign in
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Don't have an account ?{" "}
                <NavLink
                  to="/register"
                  className="text-teal-600 dark:text-teal-500 hover:underline"
                >
                  Register
                </NavLink>
              </p>

            </div>

            {/* google sign in option */}
            <div className="border-t border-gray-300 pt-8 dark:border-gray-800">
              <GoogleSignIn />
            </div>

          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
