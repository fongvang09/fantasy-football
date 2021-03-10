const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    record: String,
    players: [{ firstName: String, lastName: String, position: String, points: Number }]
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;