import React, { useState } from "react";
import { login, register } from "../../api/authApi";
import {useNavigate} from "react-router-dom"

const SignInForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData);
            const {token} = response.data.data;
            let existingToken = localStorage.getItem("token");
            if (existingToken) {
                // If a token already exists, remove it before storing the new one
                localStorage.removeItem("token");
            }
            // Store the token in local storage or a cookie
            localStorage.setItem("token", token);
            alert("Sign in successful!");
            navigate("/"); // Redirect to home page after successful sign in
        } catch (err) {
            console.error(err);
            alert("Failed to sign in.");
        }
    }
  
  
  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} method="post">
        <input onChange={handleChange} name="firstName" type="text" placeholder="First Name" required />
        <input onChange={handleChange} name="lastName" type="text" placeholder="Last Name" required />
        <input onChange={handleChange} name="phoneNumber" type="text" placeholder="Phone Number" required />
        <input onChange={handleChange} name="email" type="email" placeholder="Email" required />
        <input onChange={handleChange} name="password" type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;