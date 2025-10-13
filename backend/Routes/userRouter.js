import express from "express";
import { addUser, getUserList, getUserById, updateUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/add-user", addUser);
userRouter.get("/user-list", getUserList);
userRouter.get("/profile/:id", getUserById);
userRouter.put("/update-user/:id", updateUser);

export default userRouter;
