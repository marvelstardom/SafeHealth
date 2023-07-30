const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/User.js');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// data, medical records, text and prescription
// router.get('/data')
router.get('/data',(req, res)=>{
  res.render('data')
})
router.get('/medical',(req, res)=>{
  res.render('medical')
})

router.get('/test',( req, res)=>{
  res.render('test')
})
router.get('/prescription', (req, res)=>{
  res.render('prescription')
})

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  // res.send({msg:"login successful"})
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    successMessage: "log in successful",
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
  
  console.log( "log in  successful")
});

// data
// router.post('/data', (req, res)=>{
//   const { surname,othername, address,  } = req.body;
//   let errors = [];

//   if ( !surname || !othername || !address) {
//     errors.push({ msg: 'Please enter all fields' });
//   }
// })

// Logout
router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if(err) {return next(err)}
    res.redirect('/users/login');
    req.flash('success_msg', 'You are logged out');
  });
});

module.exports = router;