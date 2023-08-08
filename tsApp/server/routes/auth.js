const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { userLogin, userRegister, tokenRefresh, verifyToken } = require('../middleware/auth');

dotenv.config();

router.get('/verify', verifyToken, async (req, res) => {
  res.json(req.decoded);
});

router.post('/login', userLogin, async (req, res) => {
  res.cookie('refreshToken', req.refreshToken, {path: '/', httpOnly: true, maxAge: 60*60*24*30*1000})
  res.json({
    ...req.content,
    accessToken: req.token,
  });
});

router.post('/register', userRegister, async (req, res) => {
  res.cookie('refreshToken', req.refreshToken, {path: '/', httpOnly: true, maxAge: 60*60*24*30*1000})
  res.status(201).json({
    ...req.content,
    accessToken: req.token,
  });
});

router.get('/refresh', tokenRefresh, async (req, res) => {
  res.cookie('refreshToken', req.refreshToken, {path: '/', httpOnly: true, maxAge: 60*60*24*30*1000})
  res.json({
    ...req.content,
    accessToken: req.token,
  });
});

module.exports = router;