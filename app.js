import express from "express";
import cors from "cors";
import studentRouter from "./src/routers/getAllStu.router.js";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(express.json());

app.use("/api/v1", studentRouter);
export default app;
