import axios from "axios";

// 1. Dynamic environment variable URL mapping (Vite syntax fallback to local)
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
    timeout: 10000, // Safe termination ceiling for slow network connections
    headers: {
        "Content-Type": "application/json",
    },
});

// 2. Outbound Request Interceptor
// Automatically hooks every request right before it leaves the browser
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Unified token sync point
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 3. Inbound Response Interceptor
// Catches structural system failures (like expired tokens) before components break
axiosInstance.interceptors.response.use(
    (response) => response, // Directly return successful response actions
    (error) => {
        // If the backend sends a 401 Unauthorized status, clear session state and boot to login
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            
            // Redirect smoothly to login if on a protected route window path
            if (!window.location.pathname.includes("/login") && !window.location.pathname.includes("/signup") && window.location.pathname !== "/") {
                window.location.href = "/login?session=expired";
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;