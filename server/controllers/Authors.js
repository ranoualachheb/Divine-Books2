import express from 'express';
import mongoose from 'mongoose';

import books from '../models/books.js';

const router = express.Router();

export const addAuthor = async (req, res) => {
  const bookId = req.params.bookId
  const author = req.body.author
  try {
    let book = await books.findOne({ id: bookId })
    book.authors.push(author)
    await book.save()
    res.json(book)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' })
    console.log(error)
  }
}

    export const updateAuthor = async(req,res) => {
        const {bookId: id} = req.params;
        const {oldAuthor, newAuthor} = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');
        // find book by id
        const book = await books.find({id});
        // update the book by removing an author and putting in the new author
        const updatedBook = await book.update({...book, authors: book.authors.filter(author => author !== oldAuthor).push(newAuthor)})
        res.json(updatedBook);
    }   
    
    export const deleteAuthor = async(req,res) =>{
        const {bookId: id} = req.params
        const oldAuthor = req.body.author;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Book with that id');
        // find book by id
        const book = await books.find({id});
        // update the book by removing an author from the list of authors
        const updatedBook = await book.update({...book, authors: book.authors.filter(author => author !== oldAuthor)})
        res.json(updatedBook)
      }

