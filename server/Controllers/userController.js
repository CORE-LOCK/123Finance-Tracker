import userModel from "../Models/Usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { Name , email, password } = req.body;
    if (!Name || !email || !password) {
      return res.json({
        message: "please fill all detail",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "user already register",
        success: false,
      });
    }
    const hashedpass = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      Name,
      email,
      password: hashedpass,
    });

    return res.status(201).json({
      message: "user created successfully",
      Name,
      email,
     
    });
  } catch (error) {
    return res.status(400).json({
      message: "user can't created",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body; 
    if (!email || !password) {
      return res.json({
        message: "please fill all detail",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "user can't find please register first",
        success: false,
      });
    }
    const matchpass = await bcrypt.compare(password, user.password);
       if (!matchpass) {
        res.status(400).json({
        message: "incorrect password",
        success: false,
      });}

      const token = jwt.sign({
          userId: user._id,
      },process.env.JWT_SECRET,{
        expiresIn: "7d"
      })
       
      res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "user can't created",
      success: false,
    });
  }
};
