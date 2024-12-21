import axios from 'axios';

const api = axios.create({
    baseURL: "https://your-spring-boot-app-1093610135410.us-central1.run.app" || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
