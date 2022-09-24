import express from 'express';

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();
import auth from "../middleware/auth.js";



router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/' ,  createUser);
router.patch('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

 

export default router;