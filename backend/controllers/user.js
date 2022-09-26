import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";
 
const secret = 'board';

//*Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "21h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong when login" });
  }
};
//*SignUp
export const signup = async (req, res) => {
  const { firstName, lastName, email, password, country, city, dateOfBirth, validationId, favBoardGame, avatar, isAdmin} = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ firstName, lastName, email, password: hashedPassword, country, city, dateOfBirth, validationId, favBoardGame, avatar, isAdmin });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "21h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong when signUp" });
    
    console.log(error);
  }
};

//* GET all users
export const getUsers = async (req, res) => {
  try {
      const users = await UserModel.find()
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

      const users = await UserModel.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

      res.json({ data: users });
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}
//* GET user by userId
export const getUser = async (req, res) => {
  const { id } = req.params; 
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Profile with id: ${id}`);
  try {
      const user = await UserModel.findById(req.params.id);

      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

//* update user
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, password, country, city, dateOfBirth, validationId, favBoardGame, avatar, isAdmin } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No Profile with userId: ${userId}`);
  
  const hashedPassword = await bcrypt.hash(password, 12);
  const updatedUser = { firstName, lastName, email, password:hashedPassword, country, city, dateOfBirth, validationId, favBoardGame, avatar, isAdmin, userId: userId };

  await UserModel.findByIdAndUpdate(userId, updatedUser, { new: true });

  res.json(updatedUser);
}
//* delete user
export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No User with userId: ${userId}`);

  await UserModel.findByIdAndRemove(userId);

  res.json({ message: "User deleted successfully." });
}