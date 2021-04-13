import express from 'express';

import { getAllBooks, addBook, updateBook }   from '../controllers/books.js';



const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.patch('/:id', updateBook);






export default router;
