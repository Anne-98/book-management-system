import React, { useState } from "react";
import { login, register } from "../../api/authApi";
import {useNavigate} from "react-router-dom"
import UserAuthForm from "../../common/UserAuthForm";
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout } from "../../features/user/userReducer";
import Header from "../Home/Header";

const SignInForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            const {token,user} = response.data.data;
            let existingToken = localStorage.getItem("token");
            if (existingToken) {
                // If a token already exists, remove it before storing the new one
                localStorage.removeItem("token");
            }
            // Store the token in local storage or a cookie
            localStorage.setItem("token", token);
            dispatch(userLogin(user));
            alert("Sign in successful!");
            navigate("/"); // Redirect to home page after successful sign in
        } catch (err) {
            console.error(err);
            alert("Failed to sign in.");
        }
    }
  
  
  return (
     <div className="min-h-screen bg-gray-50 ">
    <Header />
    <UserAuthForm
      header="Sign In"
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      showFields={{
        firstName: true,
        lastName: true,
        phoneNumber: true,
        email: true,
        password: true,
      }}
    />
    </div>
  );
}

export default SignInForm;