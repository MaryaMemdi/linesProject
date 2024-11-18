import { api, endpoints } from "../axios";
import axios from "axios";
export const registerUser = async (formData) => {
    try {
        const response = await api.post(endpoints.register, formData);
        console.log("Response from server:", response);
        return response.data;
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Registration error:", error.response?.data);
            throw error.response?.data;
        }
        else {
            console.error("An unknown error occurred:", error);
            throw new Error("Registration failed, please try again later.");
        }
    }
};
