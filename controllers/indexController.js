const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Team
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Team
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllPlayers: function (req, res) {
        db.Players
            .find(req.query)
            .then(playerInfo => res.json(playerInfo))
            .catch(err => res.status(422).json(err))
    },
    savePlayer: function (req, res) {
        let myPlayer = {
            firstName: req.body.player.fname,
            lastName: req.body.player.lname,
            position: req.body.player.position,
            team: req.body.player.team
        }
        db.Team
            .findOneAndUpdate({ owner: req.body.owner }, { $push: { players: myPlayer } })
            .then(playerInfo => res.json(playerInfo))
            .catch(err => res.status(422).json(err))
    },
}