import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import validator from 'validator';
const UserSchema = new mongoose.Schema(
    {

        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: [true, 'Email area is required'],
            unique: true,
            validate: [validator.isEmail, 'Valid email is required'],
        },
        password: {
            type: String,
            required: true,
        },
        validationId: {
            type: String,
            required: true,
        },
        token: {
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
//?Look later for usage
// UserSchema.methods = {

//     matchPassword: function (password) {
//         return bcrypt.compare(password, this.password);
//     }

// };

// UserSchema.pre('save', function (next) {
//     if (this.isModified('password')) {
//         bcrypt.genSalt(saltRounds, (err, salt) => {
//             bcrypt.hash(this.password, salt, (err, hash) => {
//                 if (err) { next(err); return }
//                 this.password = hash;
//                 next();
//             });
//         });
//         return;
//     }
//     next();
// });

export default mongoose.model("user", UserSchema);