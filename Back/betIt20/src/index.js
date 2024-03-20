import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js"
import betRoutes from "./routes/betRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.use(userRoutes);
app.use(betRoutes);

app.get("/status", (req, res) => {
  return res.send("Ok");
});



app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
