const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, 'secret', {
    expiresIn: '1h',
  });
}

module.exports = generateToken;