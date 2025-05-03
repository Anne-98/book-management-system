import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/bookApi";
import { getAllGenres } from "../api/genreApi";

const AddBookPage = () => {
  // fetching existing genres from the server
  const [genres, setGenres] = useState([]);
  const [response, setResponse] = useState({});

  useEffect(() => {
     const fetchGenres = async () => {
       try {
         const response = await getAllGenres();
         const { data } = response.data;
         setGenres(data);
         console.log("genres: ", data);
       } catch (err) {
         console.error(err);
       }
     };
     fetchGenres();
  }, []);
  

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    price: "",
    createdBy: "64f1b0c4e4b0a2d3f8e4b0c4",
    description: ""
  });

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
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <select name="genre" onChange={handleChange}>
          <option value="">Select a genre</option>
          {genres.map((genre) => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>

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
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleChange} 
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
