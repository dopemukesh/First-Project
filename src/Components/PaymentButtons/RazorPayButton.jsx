import React, { useEffect, useRef } from 'react';

const RazorpayButton = ({ paymentButtonId }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (!paymentButtonId || !formRef.current) return;

    // Clear previous content if re-rendered
    formRef.current.innerHTML = "";

    // Create Razorpay payment script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", paymentButtonId);
    script.async = true;

    formRef.current.appendChild(script);
  }, [paymentButtonId]);

  return <form ref={formRef}></form>; // ✅ Razorpay needs <form>, not <div>
};

export default RazorpayButton;
