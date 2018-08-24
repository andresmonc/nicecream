//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
// const url = "https://api.yelp.com/v3/businesses/search";
var request = require('request');
var options = {
    url: 'https://api.yelp.com/v3/businesses/search?term=ice+cream&',
    headers: {
        'Authorization': 'Bearer Pv1lU27daPJgP-05n3gKusrl7WJ9tEb2r6EavLMsBQ7KQld62B_Q-J3_OgaB8NtdFe8ZDk4qh_opXjwb0Vj0Chhp9yZCLcjCLXQJOe02_z4BZd7ue1mhVQOaIN9QW3Yx'
    }
};

apiURL = 'https://api.yelp.com/v3/businesses/search?term=ice+cream&'

router.get('/', function (req, res) {

    var latitude = req.param('lat');
    var longitude = req.param('long');
    locationTail = `latitude=${latitude}&longitude=${longitude}`
    var apiCall = {
        url: `${apiURL}${locationTail}`,
        headers: {
            'Authorization': 'Bearer Pv1lU27daPJgP-05n3gKusrl7WJ9tEb2r6EavLMsBQ7KQld62B_Q-J3_OgaB8NtdFe8ZDk4qh_opXjwb0Vj0Chhp9yZCLcjCLXQJOe02_z4BZd7ue1mhVQOaIN9QW3Yx'
        }
    }
    // console.log (apiCall);
    request(apiCall, function (error, response, body) {
        res.send(body);
    });
});

module.exports = router;