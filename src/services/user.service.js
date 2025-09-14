// Example: business logic helpers (expand as needed)
const User = require('../models/user.model');

exports.findByEmail = async (email) => {
  return User.findOne({ email });
};
