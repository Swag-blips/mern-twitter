import express from "express";

const app = express();

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.listen(5000, () => {
  console.log("server is running on port 8000");
});
