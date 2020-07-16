const express = require('express');
const app = express();
const songRoute = express.Router();

var userController  = require('./controller/user-controller');
var passport	    = require('passport');
// Use the passport package in our application
app.use(passport.initialize());
var passportMiddleware = require('./middleware/passport');
passport.use(passportMiddleware);
 

let SongModel = require('./models/song');

songRoute.route('/').get((req, res) => {
    return res.send('Hello, this is the API!');
  });
  
songRoute.route('/register').post(userController.registerUser);
songRoute.route('/login').post(userController.loginUser);
 
songRoute.route('/special').get(passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({ msg: `Hey ${req.user.email}! I open at the close.` });
});

// Add Song
songRoute.route('/create-song').post((req, res, next) => {
  SongModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all songs
songRoute.route('/').get((req, res) => {
  SongModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single song
songRoute.route('/get-song/:id').get((req, res) => {
  SongModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update song
songRoute.route('/update-song/:id').put((req, res, next) => {
  SongModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Song successfully updated!')
    }
  })
})

// Delete song
songRoute.route('/delete-song/:id').delete((req, res, next) => {
  SongModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})



 
module.exports = songRoute;
