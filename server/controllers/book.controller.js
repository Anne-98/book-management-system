const Book = require("../models/book.models");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../utils/response");

// Create a new book

exports.createBook = async (req, res) => {
    
    try{
        const { title, author, genre, publicationDate, price, description,createdBy } = req.body;

        const newBook = new Book({
          title,
          author,
          genre,
          publicationDate,
          createdBy: createdBy,
          price,
          description,
        });
        await newBook.save();
        successResponse(res, 201, "Book created successfully", newBook);
    }catch(err){
        errorResponse(res, 500, "Failed to create book", err);
    }
};

// Get all books

exports.getAllBooks = async (req, res) => {
    try{
        const books = await Book.find({});
        successResponse(res, 200, "Books fetched successfully", books);
    }catch(err){
        errorResponse(res, 500, "Failed to fetch books", err);
    }
}

// Get a book
exports.getOneBook = async (req, res) => {    
    try{
        const book = await Book.findById({_id: req.params.id}).populate("genre");
        if(!book) {
            errorResponse(res, 404, "Book does not exist");
        }
        successResponse(res, 200, "Book fetched successfully", book);
    }catch(err){
        errorResponse(res, 500, "Failed to fetch book", err);
    }
}

// Update the details of a book

exports.updateBook = async (req, res) => {
    try{
        const {
          createdBy
        } = req.body;
        const updatedBook = await Book.findOneAndUpdate(
            {_id: req.params.id, createdBy: createdBy},
            req.body, 
            { new: true }
        );
        if (!updatedBook) {
            errorResponse(res, 404, "Book does not exist");
        }
        successResponse(res, 200, "Book updated successfully", updatedBook);
    }catch(err){
        errorResponse(res, 500, "Failed to update book", err);
    }
}

// Delete a book

exports.deleteBook = async (req, res) => {

    try{
        const deletedBook = await Book.findOneAndDelete(
            {_id: req.params.id}
            )
        if(!deletedBook) {
            errorResponse(res, 404, "Book does not exist");
        }
        successResponse(res, 200, "Book deleted successfully", deletedBook);
        }catch(err){
            errorResponse(res, 500, "Failed to delete book", err);  
        }
}