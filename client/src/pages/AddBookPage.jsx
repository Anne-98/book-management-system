import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookApi";
import { getAllGenres } from "../api/genreApi";
import BookFormComponent from "../common/BookFormComponent";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Home/Header";

const AddBookPage = () => {
  // fetching existing genres from the server
  const [genres, setGenres] = useState([]);
  const [response, setResponse] = useState({});
  const userState = useSelector((state) => state.user);
  
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: "",
    createdBy: userState.user.id,
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
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
