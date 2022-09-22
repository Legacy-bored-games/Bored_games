import express from 'express';

import { getBoredGames,  getBoredGamesBySearch, getBoredGame, createBoredGame, updateBoredGame, deleteBoredGame } from '../controllers/boredGames.js';

const router = express.Router();
import auth from "../middleware/auth.js";


router.get('/search', getBoredGamesBySearch);
router.get('/', getBoredGames);
router.get('/:id', getBoredGame);

router.post('/', auth,  createBoredGame);
router.patch('/:id', auth, updateBoredGame);
router.delete('/:id', auth, deleteBoredGame);

 

export default router;