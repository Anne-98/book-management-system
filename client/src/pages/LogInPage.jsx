import React, { useState } from "react";
import { login } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import UserAuthForm from "../common/UserAuthForm";

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
        {response?.message && (
          <p
            className={`text-sm mb-4 ${
              response.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {response.message}
          </p>
        )}
        <UserAuthForm
          header="Log In"
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          showFields={{
            firstName: false,
            lastName: false,
            phoneNumber: false,
            email: true,
            password: true,
          }}
        />
    </>
  );
};

export default LogInPage;
