// src/utils/FetchAPI.jsx
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from '../../config.js';

// Axios instance
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    timeout: 20000
});

// Retry
axiosRetry(apiClient, {
    retries: 3,
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error) || error?.response?.status >= 500;
    },
    retryDelay: (retryCount) => {
        console.log(`Retrying request... Attempt #${retryCount}`);
        return retryCount * 1000;
    }
});

// FetchAPI
const FetchAPI = async (
    endpoint,
    {
        method = 'post',
        payload = null,
        isFileUpload = false
    } = {}
) => {
    try {
        const token = localStorage.getItem("token");

        // dynamic headers
        const headers = {
            Accept: 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        let finalPayload = payload;

        if (isFileUpload && payload && typeof payload === 'object' && !(payload instanceof FormData)) {
            const formData = new FormData();
            Object.keys(payload).forEach(key => {
                const value = payload[key];
                if (value instanceof FileList) {
                    formData.append(key, value[0]);
                } else {
                    formData.append(key, value);
                }
            });
            finalPayload = formData;
            // do NOT set content-type manually for FormData
        } else {
            headers['Content-Type'] = 'application/json';
        }

        // final config
        const config = {
            url: endpoint,
            method,
            headers,
            data: finalPayload,
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log(`Upload Progress: ${percentCompleted}%`);
                }
            }
        };

        // Debug logs
        // console.log('Request URL:', `${BASE_URL}/${endpoint}`);
        // console.log('Request Config:', config);
        console.log('Request Config:', { method: config.method, headers: config.headers, data: config.data });

        const response = await apiClient(config);

        console.log('Response Status:', response.status);
        console.log('Response Data:', response.data?.message || response.data);

        if (response.status === 201 && response.data?.token && response.data?.user) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        return response.data;

    } catch (error) {
        let errorMessage = 'An unknown error occurred';

        if (error.response) {
            // Server responded with an error status
            errorMessage = error.response.data?.message ||
                error.response.data?.error ||
                `Server error: ${error.response.status}`;
        } else if (error.code === 'ERR_NETWORK' || error.message === 'Failed to fetch') {
            // No internet or DNS/network issue
            errorMessage = 'No internet connection. Please check your network.';
        } else if (error.request) {
            // Request made, but no response received
            errorMessage = 'No response from server. Please refresh/try again.';
        } else {
            // Other unknown error
            errorMessage = error.message || 'An unexpected error occurred';
        }

        console.error("API Error Details:", {
            message: errorMessage,
            stack: error.stack
        });

        throw new Error(errorMessage);
    }
};

export default FetchAPI;
