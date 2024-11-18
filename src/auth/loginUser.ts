import axios from 'axios'; 
import { api, endpoints } from './../axios'; 

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (loginData: LoginData): Promise<any> => {
  try {
    const response = await api.post(endpoints.login, loginData); 
    return response.data; 
  } catch (error: unknown) {

    if (axios.isAxiosError(error)) {
      console.error("Login error:", error.response?.data);
      throw error.response?.data.non_field_errors || new Error("Login failed");
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("Login failed, please try again later.");
    }
  }
};
