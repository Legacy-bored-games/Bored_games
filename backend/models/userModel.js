import mongoose from "mongoose";
import validator from 'validator';

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            validate: [validator.isEmail, 'Valid email is required'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },


    },
    { timestamps: true }
);

export default mongoose.model("user", userSchema);