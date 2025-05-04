# 📚 Bookstore Application

A full-stack web application to manage a digital bookstore. Users can browse books, view details, and registered users can log in to add, edit, and delete their books. Genres are stored and associated properly. All sensitive actions are protected by JWT-based authentication.

---

## 🚀 Features

- Public access to view books and their details
- Secure user authentication using JWT
- Authenticated users can:
  - Add books
  - Edit their own books
  - Delete their own books
- Token verification on all frontend API requests
- Genre association using MongoDB `ObjectId`, populated in responses
- Clean, responsive UI built with Tailwind CSS
- Global state management using Redux Toolkit
- Modular React components using Vite + React

---

## 🛠️ Tech Stack

### Frontend
- **Vite + React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Axios**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **dotenv**

---

## 📦 Installation Instructions

### ✅ Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)
- Terminal with Bash or PowerShell

---

## ⚙️ Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
