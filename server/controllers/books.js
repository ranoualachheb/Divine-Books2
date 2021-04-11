import express from 'express';
import mongoose from 'mongoose';

import books from '../models/books.js';

const router = express.Router();

export const getBooks = async (req, res) => { 
    res.send('This Works')
}

export const createBook = async (req, res)=> {
    res.send('this works too')
}

