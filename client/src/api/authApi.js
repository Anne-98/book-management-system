import axiosInstance from "../utils/axiosInstance";

export const register = (data) => axiosInstance.post("/auth/register", data);
export const login = (data) => axiosInstance.post("/auth/login", data);
export const logout = () => axiosInstance.post("/auth/logout");
export const getUser = () => axiosInstance.get("/auth/getUser");