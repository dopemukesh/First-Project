import React from "react";
import { Button } from "../Common/Button/Button";

const RazorpayCheckoutButton = ({ course }) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Sample: You can fetch order from your backend and use real data here
    const options = {
      key: "YOUR_PUBLIC_KEY", // Replace with your Razorpay public key
      amount: course.price * 100, // in paise
      currency: "INR",
      name: course.name,
      description: "Course Enrollment",
      image: "/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        // Send payment info to backend here
      },
      prefill: {
        name: "Student Name",
        email: "student@example.com",
        contact: "9999999999",
      },
      notes: {
        course_id: course.id,
      },
      theme: {
        color: "#f97316", // Tailwind orange-500
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Button
      size="sm"
      onClick={handlePayment}
      className="w-full"
    >
      Enroll Now
    </Button>
  );
};

export default RazorpayCheckoutButton;
