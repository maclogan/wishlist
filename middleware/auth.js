const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header (select the header key from the req obj)
  const token = req.header('x-auth-token');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' }); // Not authorized status
  }

  // Verify token - decode the user information and set the request object's user to the decoded token's payload's user data.
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Invalid token' });
  }
};
