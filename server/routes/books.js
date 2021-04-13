import express from 'express';
import { getAllBooks, addBook, updateBook, deleteBook }   from '../controllers/books.js';



const router = express.Router();

router.get('/', getAllBooks);
router.post('/', addBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook)






export default router;
