//Initialize required modules
const express=  require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const yelp = require('./controllers/yelp')
const app = express();
const port = 3000;

//middleware for cors
app.use(cors());
//middleware for bodyparsing using urlencoding
app.use(bodyParser.urlencoded({extended:true}))
//middleware for bodyparsing using urlencoding
app.use(bodyParser.json())
 app.use('/yelp',yelp)
/*express.static is a built in middleware function to serve static files.
 We are telling express server public folder is the place to look for the static files*/
 app.use(express.static(path.join(__dirname, 'public')));
 app.get('/',(req,res,next) => { // es6 syntax (function (req,res,next){})
    res.send('invalidpage');
})

//Starts the server to host static files
app.listen(port, () => {
   console.log(`Express Server listening on port:${port}`) 
});
