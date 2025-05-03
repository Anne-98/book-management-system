import React, { useEffect, useState } from "react";
import { getAllBooks } from "../api/bookApi";
import { Link } from "react-router-dom";

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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Books</h1>
      <ul className="space-y-2">
        {books.map((book) => (
          <li key={book._id}>
            <Link
              to={`/book-details/${book._id}`}
              className="flex items-center justify-between border rounded-md px-4 py-3 shadow-sm hover:bg-gray-50 transition"
            >
              <span className="w-1/3  text-left font-semibold text-gray-800">
                {book.title}
              </span>
              <span className="w-1/3 text-left text-gray-600">
                {book.author}
              </span>
              <span className="w-1/3 text-left text-gray-600">
                ${book.price}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
