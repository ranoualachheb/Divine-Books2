import React from 'react'
import { useSelector } from 'react-redux';
import Book from '../Books/Book/Book'



const Books = () => {
    const books = useSelector((state) => state.booksReducer)
    return (

        <Book/>

        )
}

export default Books