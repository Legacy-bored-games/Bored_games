import express from 'express';
import mongoose from 'mongoose';
import UserInfoModel from '../models/userInfoModel.js';

const router = express.Router();
//* GET all usersInfo
export const getUsersInfo = async (req, res) => {
    try {
        const usersInfo = await UserInfoModel.find()
        res.json({ data: usersInfo });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* GET userInfo by specific value
export const getUsersInfoBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const usersInfo = await UserInfoModel.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

        res.json({ data: usersInfo });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* GET userInfo by userId
export const getUserInfo = async (req, res) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No Profile with id: ${userId}`);
    try {
        const userInfo = await UserInfoModel.findOne({userId: req.params.id});

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* create userInfo
export const createUserInfo = async (req, res) => {


    const newUserInfo = new UserInfoModel(req.body)
    

    try {
        await newUserInfo.save();

        res.status(201).json(newUserInfo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
//* update user
export const updateUserInfo = async (req, res) => {
    const { userId } = req.params;
    const { validationId, dateOfBirth, description, country, city, img, isAdmin } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No Profile with userId: ${userId}`);

    const updatedUser = { validationId, dateOfBirth, description, country,city, img,isAdmin, userId: userId };

    await UserInfoModel.findByIdAndUpdate(userId, updatedUser, { new: true });

    res.json(updatedUser);
}
//* delete userInfo
export const deleteUserInfo = async (req, res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No User with userId: ${userId}`);

    await UserInfoModel.findByIdAndRemove(userId);

    res.json({ message: "User deleted successfully." });
}
export default router;