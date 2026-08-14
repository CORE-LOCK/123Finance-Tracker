import express from "express";
import {createInvestment} from "../Controllers/investment-Controller.js";
import {getAllInvestment , updateInvestment, deleteInvestment} from "../Controllers/getAll-investment-Controller.js";



const router = express.Router();


router.post("/add-investment", createInvestment);
router.get("/all-investments", getAllInvestment);
router.put("/update-investment/:id", updateInvestment);
router.delete("/delete-investment/:id", deleteInvestment);

export default router;