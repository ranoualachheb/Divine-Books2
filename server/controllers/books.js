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

