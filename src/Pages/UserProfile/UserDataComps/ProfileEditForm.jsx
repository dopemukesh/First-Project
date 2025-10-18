import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FetchAPI from "../../../api/fetchAPI/FetchAPI2";
import {
  recruiterFields,
  studentFields,
  developerFields,
} from "./userFieldSchema";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { Button } from "../../../Components/Common/Button/Button";
import ActivityLogBtn from "./ActivityLogBtn";
import { showSuccessToast, showErrorToast } from "../../../Components/Common/Toast/ToastProvider";

const ProfileEditForm = () => {
  const { role, logout } = useCurrentUser();
  const navigate = useNavigate();

  const schemaMap = {
    student: studentFields,
    recruiter: recruiterFields,
    developer: developerFields,
  };

  const allowedFields = [
    "name",
    "username",
    "bio",
    "phoneNumber",
    "portfolioWebsite",
    "fieldOfInterest",
    "profilePicture",
    "age",
    "degree",
    "collegeName",
    "skills",
  ];

  const [formData, setFormData] = useState({});
  const [initialFormData, setInitialFormData] = useState({});
  const [activeSchema, setActiveSchema] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const [lastChangedValue, setLastChangedValue] = useState({});

  // Initialize form
  useEffect(() => {
    if (!role) return;

    const storedUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const fullSchema = schemaMap[role] || [];
    const basicSchema = fullSchema.filter((f) => allowedFields.includes(f.name));

    setActiveSchema(basicSchema);

    // Ensure skills are stored as a string in formData
    const initialData = Object.fromEntries(
      basicSchema.map((f) => {
        let value = storedUser[f.name] || "";
        // If skills is an array (from localStorage), join it to string
        if (f.name === "skills" && Array.isArray(value)) {
          value = value.join(", ");
        }
        return [f.name, value];
      })
    );

    setFormData(initialData);
    setInitialFormData(initialData);
    setLastChangedValue({});
    setIsChanged(false);
    setError(null);
  }, [role]);

  // Handle all input changes (skills remain as string)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Track last changed segment (for activity log)
    const prevValue = initialFormData[name] || "";
    let diff = "";
    if (typeof prevValue === "string" && typeof value === "string") {
      if (value.startsWith(prevValue)) {
        diff = value.slice(prevValue.length);
      } else if (prevValue.startsWith(value)) {
        diff = `${prevValue} ← [Deleted]`;
      } else {
        diff = value;
      }
    } else {
      diff = JSON.stringify(value);
    }

    setLastChangedValue((prev) => ({ ...prev, [name]: diff }));

    // Check if form is changed
    const updatedForm = { ...formData, [name]: value };
    const changed = Object.keys(updatedForm).some(
      (key) => updatedForm[key] !== initialFormData[key]
    );
    setIsChanged(changed);
  };

  // Submit handler — convert skills to array only here
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) return;

    setLoading(true);
    setError(null);

    try {
      // Helper: normalize skill string for comparison (lowercase, sorted, trimmed)
      const normalizeSkills = (str) => {
        if (typeof str !== "string") return "";
        return str
          .split(",")
          .map(s => s.trim().toLowerCase())
          .filter(Boolean)
          .sort()
          .join(",");
      };

      // Build payload with only changed fields
      const payload = {};
      let hasChanges = false;

      for (const key in formData) {
        const current = formData[key];
        const initial = initialFormData[key];

        if (key === "skills") {
          // Compare normalized skill strings
          if (normalizeSkills(current) !== normalizeSkills(initial)) {
            // Convert to clean array only if changed
            payload.skills = current
              .split(",")
              .map(s => s.trim())
              .filter(Boolean);
            hasChanges = true;
          }
        } else if (current !== initial) {
          payload[key] = current;
          hasChanges = true;
        }
      }

      // If nothing changed, skip API call
      if (!hasChanges) {
        showSuccessToast("No changes to save.");
        navigate("/profile");
        return;
      }

      const apiUrl = `v1/${role}s/updateprofile`;
      const response = await FetchAPI(apiUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        payload,
      });

      if (!response.success) throw new Error("Failed to update profile");

      const updatedUser = response.student || response.developer || response.recruiter;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ ...updatedUser, isLoggedIn: true, role })
      );

      // Re-sync form state (convert skills array → string for display)
      const newData = Object.fromEntries(
        activeSchema.map((field) => {
          let value = updatedUser[field.name] || "";
          if (field.name === "skills" && Array.isArray(value)) {
            value = value.join(", ");
          }
          return [field.name, value];
        })
      );

      setFormData(newData);
      setInitialFormData(newData);
      setLastChangedValue({});
      setIsChanged(false);

      showSuccessToast("Profile updated successfully!");
      navigate("/profile");
    } catch (err) {
      if (err.message.includes("Unauthorized") || err.message.includes("Token failed")) {
        logout();
      }
      showErrorToast(err.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (!activeSchema.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="max-w-full h-screen overflow-y-auto p-4 bg-white dark:bg-white/5 md:border-x dark:border-white/10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-5 h-full overflow-y-auto">
        {activeSchema.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder || field.label}
                rows={4}
                readOnly={field.readOnly}
                required={field.required}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none focus:border-teal-600"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder || field.label}
                readOnly={field.readOnly}
                required={field.required}
                className="w-full px-4 py-2 rounded-md border dark:border-gray-700 dark:bg-gray-800 dark:text-white outline-none focus:border-teal-600"
              />
            )}
          </div>
        ))}

        {error && <p className="text-red-500 text-center font-medium">{error}</p>}

        <div className="flex flex-col gap-2">
          <ActivityLogBtn lastChangedValue={lastChangedValue} />
          <div className="flex items-center justify-end gap-2">
            <Button to={-1} variant="outline2" size="ssm">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading || !isChanged}
              variant="warning"
              size="ssm"
            >
              {loading ? "Updating..." : "Update Profile"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;