const express = require('express');
const dotenv = require('dotenv');
const cookies = require("cookie-parser");
const cors = require('cors')

dotenv.config();

// Create express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
app.use(cors({origin: true, credentials: true}));

// Routes
app.get('/', async (req, res) => {
  res.json({ message: 'Test API Running' });
});

//Before starting the server
const PostsRoute = require('./routes/posts');
app.use('/api/posts', PostsRoute);
const AuthRoute = require('./routes/auth');
app.use('/api/auth', AuthRoute);

// Starting server
app.listen(
  process.env.PORT,
  console.log('Listening on port ', process.env.PORT)
);