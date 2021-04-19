import express from 'express'
import { getAllUsers, createNewUser, editUsergot  } from '../controllers/user.js'


const router = express.Router()


router.get('/', getAllUsers)
router.post('/', createNewUser)
router.put('/:id', editUser)

export default router