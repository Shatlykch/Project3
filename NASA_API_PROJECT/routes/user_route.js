import { Router } from "express";
import * as controllers from "../controllers/userController.js";

const router = Router();

router.get("/", controllers.getApods);
// router.get("/:id", controllers.getCharacter);
// router.post("/", controllers.createCharacter);
// router.put("/:id", controllers.updateCharacter);
// router.delete("/:id", controllers.deleteCharacter);

export default router;