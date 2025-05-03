import axiosInstance from "../utils/axiosInstance";

export const getAllBooks = () => axiosInstance.get("/books/getAll");

export const getBookById = (id) => axiosInstance.get(`/books/getOne/${id}`);

export const addBook = (data) => {
  return axiosInstance.post("/books/add", data, {
    headers: {
      // "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updateBook = (id, data) =>{
  return axiosInstance.put(`/books/updateOne/${id}`, data, {
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
export const deleteBook = (id) => {
  return axiosInstance.delete(`/books/deleteOne/${id}`, {
    headers: {
      // "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

