// src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../features/user/userReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <header className="bg-blue-400 text-white px-6 py-4 mb-5 flex justify-between items-center shadow-md">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <span className="text-white">BookStore</span>
      </div>

      <div className="space-x-4 flex items-center">
        {!userState.isLoggedIn ? (
          <>
            <Link
              to="/log-in"
              className="border border-blue-900 text-blue-900 px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/sign-in"
              className="border border-blue-900 text-blue-900 px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <span className="text-blue-900 font-medium">
              {userState.user.username}
            </span>
            <Link
              to="/add-book"
              className="border border-blue-900 text-blue-900 px-4 py-1 rounded-md hover:bg-blue-900 hover:text-white transition duration-300"
            >
              Add Book
            </Link>
            <button
              onClick={handleLogout}
              className="border border-red-800 text-red-800 px-4 py-1 rounded-md hover:bg-red-800 hover:text-white transition duration-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
