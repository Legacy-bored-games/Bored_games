import mongoose from 'mongoose';

const boardGameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        
    },
    minPlayer: {
        type: Number,
       
    },
    maxPlayer: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
     
});

export default mongoose.model('boardGame', boardGameSchema);