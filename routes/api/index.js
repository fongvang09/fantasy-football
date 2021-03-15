const router = require("express").Router();
const { get } = require("mongoose");
const teamController = require("../../controllers/indexController");

router.route("/")
    .get(teamController.findAll)
    .post(teamController.create)

router.route("/players")
    .get(teamController.findAll)

module.exports = router;