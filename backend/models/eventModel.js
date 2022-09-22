import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
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
        type: TimeRanges,

    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    _boardGame: {
        type: Schema.Types.ObjectId,
        ref: 'boardGame'
    },
});

module.exports = Event = mongoose.model('event', EventSchema);