import express from "express";
import getAllStudents from "../controllers/getAllStudent.controller.js";
const studentRouter = express.Router();

studentRouter.route("/allstudents").get(getAllStudents);
export default studentRouter;
