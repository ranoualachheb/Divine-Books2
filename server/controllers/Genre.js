import express from 'express';
import mongoose from 'mongoose';

import books from '../models/books.js';

const router = express.Router();

export const addGenre = async (req, res) => {
    const bookId = req.params.bookId
    const Genre = req.body.Genre
    try {
        let book = await books.findOne({ id: bookId })
        book.Genres.push(Genre)
        await book.save()
        res.json(book)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' })
        console.log(error)
    }
}

export const updateGenre = async(req,res) => {
    const {bookId: id} = req.params;
    const {oldGenre, newGenre} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');
    let book = await books.findOne({id});
    const updatedBook = await book.update({...book, Genres: book.Genres.filter(Genre => Genre !== oldGenre).push(newGenre)})
    res.json(updatedBook);
}   

export const deleteGenre = async(req,res) =>{
    const {bookId: id} = req.params
    const oldGenre = req.body.Genre;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');
    let book = await books.findOne({id});
    const updatedBook = await book.update({...book, Genres: book.Genres.filter(Genre => Genre !== oldGenre)})
    res.json(updatedBook)
}