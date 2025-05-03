import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookApi";
import { getAllGenres } from "../api/genreApi";
import BookFormComponent from "../common/BookFormComponent";

const AddBookPage = () => {
  // fetching existing genres from the server
  const [genres, setGenres] = useState([]);
  const [response, setResponse] = useState({});
  
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: "",
    createdBy: "64f1b0c4e4b0a2d3f8e4b0c4",
    description: "",
  });

  useEffect(() => {
     const fetchGenres = async () => {
       try {
         const response = await getAllGenres();
         const { data } = response.data;
         setGenres(data);
       } catch (err) {
         console.error(err);
       }
     };
     fetchGenres();
  }, []);
  
  

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await addBook(book);
      console.log("BOOK:", data.data)
      setResponse(data);
      
      // alert(response?.data);
      navigate("/books");
    } catch (err) {
      console.error(err);
      alert("Failed to add book.");
    }
  };

  return (
    <div>
      
      <BookFormComponent
        book={book}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showTitle={false}
        disableFields={{ genre: true }}
        genres={genres}
        header="Add Book"
      />
    </div>
  );
};

export default AddBookPage;
