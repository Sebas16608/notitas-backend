import { getAllNotita, getNotitaById, postNotita, putNotita, deleteNotita } from "../controllers/notita-controller";
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";

export const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllNotita);
router.get("/:id", getNotitaById);
router.post("/", postNotita);
router.put("/:id", putNotita);
router.delete("/:id", deleteNotita);

export default router;