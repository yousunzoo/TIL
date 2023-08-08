const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const fs = require("fs")

router.get('/', async (req, res) => {
  fs.readFile( __dirname + "/../data/" + "posts.json", 'utf8', function (err, data) {
    const posts = JSON.parse(data)
    res.json(posts);
  });
});

router.get('/:id', async (req, res) => {
  fs.readFile( __dirname + "/../data/" + "posts.json", 'utf8', function (err, data) {
    const posts = JSON.parse(data)
    const id = req.params.id;
    const post = posts.find((item) => item.id === Number(id));
    if (!post) {
      res.status(404).json({"error": "Not Found"})
      return
    } 
    res.json(post);
  });
});

router.post('/', verifyToken, async (req, res) => {
  if(!req.body["body"] || !req.body["title"]){
    result["success"] = 0;
    result["error"] = "invalid request";
    res.json(result);
    return;
  }
  fs.readFile( __dirname + "/../data/" + "posts.json", 'utf8', function (err, data) {
    const posts = JSON.parse(data)
    const last = posts[posts.length - 1]
    const post = {userId: req.decoded.id, id: last.id + 1, ...req.body}
    const updatedPosts = [...posts, post]
    fs.writeFile(__dirname + "/../data/posts.json",
    JSON.stringify(updatedPosts, null, '\t'), "utf8", function(err, data){
      res.status(201).json(post);
    })
  });
});

router.put('/:id', verifyToken, async (req, res) => {
  if(!req.body["body"] || !req.body["title"]){
    result["success"] = 0;
    result["error"] = "invalid request";
    res.json(result);
    return;
  }
  fs.readFile( __dirname + "/../data/" + "posts.json", 'utf8', function (err, data) {
    const posts = JSON.parse(data)
    const id = req.params.id;
    const post = {...posts.find(post => post.id === Number(id)), title: req.body.title, body: req.body.body}
    if (post.userId !== req.decoded.id) {
      res.status(401).send('No Permission');
      return;
    }
    const updatedPosts = posts.map(item => item.id === Number(id) ? post : item)
    fs.writeFile(__dirname + "/../data/posts.json",
    JSON.stringify(updatedPosts, null, '\t'), "utf8", function(err, data){
      res.status(201).json(post);
    })
  });
});

router.delete('/:id', verifyToken, async (req, res) => {
  fs.readFile( __dirname + "/../data/" + "posts.json", 'utf8', function (err, data) {
    const posts = JSON.parse(data)
    const id = req.params.id;
    const postAuthor = posts.find(post => post.id === Number(id)).userId
    const updatedPosts = posts.filter(post => post.id !== Number(id))
    if (postAuthor !== req.decoded.id) {
      res.status(401).send('No Permission');
      return;
    }
    fs.writeFile(__dirname + "/../data/posts.json",
    JSON.stringify(updatedPosts, null, '\t'), "utf8", function(err, data){
      res.status(204).json({});
    })
  });
});

module.exports = router;