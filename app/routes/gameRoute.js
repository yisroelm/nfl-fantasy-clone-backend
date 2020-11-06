import { Router } from "express";
import { newGame, get_game, edit, delete_game } from "../controllers/gameController.js";

const router = Router();

router.post("/new", newGame);
router.get("/:id", get_game);
router.put("/:id", edit);
router.delete("/:id", delete_game);

export default router;
