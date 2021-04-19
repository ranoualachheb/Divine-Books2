import express from 'express'
import { getAllUsers, createNewUser, editUser, deleteUser } from '../controllers/user.js'


const router = express.Router()


router.get('/', getAllUsers)
router.post('/', createNewUser)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router