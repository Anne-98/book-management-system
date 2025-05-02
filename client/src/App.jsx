import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookList from './pages/BookList'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'

function App() {

  // const [count, setCount] = useState(0)
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/books' element={<BookList />}/>
        <Route path='/add-book' element={<AddBook />}/>
        <Route path='/edit-book/:id' element={<EditBook />}/>
      </Routes>
    </div>
  )
}

export default App
