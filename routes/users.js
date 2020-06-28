var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {
      name: 'A',
      age: 7
    },
    {
      name: 'A',
      age: 7
    },
    {
      name: 'A',
      age: 7
    },
    {
      name: 'A',
      age: 7
    }
  ]
  res.send(users);
});

module.exports = router;
