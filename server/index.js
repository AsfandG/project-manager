import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to TaskHub API" });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
