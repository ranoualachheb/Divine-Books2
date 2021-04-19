import express from 'express'
import { getAllUsers, createNewUser } from '../controllers/user.js'


const router = express.Router()


router.get('/', getAllUsers)
// router.put('/:id', editUser)
router.post('/', createNewUser)
// router.delete('/:id', deleteUser)

export default router