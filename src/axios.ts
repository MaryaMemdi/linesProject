
import axios from "axios";

const BASE_URL = "http://82.115.26.95/";

const endpoints = {
  register: "/auth/signup",
  login: "/auth/login",
};

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const csrfToken = document.cookie.match(/(^|;)\s*csrftoken\s*=\s*([^;]+)/)?.[2];
  if (csrfToken) {
    config.headers["X-CSRFToken"] = csrfToken;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

interface FormData {
  username: string;
  email: string;
  password: string;
  re_password: string;
}

export const registerUser = async (formData: FormData): Promise<any> => {
  try {
    const response = await api.post(endpoints.register, formData);
    console.log("Response from server:", response);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Registration error:", error.response?.data);
      throw error.response?.data;
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("Registration failed, please try again later.");
    }
  }
};

export { api, endpoints };
