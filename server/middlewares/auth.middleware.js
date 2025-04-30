const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  const token = req.header("Authorization")?.replace("Bearer ", "");

  // check if token is provided
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {

    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // attach user info to request object
    req.user = decoded;

    // call the next middleware
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }

};

module.exports = authMiddleware;
