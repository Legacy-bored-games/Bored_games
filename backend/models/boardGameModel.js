import mongoose from 'mongoose';

const boardGameSchema = mongoose.Schema({
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

export default mongoose.model('boardGame', boardGameSchema);