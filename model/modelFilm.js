const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new Schema({
    userId: Schema.Types.ObjectId,
    title: String,
    year: String,
    director: String,
    cover: String,
    genre: [String],
    puntuation: Number,
});
const filmModel = mongoose.model("Film", filmSchema);
module.exports = filmModel;