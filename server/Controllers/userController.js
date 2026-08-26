import userModel from "../Models/Usermodel.js";
import bcrypt from "bcrypt";

export const createuser = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneno, password } = req.body;
    if (!firstName || !lastName || !email || !phoneno || !password) {
      return res.json({
        message: "please fill all detail",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "user already exist",
        success: false,
      });
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      phoneno,
      password: hashedpass,
    });

    return res.status(201).json({
      message: "user created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "user can't created",
    });
  }
};
