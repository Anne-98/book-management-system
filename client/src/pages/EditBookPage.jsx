import React, { useEffect, useState } from 'react';
import { getBookById, updateBook } from '../api/bookApi';
import { getAllGenres,getGenreById } from "../api/genreApi";
import { useParams } from 'react-router-dom';
import BookFormComponent from '../common/BookFormComponent';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Home/Header';

const EditBookPage = () => {
    //MASHLK
    const [genre, setGenre] = useState({});
    const [genres, setGenres] = useState([]);
    const [book, setBook] = useState({
        title: "",  
        genre: "",
        publicationDate: "",
        price: "",
        description: ""
    });
    const navigate = useNavigate();

    //catch book id from url
    const {id} = useParams();
    

    useEffect(() => {
      const fetchOneBook = async () => {
        try {
          const response = await getBookById(id);
          const { data } = response.data;
          setBook(data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchOneBook();
      //MASHLK
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
    
    

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateBook(id,book);
            const { success,data } = response.data;
            if(success) {
                alert("Book updated successfully!");
                navigate(`/book-details/${data._id}`);
            }
            else {
                alert("Failed to update book.");
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
      //
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <BookFormComponent
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disableFields={{ genre: true }}
          header="Update Book"
          genres={genres}
        />
      </div>
    );
}

export default EditBookPage;