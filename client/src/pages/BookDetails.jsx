import React, { useEffect, useState } from 'react';
import { deleteBook, getBookById, updateBook } from '../api/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import BookFormComponent from '../common/BookFormComponent';

const BookDetails = () => {
    
    
    const [book, setBook] = useState({
        title: "",  
        genre: "",
        publicationDate: "",
        price: "",
        description: ""
    
    });
    
    const {id} = useParams();
    
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchOneBook = async () => {
            try {
                const response = await getBookById(id);
                const { data } = response.data;
                console.log("books: ", data);
                setBook(data);
                
            } catch (err) {
                console.error(err);
            }
        }
        fetchOneBook();
    }   , [id]);

   const handleDeleteClick = async () => {
    // Display confirmation popup
    const isConfirmed = window.confirm("Are you sure you want to delete this book?");
    
    // If user confirms, proceed with delete action
    if (isConfirmed) {
        alert("called")
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
          <button
            onClick={() => navigate(`/edit-book/${id}`)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Edit Book
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDeleteClick} // Use the confirmation function
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Delete Book
          </button>
        </div>
      </div>
    );
}

const DetailItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center">
    <span className="sm:w-40 font-medium text-gray-700 text-left">{label}:</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default BookDetails;