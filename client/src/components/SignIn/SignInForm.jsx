import React, { useState } from "react";
import { login, register } from "../../api/authApi";

const SignInForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = register(formData);
            const token = response.data.token;
            localStorage.setItem("token", token);
            console.log("Form submitted:", formData);
            alert("Sign in successful!");
        } catch (err) {
            console.error(err);
            alert("Failed to sign in.");
        }
    }
  
  
  return (
    <div className="sign-in-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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