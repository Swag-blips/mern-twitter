import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectMongoDB();
});
