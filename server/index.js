import express from "express";
import dotenv from "dotenv";

// Routes
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json());
dotenv.config();

// Use Routes
app.use("/api/users", userRoutes);

app.listen(8080, () => {
  console.log(`Express server is running on Port 8080!`);
});
