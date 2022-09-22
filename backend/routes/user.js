import express from 'express';

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/events.js';

const router = express.Router();
import auth from "../middleware/auth.js";



router.get('/', getUsers);
router.get('/:id', getUser);

router.post('/', auth,  createUser);
router.patch('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

 

export default router;