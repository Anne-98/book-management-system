import React, { useEffect, useState } from "react";
import { getAllBooks } from "../api/bookApi";
import { Link } from "react-router-dom";
import Header from "../components/Home/Header";

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <h2 className="text-xl font-semibold text-gray-900 py-4">All Books</h2>
      <ul className="space-y-2 py-2">
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
