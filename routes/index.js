var express = require('express');
var router = express.Router();

var weatherCard =
[
  {cityName: "Paris", weatherReport : "nuageux", pictureClass: "fas fa-cloud-showers-heavy", minTemp: 15, maxTemp: 30},
  {cityName: "Marseille", weatherReport : "ensoleilé", pictureClass: "fas fa-sun", minTemp: 15, maxTemp: 30}
]

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index');
});


router.post('/weather', function(req, res, next) {
  console.log(weatherCard)
  res.render('weather',{data:weatherCard});
});

router.get('/deconnexion', function(req, res, next) {
  res.render('index');
});










module.exports = router;
