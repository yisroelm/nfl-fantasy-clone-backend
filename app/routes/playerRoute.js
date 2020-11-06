import { Router } from "express";
import { newPlayer, get_player, edit, delete_player } from "../controllers/playerController.js";

const router = Router();

router.post("/new", newPlayer);
router.get("/:id", get_player);
router.put("/:id", edit);
router.delete("/:id", delete_player);

export default router;
