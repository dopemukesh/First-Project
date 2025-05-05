export const validateSignupForm = (formData) => {
    const errors = {};

    if (!formData.fullName.trim()) {
        errors.fullName = "Full Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
        errors.fullName = "Only letters and spaces allowed.";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Invalid email format.";
    }

    if (!formData.password) {
        errors.password = "Password is required.";
    } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    }

    if (!formData.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = "Phone must be 10 digits.";
    }

    return errors;
};
