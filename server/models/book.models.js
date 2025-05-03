const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
        required: true
    },
    publicationDate: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Book", bookSchema);