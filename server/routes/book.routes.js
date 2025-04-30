const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const bookRoute = express.Router();
const bookController = require("../controllers/book.controller");

bookRoute.use(authMiddleware);

bookRoute.post('/add', bookController.createBook)
bookRoute.get('/getAll', bookController.getAllBooks)
bookRoute.get('/getOne/:id', bookController.getOneBook)
bookRoute.put('/updateOne/:id', bookController.updateBook)
bookRoute.delete('/deleteOne/:id', bookController.deleteBook)

module.exports = bookRoute;