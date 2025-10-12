import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from './routes/userRouter.js';
const server = express();
const PORT = process.env.PORT || 3000;

// 🧠 Connect to MongoDB
await connectDB();

// 🛡️ CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:5173", 
    "https://fitflex-one.vercel.app"
  ],
  credentials: true,
};
server.use(cors(corsOptions));

// 🧩 Middleware
server.use(express.json());

// ✅ Routes
server.get("/", (req, res) => {
  res.send("Server is runnning successfully 🚀");
});

server.use("/api", userRouter);

// 🎧 Start Server
server.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
