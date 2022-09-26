import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
   
    where: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    boardGame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'boardGame'
    },
    howManyPlayers: {
        type: Number
    },
    levelOfDifficulties: {
        type: String
    },
    averageDuration: {
        type: String,

    },
    participantUser: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    creatorUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
     
});

export default mongoose.model('event', eventSchema);