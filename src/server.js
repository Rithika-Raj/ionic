//var express     = require('express');
var bodyParser  = require('body-parser');
var passport	= require('passport');
//var config      = require('./config/config');
//var port        = process.env.PORT || 3000; 
var cors        = require('cors');
let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  dataBaseConfig = require('./database/db'); //
  app_path ='../www';
 
// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Database connected sucessfully ')
},
  error => {
    console.log('Could not connected to database : ' + error)
  }
)
 
//const songRoute = require('./routes/song.route')
const songRoute = require('./routes')

const app = express();  //var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);

//var routes = require('./routes');
//app.use('/api', routes);

// RESTful API root
app.use('/api', songRoute)
app.use('/api', routes)

app.use('/',express.static(path.join(__dirname,app_path)))
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,app_path + '/index.html')))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('PORT Connected on: ' + port)
})

