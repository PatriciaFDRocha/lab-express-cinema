const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    description: String,
    showtimes: Array,
    image: String
}, {
    timestamps: true
});

module.exports = model('Movie', movieSchema);