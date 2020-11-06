import { Router } from "express";
import { newTeam, get_team, edit, delete_team } from "../controllers/teamController.js";

const router = Router();

router.post("/new", newTeam);
router.get("/:id", get_team);
router.put("/:id", edit);
router.delete("/:id", delete_team);

export default router;
