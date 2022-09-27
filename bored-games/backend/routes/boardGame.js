import express from 'express';

import { getBoardGames,  getBoardGamesBySearch, getBoardGame, createBoardGame, updateBoardGame, deleteBoardGame } from '../controllers/boardGame.js';

const router = express.Router();
import auth from "../middleware/auth.js";


router.get('/search', getBoardGamesBySearch);
router.get('/', getBoardGames);
router.get('/:id', getBoardGame);

router.post('/',   createBoardGame);
router.patch('/:id', auth, updateBoardGame);
router.delete('/:id', auth, deleteBoardGame);

 

export default router;