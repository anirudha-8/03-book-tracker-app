import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const PORT = 8080;

dotenv.config();

app.use(cors());

app.get("/", (req, res) => res.json({ message: "API running" }));

app.listen(PORT, () =>
	console.log(`Server started at: http://localhost:${PORT}`)
);
