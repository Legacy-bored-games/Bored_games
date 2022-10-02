import express from 'express'
import multer from 'multer'
import { upload } from '../server.js'
import {
  login,
  signup,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/user.js'
import auth from '../middleware/auth.js'
const router = express.Router()

router.post('/login', login)
router.post('/signup', signup) //*signUp same with create user
router.get('/', getUsers)
router.get('/:id', getUser)

router.patch('/:id', auth, updateUser)
router.delete('/:id', auth, deleteUser)

export default router
