import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// routes
app.get("/api", (req, res) => res.json({ message: "API running" }));

// listening to the server
app.listen(PORT, () =>
	console.log(`Server started at: http://localhost:${PORT}`)
);
