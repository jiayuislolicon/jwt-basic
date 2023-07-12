const express = require('express');
const router = express.Router();

const { login, dashboard } = require('../controllers/main');
const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, dashboard); // 透過 authMiddleware 做 token 驗證
router.route('/login').post(login);

module.exports = router;
