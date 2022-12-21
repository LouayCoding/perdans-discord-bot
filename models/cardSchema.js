const mongoose = require('mongoose');

let cardSchema = new mongoose.Schema({
    userId: String,
    background: String,
    levelColor: String,
    rankColor: String,
    balkColor: String,
});

const card = mongoose.model('Card', cardSchema);


module.exports = card;