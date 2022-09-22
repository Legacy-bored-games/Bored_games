import express from 'express';
import mongoose from 'mongoose';

import boardGameModel from '../models/boardGameModel';

const router = express.Router();

//* GET all boardGames
export const getBoardGames = async (req, res) => {
    try {
      
        //*get all boardGames and sort by name
        const boardGames = await boardGameModel.find().sort({ name: -1 })

        res.json({ data: boardGames});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
//* GET boardGame by specific value
export const getBoardGamesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const boardGames = await boardGameModel.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: boardGames });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
//* GET boardGame by id
export const getBoardGame = async (req, res) => { 
    const { id } = req.params;

    try {
        const boardGame = await boardGameModel.findById(id);
        
        res.status(200).json(boardGame);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* create boardGame
export const createBoardGame = async (req, res) => {
     

    const newBoardGame = new boardGameModel(req.body)

    try {
        await newBoardGame.save();

        res.status(201).json(newBoardGame);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//* update boardGame
export const updateBoardGame = async (req, res) => {
    const { id } = req.params;
    const { name, category, minPlayer, maxPlayer, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No BoardGame with id: ${id}`);

    const updatedBoardGame = { name, category, minPlayer, maxPlayer, description, _id: id };

    await boardGameModel.findByIdAndUpdate(id, updatedBoardGame, { new: true });

    res.json(updatedBoardGame);
}
//* delete boardGame
export const deleteBoardGame = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No BoardGame with id: ${id}`);

    await boardGameModel.findByIdAndRemove(id);

    res.json({ message: "BoardGame deleted successfully." });
}

export default router;