import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

//ADD ROUTES

app.get("/", (req, res) => {
  res.send("hello!!!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
