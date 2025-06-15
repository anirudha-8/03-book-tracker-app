import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// routes
app.get("/api", (req, res) => res.json({ message: "API running" }));

// adding book routes
app.use("/api/books", bookRoutes);

// connecting to database
connectDB();

// listening to the server
app.listen(PORT, () =>
	console.log(`Server started at: http://localhost:${PORT}`)
);
