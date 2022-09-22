import express from 'express';
import mongoose from 'mongoose';

import eventModel from '../models/eventModel.js';

const router = express.Router();

//* GET all events
export const getEvents = async (req, res) => {
    try {
        //*get all events and sort by date
        const events = await eventModel.find().sort({ when: -1 })

        res.json({ data: events });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//* GET all events by specific value
export const getEventsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const events = await eventModel.find({ $or: [{ title }, { tags: { $in: tags.split(',') } }] });

        res.json({ data: events });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
//* GET event by id
export const getEvent = async (req, res) => {
    const { id } = req.params;

    try {
        const event = await eventModel.findById(id);

        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//* create event
export const createEvent = async (req, res) => {


    const newEvent = new eventModel(req.body)

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//* update event
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, category, minPlayer, maxPlayer, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Event with id: ${id}`);

    const updatedEvent = { name, category, minPlayer, maxPlayer, description, _id: id };

    await eventModel.findByIdAndUpdate(id, updatedEvent, { new: true });

    res.json(updatedEvent);
}

//* delete event
export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Event with id: ${id}`);

    await eventModel.findByIdAndRemove(id);

    res.json({ message: "Event deleted successfully." });
}


export default router;