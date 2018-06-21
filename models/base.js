let mongoose = require('mongoose');

const statSchema = new Schema({
    health: Number,
    attack: Number,
    speed: Number
});

const ownerSchema = new Schema({
    userid: String,
    username: String
});

const heroSchema = new Schema({
    name: String,
    stats: [statSchema]
});

const baseSchema = new Schema({
    owner: [ownerSchema],
    hero: [heroSchema],
});

let Base = module.exports = mongoose.model('Base', baseSchema);

