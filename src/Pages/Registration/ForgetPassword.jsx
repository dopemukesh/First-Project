import React, { useState } from "react";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-rose-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Reset password link sent for:", email);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-md overflow-hidden w-full ${bgGrads}`}>
          {/* Header */}
          <div className="border-b border-gray-300 px-4 py-6 dark:border-gray-800 bg-gradient-to-tl from-teal-500/5 via-transparent to-teal-500/5 backdrop-blur rounded-t-2xl">
            <h2 className="font-semibold">Reset Password</h2>
            <p className="text-sm text-gray-500">
              Enter your email to reset your password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            <div>
              <label className={labelTexts}>Email Address</label>
              <input
                type="email"
                className={inputClass}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="mt-2 text-sm text-gray-500">
                We'll send you a link to reset your password
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
              <NavLink
                to="/login"
                className="text-sm text-teal-600 hover:underline"
              >
                Back to login
              </NavLink>
              <Button
                variant="secondary"
                type="submit"
                size="sm"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ForgetPassword;
