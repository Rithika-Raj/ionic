var express     = require('express');
var bodyParser  = require('body-parser');
var passport	= require('passport');
var mongoose    = require('mongoose');
var config      = require('./config/config');
var port        = process.env.PORT || 5000; 
var cors        = require('cors');

var app = express();
/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});
app.use(cors());
 


// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);
 
// Demo Route (GET http://localhost:5000)
app.get('/', function(req, res) {
  return res.send('Hello! The API is at http://localhsot:' + port + '/api');
});

var routes = require('./routes');
app.use('/api', routes);
 
mongoose.connect(config.db, { useNewUrlParser: true , useCreateIndex: true});
 
const connection = mongoose.connection;

//192.168.225.203
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
 
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});

// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);