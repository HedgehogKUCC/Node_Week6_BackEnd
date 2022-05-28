const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '【暱稱】必填'],
            trim: true,
        },
        sex: {
            type: String,
            enum: ['male', 'female'],
            required: [true, '【性別】必填'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, '【帳號】必填'],
            trim: true,
        },
        password: {
            type: String,
            required: [true, '【密碼】必填'],
            select: false,
            trim: true,
        },
        avatar: {
            type: String,
            default: 'https://i.imgur.com/m8khK3h.png',
            match: /^https/g,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            select: false,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
            select: false,
        }
    },
    {
        versionKey: false,
    }
);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
