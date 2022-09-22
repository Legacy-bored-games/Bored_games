import mongoose from 'mongoose';

const BoardGameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    minPlayer: {
        type: Number,
        required: true
    },
    maxPlayer: {
        type: Number
    },
    description: {
        type: Number
    },
     
});

export default BoardGame = mongoose.model('boardGame', BoardGameSchema);