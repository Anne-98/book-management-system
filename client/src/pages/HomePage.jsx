import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Section */}
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-white">BookStore</span>
          </div>
          <div className="space-x-6">
            <Link to="/log-in" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/sign-in" className="hover:text-gray-300">
              Sign Up
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to the Bookstore
          </h1>
          <button
            onClick={() => navigate("/books")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Book List
          </button>
        </div>
      </div>
    );
}

export default HomePage;