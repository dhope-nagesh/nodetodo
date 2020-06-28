var express = require('express');
const Todo = require('../services/Todo');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.send(await Todo.find())
});

router.get('/:id', async function(req, res, next) {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  res.send(todo);
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const todoObj = req.body;
  Todo.update(id, todoObj, (err, todo) => {
    if(err) {
      res.send('Unable to find todo with id', status=404);
    } else {
      res.send(todo);
    }
  });
});

router.post('/', function(req, res, next) {
  const todo = req.body;
  Todo.create(todo, (err, todo, count) => {
    if(err) {
      res.send(err.errors, status=400);
    } else {
      res.send(todo, status=201);
    }
  });
});

module.exports = router;
