const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get(process.env.FRONTEND_URL +'/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get(process.env.FRONTEND_URL +'/dashboard/overview/', ensureAuthenticated, (req, res) =>
  res.render(process.env.FRONTEND_URL +'/dashboard/overview/', {
    name: req.user.email
  })
);

module.exports = router;