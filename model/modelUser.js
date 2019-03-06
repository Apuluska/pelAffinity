const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
    userName: String,
    email: { type: String, unique: true, lowercase: true },
    birthDate: Date,
    password: { type: String, select: false },
});
/* userSchema.pre('save', (next) => {
    let userSchema= user
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, null, (err, hash)=> {
            if(err) return next(err)
            
            user.password = hash
            next()
        });
    }); */
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;