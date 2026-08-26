import express from "express";
import {createuser} from "../Controllers/userController.js"

const router = express.Router();

router.post("/usercreate", createuser);

export default router;