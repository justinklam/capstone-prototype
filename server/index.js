import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(`MongoDB Error:`, err));

app.listen(8080, () => {
  console.log(`Express server is running on Port 8080!`);
});
