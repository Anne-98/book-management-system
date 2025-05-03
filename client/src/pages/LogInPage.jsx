import React, { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      setResponse(data);
      //   saving the token
      const { token } = data?.data;
      let existingToken = localStorage.getItem("token");
      if (existingToken) {
        localStorage.removeItem("token");
      }
      
      localStorage.setItem("token", token);
      alert("Sign in successful!");
      navigate("/");
    } catch (err) {
      setResponse(err.response.data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <h1>Log In Page</h1>
        <p style={{ color: response?.success ? "green" : "red" }}>
          {response?.message}
        </p>

        <input
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          required
        />
        <input
          name="password"
          onChange={handleChange}
          placeholder="password"
          type="password"
          required
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LogInPage;
