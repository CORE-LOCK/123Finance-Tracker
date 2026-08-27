import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }
    const token = authHeader.split("")[1];
    const decord = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decord;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "invalid token",
    });
  }
};

export default authMiddleware;
