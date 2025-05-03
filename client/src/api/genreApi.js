import axiosInstance from "../utils/axiosInstance";

const getAllGenres = () => axiosInstance.get("/genres/getAll");
const getGenreById = (id) => axiosInstance.get(`/genres/getOne/${id}`);
const addGenre = (data) => axiosInstance.post("/genres/add", data);
const updateGenre = (id, data) => axiosInstance.put(`/genres/updateOne/${id}`, data);
const deleteGenre = (id) => axiosInstance.delete(`/genres/deleteOne/${id}`);

export {
  getAllGenres,
  getGenreById,
  addGenre,
  updateGenre,
  deleteGenre,
};