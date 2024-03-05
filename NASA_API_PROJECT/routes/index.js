import { Router } from "express";

import UserRoute from "./user_route.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));


router.use("/apods", apodsRoutes)

export default router;