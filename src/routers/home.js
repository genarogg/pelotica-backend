import express from "express";

import { homeGet, homePost } from "../controllers/home.js";

const router = express.Router();

router.get("/", homeGet);

router.post("/", homePost);

export default router;
