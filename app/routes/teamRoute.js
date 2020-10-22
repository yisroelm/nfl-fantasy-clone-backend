const express = require("express");
const teamController = require("../controllers/teamController");

const router = express.Router();

router.post("/new", teamController.new);
router.get("/:id", teamController.get_team);
router.put("/:id", teamController.edit);
router.delete("/:id", teamController.delete_team);

module.exports = router;
