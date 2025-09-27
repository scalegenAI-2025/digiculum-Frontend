/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = "https://digiculum-backend-1.onrender.com/api/auth";

axios.defaults.withCredentials = true;

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: any;
  token?: string;
}

// Signup API
export const signup = (data: {
  name: string;
  email: string;
  password: string;
}) => axios.post<AuthResponse>(`${API_URL}/signup`, data);

// Login API — store token locally
export const login = async (data: { email: string; password: string }) => {
  const res = await axios.post<AuthResponse>(`${API_URL}/login`, data, {
    withCredentials: true,
  });
  if (res.data.token) {
    localStorage.setItem("token", res.data.token); // save JWT for future requests
  }
  return res;
};

// Logout API
export const logout = () => axios.post(`${API_URL}/logout`);

// ✅ Get profile API — include JWT token in Authorization header
export const getProfile = (email: string) => {
  const token = localStorage.getItem("token"); // get stored JWT
  return axios.get<AuthResponse>(`${API_URL}/profile/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
};

// Password reset APIs
export const sendResetLink = (data: { email: string }) =>
  axios.post<AuthResponse>(`${API_URL}/send-reset-password-link`, data);

export const resetPassword = (data: {
  email: string;
  token: string;
  password: string;
}) => axios.post<AuthResponse>(`${API_URL}/reset-password`, data);

export const resendActivationLink = (data: { email: string }) =>
  axios.post<AuthResponse>(`${API_URL}/resend-activation-link`, data);

// Account activation
export const activateAccount = (email: string, token: string) =>
  axios.get<AuthResponse>(`${API_URL}/activate/${email}/${token}`);
