import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from './routes/userRouter.js';

const server = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
await connectDB();

// CORS configuration
const corsOptions = {
  origin: [
    'https://fitflex-one.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

// Middleware
server.use(cors(corsOptions));
server.options("*", cors(corsOptions)); // handle preflight
server.use(express.json());

// Routes
server.get("/", (req, res) => res.send("Server running 🚀"));
server.use("/api", userRouter);

// Start server
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
