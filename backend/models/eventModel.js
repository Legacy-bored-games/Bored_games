import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    where: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    howManyPlayers: {
        type: Number
    },
    levelOfDifficulties: {
        type: Number
    },
    averageDuration: {
        type: String,

    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    _boardGame: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'boardGame'
    },
});

export default mongoose.model('event', eventSchema);