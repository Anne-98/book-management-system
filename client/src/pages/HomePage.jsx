import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from '../features/user/userReducer';
import Header from '../components/Home/Header';

const HomePage = () => {
    
    const navigate = useNavigate();
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
      localStorage.removeItem("token");
      dispatch(userLogout());
      userState.isLoggedIn = false;
      userState.user = null;
    }
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

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