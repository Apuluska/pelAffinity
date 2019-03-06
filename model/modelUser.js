const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    userName: String,
    email: { type: String, unique: true, lowercase: true },
    birthDate: Date,
    password: { type: String, select: false },
});
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
