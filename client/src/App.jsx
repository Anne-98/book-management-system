import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookList from './pages/BookList'
import SignInPage from './pages/SignInPage'
import AddBookPage from './pages/AddBookPage'
import EditBookPage from './pages/EditBookPage'
import LogInPage from './pages/LogInPage'
import BookDetails from './pages/BookDetails'

function App() {

  // const [count, setCount] = useState(0)
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/books' element={<BookList />}/>
        <Route path='/add-book' element={<AddBookPage />}/>
        <Route path='/edit-book/:id' element={<EditBookPage />}/>
        <Route path='/sign-in' element={<SignInPage />}/>
        <Route path='/log-in' element={<LogInPage />}/>
        <Route path='/book-details/:id' element={<BookDetails />}/>
      </Routes>
    </div>
  )
}

export default App
