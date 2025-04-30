const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const bookRoute = express.Router();

// Add a book
bookRoute.post('/add', authMiddleware, (req, res) => {
    console.log("Book added");
    res.status(201).json({
        message: "Book added successfully"
    });
})

// Get all books
bookRoute.get('getAll', authMiddleware, (req, res) => {
    console.log("Fetching all books");
    res.status(200).json({
        message: "Fetched all books successfully"
    });
})

module.exports = bookRoute;