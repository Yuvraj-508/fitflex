import express from "express";
import { addUser, getUserList, getUserById } from "../controllers/User.js";

const userRouter = express.Router();

userRouter.post("/add-user", addUser);
userRouter.get("/user-list", getUserList);
userRouter.get("/profile/:id", getUserById);

export default userRouter;
