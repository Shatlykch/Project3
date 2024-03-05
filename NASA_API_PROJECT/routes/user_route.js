import { Router } from "express";
import * as controllers from "../controllers/userController.js";

const router = Router();

router.get("/", controllers.getApods);
router.get("/:id", controllers.getApod);
router.post("/", controllers.createApod);
router.put("/:id", controllers.updateApod);
router.delete("/:id", controllers.deleteApod);

export default router;