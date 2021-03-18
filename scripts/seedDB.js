const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fantasy_teams", { useNewUrlParser: true, useUnifiedTopology: true }
);
let teamSeed;

axios.get(`https://www.fantasyfootballnerd.com/service/players/json/test`)
  .then(res => {
    teamSeed = res.data.Players.filter(player => player.active == "1");
  })
  .then(res => {
    db.Players
      .remove({})
      .then(() => db.Players.collection.insertMany(teamSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch(err => {
    console.log(err);
  })