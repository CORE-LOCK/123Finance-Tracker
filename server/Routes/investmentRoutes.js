import express from "express";
import { createInvestment } from "../Controllers/investment-Controller.js";
import { authMiddleware } from "../services/middlewares/authMiddleware.js";
import {
  getAllInvestment,
  updateInvestment,
  deleteInvestment,
} from "../Controllers/getAll-investment-Controller.js";

const router = express.Router();

router.post("/add-investment", authMiddleware, createInvestment);
router.get("/all-investments", authMiddleware, getAllInvestment);
router.put("/update-investment/:id", authMiddleware, updateInvestment);
router.delete("/delete-investment/:id", authMiddleware, deleteInvestment);

export default router;
