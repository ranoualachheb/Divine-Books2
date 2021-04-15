import express from 'express';
import { addAuthor, updateAuthor, deleteAuthor }   from '../controllers/Authors.js';

const router = express.Router();

router.post('/:bookId/authors', addAuthor);
router.patch('/:bookId/authors', updateAuthor);
router.delete('/:bookId/authors', deleteAuthor);

export default router;