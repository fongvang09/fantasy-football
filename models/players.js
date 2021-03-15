const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    playerId: String,
    active: String,
    jersey: String,
    lname: String,
    fname: String,
    displayName: String,
    team: String,
    position: String,
    height: String,
    weight: String,
    dob: String,
    college: String,
});

const Players = mongoose.model("Players", playerSchema)
module.exports = Players;