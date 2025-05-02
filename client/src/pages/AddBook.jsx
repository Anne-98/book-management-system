import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookApi";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //   const token = localStorage.getItem("token");
      await addBook(book);
      alert("Book added successfully!");
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
        />
        <input
          type="date"
          name="publicationDate"
          value={book.publicationDate}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
        />
        <button
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
