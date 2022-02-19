const express = require('express');

const PostController = require('./controllers/PostController');
const routs = express.Router();

routs.get('/posts', PostController.list);
routs.get('/posts/:autor', PostController.listByAutor);
routs.post('/posts', PostController.create);
routs.put('/posts/:id', PostController.update);
routs.delete('/posts/:id', PostController.delete);


module.exports = routs;