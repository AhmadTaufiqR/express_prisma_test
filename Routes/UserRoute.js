import express from "express";
import { getAllUsers, createUsers } from "../Controllers/UserController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", createUsers);

export default router;
