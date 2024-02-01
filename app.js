import express from "express";
import userRouter from "./src/routers/user.router.js";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: ["https://jsbackend-g4za.onrender.com", "http://localhost:5173"],
  })
);
app.use(express.json());

app.use("/api/v1", userRouter);
export default app;
