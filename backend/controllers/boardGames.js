import express from 'express';
import mongoose from 'mongoose';

import boredGameModel from '../models/boredGameModel.js';

const router = express.Router();

//* GET all boredGames
export const getBoredGames = async (req, res) => {
    try {
      
        //*get all boredGames and sort by name
        const boredGames = await boredGameModel.find().sort({ name: -1 })

        res.json({ data: boredGames});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
//* GET boredGame by specific value
export const getBoredGamesBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const boredGames = await boredGameModel.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: boredGames });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}
//* GET boredGame by id
export const getBoredGame = async (req, res) => { 
    const { id } = req.params;

    try {
        const boredGame = await boredGameModel.findById(id);
        
        res.status(200).json(boredGame);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* create boredGame
export const createBoredGame = async (req, res) => {
     

    const newBoredGame = new boredGameModel(req.body)

    try {
        await newBoredGame.save();

        res.status(201).json(newBoredGame);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//* update boredGame
export const updateBoredGame = async (req, res) => {
    const { id } = req.params;
    const { name, category, minPlayer, maxPlayer, description } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No BoredGame with id: ${id}`);

    const updatedBoredGame = { name, category, minPlayer, maxPlayer, description, _id: id };

    await boredGameModel.findByIdAndUpdate(id, updatedBoredGame, { new: true });

    res.json(updatedBoredGame);
}
//* delete boredGame
export const deleteBoredGame = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No BoredGame with id: ${id}`);

    await boredGameModel.findByIdAndRemove(id);

    res.json({ message: "BoredGame deleted successfully." });
}

export default router;