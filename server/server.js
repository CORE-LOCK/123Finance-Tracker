import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./Config/connect-db.js";
import createInvestment from "./Routes/investmentRoutes.js";
import createuser from "./Routes/userRoutes.js"
import "./services/cron/checkDailyPremium.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", createInvestment);
app.use("/api", createuser);

connectDB();

const Port = 5000;
app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
