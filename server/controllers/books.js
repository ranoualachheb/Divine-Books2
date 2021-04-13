import express from 'express';
import mongoose from 'mongoose';

import books from '../models/books.js';

const router = express.Router();

export const getAllBooks = async (req, res) => { 
    try {
        const booksRes = await books.find();
        res.status(200).json(booksRes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addBook = async (req, res)=> {
    const newBook = new books(req.body)
        try {
            await newBook.save() 
            res.status(201).json(newBook) 
        } catch(error) {
            res.status(409).json({message: error.message})
        }
    }

    export const updateBook = async(req,res) => {
        const {id: _id} = req.params  
        const book = req.body
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Book with that id')
       
          const updatedBook = await books.findByIdAndUpdate( _id, book, {new: true})
          res.json(updatedBook)
        
    }   
    
    export const deleteBook = async(req,res) =>{
        const {id} = req.params
      
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Book with id: ${id}`);
      
        await books.findByIdAndRemove(id)  
        res.json({ message: "Book deleted successfully." })
      }

