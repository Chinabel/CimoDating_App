const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  // Add other user fields (e.g., age, interests, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
