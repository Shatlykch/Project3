import { Router } from "express";

import userRoute from "./user_route.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));
router.use("/apods", userRoute)

export default router;