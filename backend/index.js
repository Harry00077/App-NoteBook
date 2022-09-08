const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");
const userRoutes = require("../backend/routes/userRoutes");
const path = require("path");
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use("/backend/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("API IS RUNNING.,.");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Api is running on port ${PORT}`);
});
