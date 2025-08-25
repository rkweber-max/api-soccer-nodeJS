import { Router } from "express";
import { create, list } from "../controllers/statController.js";

const router = Router();

router.post("/", create);
router.get("/", list);

export default router;
