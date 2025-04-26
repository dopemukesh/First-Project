import React, { useState } from "react";
import Container from "../../Components/Common/Container/Container";
import { Button } from "../../Components/Common/Button/Button";
import Dropdown from "../Career/PostJob/Dropdown";
import { NavLink } from "react-router-dom";
import Logo from "../../Components/Common/Logo/Logo";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "Developer", // default role
  });

  const roles = ["Student", "Developer", "Recruiter"]; // roles of users

  const inputClass =
    "w-full h-10 px-3 py-2 border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900/10 backdrop-blur rounded-lg text-left focus:border-teal-600 dark:focus:border-teal-500 outline-none";

  const bgGrads =
    "bg-gradient-to-tl from-yellow-800/5 via-transparent to-teal-500/5 backdrop-blur border border-gray-200 dark:border-gray-700/50 shadow-2xl shadow-gray-300 dark:shadow-gray-950 rounded-2xl";

  const labelTexts =
    "block mb-1.5 text-sm font-medium text-gray-700 dark:text-gray-300";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container className="py-14">
      <div className="flex justify-center items-center p-4">
        <div className={`max-w-xl overflow-y-scroll w-full ${bgGrads}`}>
          {/* Header */}
          <div className="flex flex-col gap-4 px-4 py-8 backdrop-blur rounded-t-2xl">
            <div className="w-fit">
              <Logo />
            </div>
            <div>
              <h2 className="font-semibold">Create Account</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Join our community and start your journey
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 space-y-6">
            <div>
              <label className={labelTexts}>Full Name</label>
              <input
                type="text"
                className={inputClass}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

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
              <label className={labelTexts}>Password</label>
              <input
                type="password"
                className={inputClass}
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className={labelTexts}>Phone Number</label>
              <input
                type="tel"
                className={inputClass}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className={labelTexts}>Select Role</label>
              <Dropdown
                options={roles}
                placeholder="Select a role"
                defaultSelected={formData.role}
                onSelect={(selectedRole) =>
                  setFormData({ ...formData, role: selectedRole.toLowerCase() })
                }
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account ?{" "}
                <NavLink
                  to="/login"
                  className="text-teal-600 dark:text-teal-500 hover:underline"
                >
                  Sign in
                </NavLink>
              </p>
              <Button variant="secondary" type="submit" size="sm">
                Register Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
