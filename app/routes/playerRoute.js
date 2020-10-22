const express = require("express");
const playerController = require("../controllers/playerController");

const router = express.Router();

router.post("/new", playerController.new);
router.get("/:id", playerController.get_player);
router.put("/:id", playerController.edit);
router.delete("/:id", playerController.delete_player);

module.exports = router;
