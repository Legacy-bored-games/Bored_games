import express from 'express';

import { getEvents,  getEventsBySearch, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/events.js';

const router = express.Router();
import auth from "../middleware/auth.js";


router.get('/search', getEventsBySearch);
router.get('/', getEvents);
router.get('/:id', getEvent);

router.post('/', auth,  createEvent);
router.patch('/:id', auth, updateEvent);
router.delete('/:id', auth, deleteEvent);

 

export default router;