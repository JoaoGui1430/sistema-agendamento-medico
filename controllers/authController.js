const { users } = require('../data/db');
const generateToken = require('../utils/generateToken');

exports.register = (req, res) => {
  const { name, email, password } = req.body;
  if (users.find(u => u.email === email))
    return res.status(400).json({ msg: 'Email já registrado' });

  const user = { id: Date.now(), name, email, password };
  users.push(user);

  const token = generateToken(user);


  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(400).json({ msg: 'Credenciais inválidas' });

  const token = generateToken(user);
  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};
