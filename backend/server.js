import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectMongoDB();
});
