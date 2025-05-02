import axiosInstance from "../utils/axiosInstance";

export const getAllBooks = () => axiosInstance.get("/books/getAll");

export const getBookById = (id) => axiosInstance.get(`/books/getOne/${id}`);

export const addBook = (data) => {
  axiosInstance.post("/books/add", data);
};

export const updateBook = (id, data) =>
  axiosInstance.put(`/books/updateOne/${id}`, data);

export const deleteBook = (id) =>
  axiosInstance.delete(`/books/deleteOne/${id}`);
