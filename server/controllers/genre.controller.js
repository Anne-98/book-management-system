const Genre = require("../models/genre.models");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../utils/response");


// Get all genres

exports.getAllGenres = async (req, res) => {
    try{
        const genres = await Genre.find({});
        successResponse(res, 200, "Genres fetched successfully", genres);
    }catch(err){
        errorResponse(res, 500, "Failed to fetch genres", err);
    }
}

// Get a genre
exports.getGenreById = async (req, res) => {
    try{
        const genre = await Genre.findById(req.params.id);
        if(!genre) {
            errorResponse(res, 404, "Genre does not exist");
        }
        successResponse(res, 200, "Genre fetched successfully", genre);
    }catch(err){
        errorResponse(res, 500, "Failed to fetch genre", err);
    }
}

// Create a new genre

exports.addGenre = async (req, res) => {
    try{
        const newGenre = new Genre({
            name: req.body.name,
            description: req.body.description,
        });

        await newGenre.save();
        successResponse(res, 201, "Genre created successfully", newGenre);
    }catch(err){
        errorResponse(res, 500, "Failed to create genre", err);
    }
}

// Update the details of a genre
exports.updateGenre = async (req, res) => {
    try{
        const updatedGenre = await Genre.findOneAndUpdate(
            {_id: req.params.id},
            req.body, 
            { new: true }
        );
        if (!updatedGenre) {
            errorResponse(res, 404, "Genre does not exist");
        }
        successResponse(res, 200, "Genre updated successfully", updatedGenre);
    }catch(err){
        errorResponse(res, 500, "Failed to update genre", err);
    }
}
// Delete a genre   

exports.deleteGenre = async (req, res) => {
    try{
        const deletedGenre = await Genre.findOneAndDelete(
            {_id: req.params.id}
        );
        if (!deletedGenre) {
            errorResponse(res, 404, "Genre does not exist");
        }   
        successResponse(res, 200, "Genre deleted successfully", deletedGenre);
    }
    catch(err){
        errorResponse(res, 500, "Failed to delete genre", err);
    }   
}
