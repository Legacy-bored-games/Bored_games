import mongoose from "mongoose";
import validator from 'validator';

const userSchema = mongoose.Schema(
    {

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        validationId: {
            type: String,
            required: true,
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            
        },
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
       
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("user", userSchema);