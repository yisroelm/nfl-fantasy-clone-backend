const express = require("express");
const gameController = require("../controllers/gameController");

const router = express.Router();

router.post("/new", gameController.new);
router.get("/:id", gameController.get_game);
router.put("/:id", gameController.edit);
router.delete("/:id", gameController.delete_game);

module.exports = router;
