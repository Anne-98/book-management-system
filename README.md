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
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the server:

   ```env
   PORT=3000
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_code
   JWT_EXPIRATION=1h
   ```

4. Start the backend server:

   ```bash
   npm run dev
   ```

5. Backend runs at: `http://localhost:3000/`

6. To add book genres run below script in mongo shell
  
  db.genres.insertMany([
  { name: "Fantasy", description: "Fiction with magical or supernatural elements" },
  { name: "Science Fiction", description: "Futuristic or scientific themes and settings" },
  { name: "Mystery", description: "Focus on solving a crime or uncovering secrets" },
  { name: "Romance", description: "Centered around love and relationships" },
  { name: "Horror", description: "Intended to scare or disturb" },
  { name: "Thriller", description: "Suspenseful and tense storylines" },
  { name: "Historical", description: "Set in a past time period with historical accuracy" },
  { name: "Non-Fiction", description: "Based on real facts and information" },
  { name: "Biography", description: "Life story of a person" },
  { name: "Adventure", description: "Exciting journeys or quests" }
]);
  


---

## 🖼️ Frontend Setup (React + Vite)

### 1. Create the frontend using Vite:

If you haven't already:

```bash
npm create vite@latest client --template react
cd client
```

### 2. Install dependencies:

```bash
npm install
```

Additional project dependencies:

```bash
npm install axios react-router-dom @reduxjs/toolkit react-redux
```

### 3. Install Tailwind CSS:

```bash
npm npm install tailwindcss @tailwindcss/vite

```
# refer official tailwind css website from here URL: https://tailwindcss.com/docs/installation/framework-guides/react-router

### 4. Run the frontend:

```bash
npm run dev
```

Frontend runs at: `http://localhost:5173/`

---

## 🔐 Authentication & Access Control

### Registration & Login

- Users register or log in to receive a **JWT token**
- Token is stored in **localStorage**

### Token Usage

- Sent on all authenticated requests:
  ```
  Authorization: Bearer <your_token>
  ```

### Protected Routes (Frontend)

- Add/Edit/Delete books require authentication
- Only the **creator** of a book can edit or delete it
- Redux checks `userState.isLoggedIn` for route access
- On logout, the token is removed and the state reset

### Public Access

- Anyone (even without an account) can:
  - View all books
  - View individual book details

---


## 🧪 Example API Endpoints

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`

### Books

- `GET /api/books/getAll` → Public
- `GET /api/books/getOne/:id` → Public
- `POST /api/books/add` → Requires token
- `PUT /api/books/updateOne/:id` → Requires token
- `DELETE /api/books/deleteOne/:id` → Requires token

### Genres

- `POST /api/genres/getAll`
- `POST /api/genres/getOne/:id`

---

## 🧑‍💻 Author

Developed by Anne Sudharika 

