const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());

dotenv.config();

// Routes
const userRoute = require("./routes/users");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.log(`MongoDB Error:`, err));

// Use Routes
app.use("/api/users", userRoute);

app.listen(8080, () => {
  console.log(`Express server is running on Port 8080!`);
});
