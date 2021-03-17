const router = require("express").Router();
const { get } = require("mongoose");
const teamController = require("../../controllers/indexController");

router.route("/")
    .get(teamController.findAll)
    .post(teamController.create)

router.route("/team")
    .post(teamController.create)

router.route("/team/:id")
    .get(teamController.findOne)

router.route("/players")
    .get(teamController.findAllPlayers)
    .post(teamController.savePlayer)

module.exports = router;