import React, { useEffect, useState } from "react";
import { getAllBooks } from "../api/bookApi";

const BookList = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    getAllBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
      });
  }, []);
  
  return (
    <div>
      <h1>All Books</h1>
      <ol>
        {books.map((book) => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} — ${book.price}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
