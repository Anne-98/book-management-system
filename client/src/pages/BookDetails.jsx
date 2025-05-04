import React, { useEffect, useState } from "react";
import { deleteBook, getBookById, updateBook } from "../api/bookApi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookFormComponent from "../common/BookFormComponent";
import { getGenreById } from "../api/genreApi";
import Header from "../components/Home/Header";

const BookDetails = () => {
  const userState = useSelector((state) => state.user);

  const [book, setBook] = useState({
    title: "",
    genre: "",
    publicationDate: "",
    price: "",
    description: "",
    createdBy: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();

  // below useEffect is used to fetch the book details by id

  useEffect(() => {
    const fetchOneBook = async () => {
      try {
        const response = await getBookById(id);
        const { data } = response.data;
        console.log("book: ", data);
        setBook(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchOneBook();
  }, [id]);
  
  const handleDeleteClick = async () => {
    // Display confirmation popup
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );

    // If user confirms, proceed with delete action
    if (isConfirmed) {
      alert("called");
      handleDelete();
    } else {
      console.log("Delete action canceled");
    }
  };

  const handleDelete = async () => {
    console.log("Deleting book with ID:", id);
    try {
      const response = await deleteBook(id);
      console.log("response: ", response.data);
      navigate("/books");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md bg-white mt-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Book Details
        </h1>

        <div className="space-y-4">
          <DetailItem label="Title" value={book.title} />
          <DetailItem label="Author" value={book.author} />
          <DetailItem label="Genre" value={book.genre?.name || book.genre} />
          <DetailItem
            label="Publication Date"
            value={new Date(book.publicationDate).toLocaleDateString()}
          />
          <DetailItem label="Price" value={`$${book.price}`} />
          <DetailItem label="Description" value={book.description} />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          {/* Edit Button */}
          {userState?.user?.id == book?.createdBy ? (
            <button
              onClick={() => navigate(`/edit-book/${id}`)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Edit Book
            </button>
          ) : null}
          {/* Delete Button */}
          {userState?.user?.id === book?.createdBy ? (
            <button
              onClick={handleDeleteClick} // Use the confirmation function
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Delete Book
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="w-40 text-left font-medium text-gray-700">{label}:</div>
    <div className="flex-1 text-left text-gray-900 whitespace-pre-line">
      {value}
    </div>
  </div>
);


export default BookDetails;
