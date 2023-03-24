import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

// Routes
import userRoute from "./routes/users.js";

// Use Routes
app.use("/api/users", userRoute);

app.listen(8080, () => {
  console.log(`Express server is running on Port 8080!`);
});
