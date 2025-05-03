const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const genreRoute = express.Router();
const genreController = require("../controllers/genre.controller");

// genreRoute.use(authMiddleware);

//bookRoute.post("/add", bookController.createBook);
genreRoute.get("/getAll", genreController.getAllGenres);
genreRoute.get("/getOne/:id", genreController.getGenreById);
//bookRoute.put("/updateOne/:id", bookController.updateBook);
//bookRoute.delete("/deleteOne/:id", bookController.deleteBook);

module.exports = genreRoute;
