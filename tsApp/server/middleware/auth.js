const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const fs = require("fs")
dotenv.config();
const refreshList = {};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.decoded = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

const userLogin = async (req, res, next) => {
  fs.readFile( __dirname + "/../data/" + "users.json", 'utf8', async (err, data) => {
    const users = JSON.parse(data)
    const user = users.find((item) => item.username === req.body.username);
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        const token = generateAccessToken(user.id, user.username, user.email);
        req.token = token;
        const refreshToken = generateRefreshToken(
          user.id,
          user.username,
          user.email,
        );
        req.refreshToken = refreshToken;
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        req.content = decoded;
  
        addToList(refreshToken, token);
        return next();
      } else {
        res.status(400).json({ error: 'Invalid Password' });
      }
    } else {
      res.status(401).json({ error: 'User not found' });
    }
  });
};


const userRegister = async (req, res, next) => {
  fs.readFile( __dirname + "/../data/" + "users.json", 'utf8', async (err, data) => {
    const users = JSON.parse(data)
    if (users.find(item => item.username === req.body.username || item.email === req.body.email)) {
      return res.status(400).json({ error: 'Duplicate User'})
    }
    const lastId = users[users.length - 1].id
    const user = {id: lastId + 1, username: req.body.username, email: req.body.email, password: await generatePassword(req.body.password)}
    const updatedUsers = [...users, user]
    fs.writeFile(__dirname + "/../data/users.json",
    JSON.stringify(updatedUsers, null, '\t'), "utf8", function(err, data){
      const token = generateAccessToken(user.id, user.username, user.email);
      req.token = token;
      const refreshToken = generateRefreshToken(
        user.id,
        user.username,
        user.email,
      );
      req.refreshToken = refreshToken;
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
      req.content = decoded;
  
      addToList(refreshToken, token);
      return next();
    })
  });
};

const tokenRefresh = (req, res, next) => {
  const postData = req.cookies;
  if (postData.refreshToken && postData.refreshToken in refreshList) {
    const decoded = jwt.verify(
      postData.refreshToken,
      process.env.SECRET_RTOKEN
    );

    const token = generateAccessToken(
      decoded.id,
      decoded.username,
      decoded.email,
    );
    const refreshToken = generateRefreshToken(
      decoded.id,
      decoded.username,
      decoded.email,
    );
    const newDecoded = jwt.verify(token, process.env.SECRET_TOKEN);
    req.content = newDecoded;
    req.token = token;
    req.refreshToken = refreshToken;

    addToList(refreshToken, token);
  } else {
    return res.status(401).send("Can't refresh. Invalid Token");
  }
  next();
};


async function generatePassword(pw) {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(pw, salt);
  return password
};

function generateAccessToken(id, username, email) {
  return jwt.sign(
    { id: id, username: username, email: email },
    process.env.SECRET_TOKEN,
    {
      expiresIn: '1h',
    }
  );
}

function generateRefreshToken(id, username, email) {
  return jwt.sign(
    { id: id, username: username, email: email },
    process.env.SECRET_RTOKEN,
    {
      expiresIn: '30d',
    }
  );
}

function addToList(refreshToken, token) {
  refreshList[refreshToken] = {
    status: 'loggedin',
    token: token,
    refreshtoken: refreshToken,
  };
}

module.exports = { verifyToken, userLogin, tokenRefresh, userRegister };