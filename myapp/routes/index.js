var express = require('express');
var path = require('path');
var app = express();
var port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('testing')
  })

  app.post('/', function (req, res) {
    res.send('12')
  })
  app.listen(port, () =>
   console.log(`Example app listening on port ${port}!`))

    
 var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressssssss' });
});



module.exports = router;
