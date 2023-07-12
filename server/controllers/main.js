const jwt = require('jsonwebtoken');
const BadRequestError = require('../errors/bad-request');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  // 未來應該是使用 _id
  const id = new Date().getDate();

  // 產生一組 token，process.env.JWT_SECRE 會是個很複雜的密碼
  // jsonwebtoken 文件：https://github.com/auth0/node-jsonwebtoken#readme
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
