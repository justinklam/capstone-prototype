import express from "express";

// Controller
import { getUsers } from "../controllers/users.js";

const router = express.Router();

// Get Users
router.get("/user", getUsers);

export default router;
