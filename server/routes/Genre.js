import express from 'express';
import { addGenre, deleteGenre, updateGenre } from '../controllers/Genre.js';



const router = express.Router();

router.post('/:bookId/Genre', addGenre);
router.patch('/:bookId/Genre', updateGenre);
router.delete('/:bookId/Genre', deleteGenre);


export default router;