import { getAllUsers, getUserById, postUser, putUser, deleteUser } from "../controllers/user-controller";
import express from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import validateCreateUser from "../middleware/validator";

const router = express.Router();

router.get("/", authMiddleware, getAllUsers);
router.get("/:id",authMiddleware, getUserById);
router.post("/", validateCreateUser, postUser);
router.put("/:id", authMiddleware, validateCreateUser, putUser);
router.delete("/:id", authMiddleware, deleteUser);

export default router;