var express = require('express');
var router = express.Router();
var request = require('superagent');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stuff About Stuff' });
});




router.get('/myCommits', function (req, res) {  request.get("https://api.github.com/repos/UVU-DigitalMedia/DGM-Competency-Browser/commits?author=JoshMDiaz").end(function(err, response) {
    // res.json(response);
    res.render('commits', {title: "My Commits"})
  })
});



module.exports = router;
