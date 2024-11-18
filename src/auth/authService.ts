import { api, endpoints } from "../axios";
import axios from "axios";

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
