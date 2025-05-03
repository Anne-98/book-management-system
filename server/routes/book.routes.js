const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const bookRoute = express.Router();
const bookController = require("../controllers/book.controller");

// bookRoute.use(authMiddleware);

bookRoute.post('/add', authMiddleware, bookController.createBook)
bookRoute.get('/getAll', bookController.getAllBooks)
bookRoute.get('/getOne/:id', bookController.getOneBook)
bookRoute.put('/updateOne/:id', authMiddleware,bookController.updateBook)
bookRoute.delete('/deleteOne/:id', authMiddleware, bookController.deleteBook)

module.exports = bookRoute;