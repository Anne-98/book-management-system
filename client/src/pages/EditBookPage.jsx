import React, { useEffect, useState } from 'react';
import { getBookById, updateBook } from '../api/bookApi';
import { useParams } from 'react-router-dom';
import BookFormComponent from '../common/BookFormComponent';

const EditBookPage = () => {
    
    
    const [book, setBook] = useState({
        title: "",  
        genre: "",
        publicationDate: "",
        price: "",
        description: ""
    
    });
    
    const {id} = useParams();
    console.log("id: ", id);

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

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateBook(id);
            // const { data } = response.data;
            // setBooks(data);
            console.log("response: ", response.data);
        } catch (err) {
            console.error(err);
        }
    }
    
    return (
      //   
      <div className="p-6">
        <BookFormComponent
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disableFields={{genres: true}}
          header="Update Book"
        />
      </div>
    );
}

export default EditBookPage;