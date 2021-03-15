const mongoose = require("mongoose");
const db = require("../models");
const axios = require("axios");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fantasy_teams", { useNewUrlParser: true, useUnifiedTopology: true }
);

const teamSeed = axios.get(`https://www.fantasyfootballnerd.com/service/players/json/${process.env.API_KEY}`);
// [
//   {
//     name: "Golden Goofers",
//     owner: "Evan Furniss",
//     record: "0-9",
//     players: [
//       {
//         firstName: "Kirk",
//         lastName: "Cousins",
//         position: "Quarterback",
//         points: 9
//       },
//       {
//         firstName: "Adrian",
//         lastName: "Peterson",
//         position: "Running Back",
//         points: 10
//       },
//     ]
//   }
// ]

console.log(teamSeed);
// db.Team
//   .deleteMany({})
//   .then(() => db.Team.collection.insertMany(teamSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });