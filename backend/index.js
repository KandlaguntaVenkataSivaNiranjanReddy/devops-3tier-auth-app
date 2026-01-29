import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://13.48.49.224:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, "0.0.0.0", () =>
  console.log("Backend running on port 5000")
);
