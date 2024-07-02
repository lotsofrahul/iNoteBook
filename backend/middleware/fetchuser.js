const jwt = require("jsonwebtoken");
const JWT_SECRET = "hellothisisssssh";

const fetchuser = (req, res, next) => {
  // Get the token from the header
  const token = req.header("auth-token");

  // Check if token doesn't exist
  if (!token) {
    return res.status(401).json({ error: "Access Denied! Please login." });
  }

  try {
    // Verify the token
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.variable; // Set req.user with user details
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({ error: "Invalid Token!" });
  }
};

module.exports = fetchuser;
