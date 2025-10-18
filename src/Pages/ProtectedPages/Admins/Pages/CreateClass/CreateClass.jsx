// CreateClass.jsx
import React, { useState } from "react";
import FetchAPI from "../../../../../api/fetchAPI/FetchAPI";
import { Button } from "../../../../../Components/Common/Button/Button";
import { useCurrentUser } from "../../../../../hooks/useCurrentUser";
import { showSuccessToast, showErrorToast } from "../../../../../Components/Common/Toast/ToastProvider";
import ClassInfoSection from "./comp/ClassInfoSection";
import PricingInfoSection from "./comp/PricingInfoSection";
import TeacherInfoSection from "./comp/TeacherInfoSection";

const CreateClass = () => {
  const { userData } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    className: "",
    category: "",
    shortDescription: "",
    longDescription: "",
    teacherName: "",
    teacherSpecialization: "",
    teacherRating: 0,
    originalPrice: "",
    discountedPrice: "",
    relatedTopics: [],
    courseIncludes: [],
    whatYouWillLearn: [],
    thisCourseIncludes: [],
    WhatsAppCommunityLink: "",
    language: "English",
  });

  const inputClass = "w-full px-3 py-2 border border-gray-300 dark:border-white/20 outline-none focus:border-sky-500 bg-white dark:bg-gray-900/10 rounded-lg text-sm";
  const sectionClass = "bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-300 dark:border-white/20";
  const labelText = "block mb-1.5 text-xs text-gray-600 dark:text-gray-300";
  const languageOptions = ["English", "Hindi", "Spanish", "French", "German", "Chinese", "Hinglish"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addArrayItem = (arrayName, value) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], value],
    }));
  };

  const removeArrayItem = (arrayName, idx) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== idx),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.className || !formData.category || !formData.longDescription || !formData.teacherName) {
        throw new Error("Please fill all required fields.");
      }

      const payload = {
        ...formData,
        teacherId: userData._id,
        originalPrice: parseFloat(formData.originalPrice),
        discountedPrice: parseFloat(formData.discountedPrice),
      };

      // Custom Validations
      if (payload.originalPrice <= 0) throw new Error("Original price must be greater than 0.");
      if (payload.discountedPrice > payload.originalPrice) throw new Error("Discounted price cannot exceed original price.");
      if (payload.courseIncludes.length === 0) throw new Error("Add at least one course feature.");
      if (payload.whatYouWillLearn.length === 0) throw new Error("Add at least one learning point.");
      if (payload.thisCourseIncludes.length === 0) throw new Error("Add at least one course inclusion.");

      // API Call
      const response = await FetchAPI("v1/classes/create", {
        method: "POST",
        payload,
      });

      if (response.success) {
        showSuccessToast("Class created successfully!");
      }
    } catch (error) {
      showErrorToast(error.message || "Failed to create class.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen rounded-xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Create New Class
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Add a new class to the platform
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 dark:bg-white/5 rounded-2xl">
        <ClassInfoSection {...{ formData, handleChange, addArrayItem, removeArrayItem, inputClass, labelText, sectionClass }} />
        <PricingInfoSection {...{ formData, handleChange, inputClass, labelText, sectionClass }} />
        <TeacherInfoSection {...{ formData, handleChange, inputClass, labelText, sectionClass, languageOptions }} />

        <div className="flex justify-end w-full">
          <Button type="submit" variant="secondary" disabled={isLoading}>
            {isLoading ? "Creating Class..." : "Create Class"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateClass;