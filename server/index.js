import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

dotenv.config();

app.listen(8080, () => {
  console.log(`Express server is running on Port 8080!`);
});
