// src/utils/FetchAPI.jsx
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from '../../config.js';

// Create axios instance
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 10000 // 10 seconds timeout
});

// Setup retry logic (3 retries for idempotent requests)
axiosRetry(apiClient, {
    retries: 3,
    retryCondition: (error) => {
        // Retry on network errors or 5xx responses
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error?.response?.status >= 500;
    },
    retryDelay: (retryCount) => {
        console.log(`Retrying request... Attempt #${retryCount}`);
        return retryCount * 1000; // Exponential backoff
    }
});

// Main FetchAPI function
const FetchAPI = async (
    endpoint,
    {
        method = 'post',
        payload = null,
        isFileUpload = false,
        retryCount = 3 // 👈 New option added
    } = {}
) => {
    try {
        const token = localStorage.getItem("token");

        const headers = {};
        if (isFileUpload) {
            headers['Content-Type'] = 'multipart/form-data';
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        console.log('Request URL:', `${BASE_URL}/${endpoint}`);
        console.log('Request Method:', method.toUpperCase());
        console.log('Request Payload:', payload);

        let finalPayload = payload;
        if (isFileUpload && payload instanceof Object && !(payload instanceof FormData)) {
            const formData = new FormData();
            Object.keys(payload).forEach(key => {
                formData.append(key, payload[key] instanceof FileList ? payload[key][0] : payload[key]);
            });
            finalPayload = formData;
        }

        // Create axios config
        const config = {
            url: endpoint,
            method,
            headers,
            data: finalPayload,
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                console.log(`Upload Progress: ${percentCompleted}%`);
            },
            'axios-retry': {
                retries: retryCount,
                retryDelay: (count) => {
                    console.log(`[Retry #${count}] Retrying request...`);
                    return count * 1000;
                }
            }
        };

        const response = await apiClient(config);

        console.log('Response Status:', response.status);
        console.log('Response Data:', response.data);

        if (response.status === 201 && response.data?.token && response.data?.user) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        return response.data;

    } catch (error) {
        let errorMessage = 'An unknown error occurred';

        if (error.response) {
            errorMessage = error.response.data?.message || error.response.data?.error || `Server error: ${error.response.status}`;
        } else if (error.request) {
            errorMessage = 'No response from server';
        } else {
            errorMessage = error.message;
        }

        console.error("API Error Details:", {
            message: errorMessage,
            stack: error.stack
        });

        throw new Error(errorMessage);
    }
};

export default FetchAPI;