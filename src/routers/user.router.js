import express from "express";
import { addUsers, getUsers } from "../controllers/users.controller.js";
const userRouter = express.Router();

userRouter.route("/add-user").post(addUsers);
userRouter.route("/get-users").get(getUsers);

export default userRouter;
