const Book = require("../models/book.models");
const jwt = require("jsonwebtoken");

// Create a new book

exports.createBook = async (req, res) => {
    
    try{
        const { title, author, genre, publicationDate, price } = req.body;
        const newBook = new Book({
            title,
            author,
            genre,
            publicationDate, 
            createdBy: req.user.id,
            price
        });
        await newBook.save();
        res.status(201).json({message: "Successfully added", newBook})
    }catch(err){
        res.status(500).json({message: "Please Provide required fields", err})
    }
};

// Get all books

exports.getAllBooks = async (req, res) => {
    try{
        const books = await Book.find({createdBy: req.user.id});
        res.status(200).json(books);
    }catch(err){
        res.status(500).json({message: "Failed to provide details", err})
    }
}

// Get a book

exports.getOneBook = async (req, res) => {
    try{
        const book = await Book.findById({createdBy: req.user.id});
        if(!book?.length) {
            res.status(404).json({message: "Book does not exist"})
        }
        res.status(200).json(book)
    }catch(err){
        res.status(500).json({message: "Failed to fetch the book", err})
    }
}

// Update the details of a book

exports.updateBook = async (req, res) => {
    try{
        const updatedBook = await Book.findOneAndUpdate(
            {_id: req.params.id, createdBy: req.user.id},
            req.body, 
            { new: true }
        );
        if (!updatedBook?.length) {
            res.status(404).json({message: "Book does not exist"})
        }
        res.status(201).json({message: "Successfully updated"}, updatedBook)
    }catch(err){
        res.status(500).json({message: "Failed to update", err})
    }
}

// Delete a book

exports.deleteBook = async (req, res) => {

    try{
        const deletedBook = await Book.findOneAndDelete(
            {_id: req.params.id, createdBy: req.user.id}
            )
        if(!deletedBook?.length) {
            res.status(404).json({message: "Book does not exist"})
        }
        res.status(200).json({message: "Successfully deleted"})
        }catch(err){
            res.status(500).json({message: "Failed to delete", err})
        }
}