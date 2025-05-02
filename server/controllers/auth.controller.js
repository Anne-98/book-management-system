const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { errorResponse, successResponse } = require("../utils/response");

// Register a new user
exports.register = async (req, res) => {
  const { firstName, lastName, phoneNumber,  email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 400, "User already exists");
    }
    
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user in the database
    const newUser = new User({
      firstName, 
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
    });
    
    const user = await newUser.save();
    // Create a token for the new user
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    
    return successResponse(res, 201, "User registered successfully", {
      token,
      user: {
        id: user._id,
        name: user.firstName + " " + user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
      }});
  } catch (err) {
    return errorResponse(res, 500, "Registration error", err.message);
  }
};

// Login an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return errorResponse(res, 404, "User not found");

    // Compare the payload password with the hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return errorResponse(res, 400, "Invalid password");
    
    // Create a token if password is valid
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token
    return successResponse(res, 200, "Login successful", {
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    return errorResponse(res, 500, "Login error", err.message);
  }
};
