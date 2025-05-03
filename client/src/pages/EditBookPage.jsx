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
      //   <div>
      //     <h1 className="text-3xl font-bold underline">Edit Book</h1>
      //     <form onSubmit={handleSubmit}>
      //       <input
      //         type="text"
      //         name="title"
      //         value={book.title}
      //         onChange={handleChange}
      //         placeholder="Title"
      //         required
      //       />
      //       <input
      //         type="text"
      //         name="genre"
      //         value={book.genre}
      //         onChange={handleChange}
      //         placeholder="Genre"
      //         required
      //       />
      //       <input
      //         type="date"
      //         name="publicationDate"
      //         value={book.publicationDate.split("T")[0]}
      //         onChange={handleChange}
      //         required
      //       />
      //       <input
      //         type="number"
      //         name="price"
      //         value={book.price}
      //         onChange={handleChange}
      //         placeholder="Price"
      //         required
      //       />
      //       <textarea
      //         name="description"
      //         value={book.description}
      //         onChange={handleChange}
      //         placeholder="Description"
      //       ></textarea>
      //       <button type="submit">Update Book</button>
      //     </form>
      //   </div>
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-4">Edit Book</h1>
        <BookFormComponent
          book={book}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    );
}

export default EditBookPage;