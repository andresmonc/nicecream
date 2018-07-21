//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const url = "https://api.yelp.com/v3/businesses/search"

console.log('wtf');
router.get('/', function(req, res){ 
    request(url , function (error, response, body) { 
      if (!error && response.statusCode === 200) { 
        console.log('hiiiiiiiiiiiiiiii'); 
        res.send(body); 
      }
     }); 
  });

  router.get('/test',function(req,res){
      res.send('hi')
  })

  module.exports = router;