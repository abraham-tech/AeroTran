import axios from 'axios';
import {getToken} from "@/utils/tokenService";

const apiClient = axios.create({
    baseURL: "https://your-spring-boot-app-1093610135410.us-central1.run.app" || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080", // Use environment variables
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = getToken(); // Example: JWT token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;
