import React, { useEffect, useState } from "react";
import { getAllBooks } from "../api/bookApi";

const BookList = () => {
  

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        const { data } = response.data;
        setBooks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
    
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
