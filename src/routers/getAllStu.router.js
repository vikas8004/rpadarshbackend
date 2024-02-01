import express from "express";
const studentRouter = express.Router();

studentRouter.route("/allstudents").get(getAllStu);
export default studentRouter;
