var express = require('express');
var router = express.Router();

router.options('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')

  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
  res.send('cross origin request')
})

// jsonp demo
router.get('/jsonp', function (req, res) {
  const result = {
    code: 0,
    message: 'jsonp success'
  }

  res.send(`${req.query.cb}(${JSON.stringify(result)})`)
})

// iframe + form demo
router.post('/iframe_form', function (req, res) {
  const result = {
    code: 0,
    message: 'iframe and form',
    data: req.body
  }

  res.send(result)
})

// simple cors demo
router.get('/simple_cors', function (req, res) {
  const result = {
    code: 0,
    message: 'simple cors',
    data: req.query
  }
  
  res.header('Access-Control-Allow-Origin', '*')
  res.send(result)
})

// complex cors demo
router.post('/complex_cors', function (req, res) {
  const result = {
    code: 0,
    message: 'complex cors',
    data: req.query
  }

  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Request-Method', 'PUT,POST,GET,DELETE,OPTIONS')
  res.cookie('a', 1)

  res.send(result)
})

module.exports = router;
