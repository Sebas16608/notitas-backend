import { getAllNotita, getNotitaById, postNotita, putNotita, deleteNotita } from "../controllers/notita-controller";
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";

export const router = express.Router();

router.get("/", getAllNotita);
router.get("/:id", getNotitaById);
router.post("/", authMiddleware, postNotita);
router.put("/:id", authMiddleware, putNotita);
router.delete("/:id", authMiddleware, deleteNotita);

export default router;