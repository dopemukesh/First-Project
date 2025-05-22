// src/utils/FetchAPI.jsx
import { BASE_URL } from "../../config.js";

const FetchAPI = async (endpoint, { method = 'POST', payload = null } = {}) => {
    try {
        const token = localStorage.getItem("token");

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }) // ✅ Add token to headers
        };

        const config = {
            method,
            headers,
            body: payload ? JSON.stringify(payload) : null,
        };

        // Debug logs
        console.log('Request URL:', `${BASE_URL}/${endpoint}`);
        console.log('Request Config:', config);

        const response = await fetch(`${BASE_URL}/${endpoint}`, config);

        // Log response status
        console.log('Response Status:', response.status);

        // First get the response text
        const responseText = await response.text();
        console.log('Response Text:', responseText);

        let data;
        try {
            data = responseText ? JSON.parse(responseText) : null;
        } catch (e) {
            console.error('Failed to parse response as JSON:', responseText);
            throw new Error('Invalid JSON response from server');
        }

        // Handle successful response (201 Created)
        if (response.status === 201) {
            if (data?.token && data?.user) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
            }
            console.log('Response Data:', data);
            return data;
        }

        // Handle non-successful responses
        if (!response.ok) {
            const errorMessage = data?.message || data?.error || `Server error: ${response.status}`;
            throw new Error(errorMessage);
        }

        return data;
    } catch (error) {
        console.error("API Error Details:", {
            message: error.message,
            stack: error.stack
        });
        throw error;
    }
};

export default FetchAPI;
