import express from 'express';
import mongoose from 'mongoose';

import userModel from '../models/userModel.js';

const router = express.Router();
//* GET all users
export const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.json({ data: users });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* GET user by specific value
export const getUsersBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const users = await userModel.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

        res.json({ data: users });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* GET user by id
export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* create user
export const createUser = async (req, res) => {


    const newUser = new userModel(req.body)

    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//* update user
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, category, minPlayer, maxPlayer, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User with id: ${id}`);

    const updatedUser = { name, category, minPlayer, maxPlayer, description, _id: id };

    await userModel.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}
//* delete user
export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No User with id: ${id}`);

    await userModel.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}
export default router;