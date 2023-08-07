// module.exports = {
//   ensureAuthenticated: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       return next();
//     }
//     req.flash('error_msg', 'Please log in to view that resource');
//     res.redirect(process.env.FRONTEND_URL + '/login');
//   },
//   forwardAuthenticated: function(req, res, next) {
//     if (!req.isAuthenticated()) {
//       return next();
//     }
//     res.redirect(process.env.FRONTEND_URL + '/dashboard/overview');      
//   }
// };

module.exports = {
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ error: 'Please log in to view that resource' });
  },
  forwardAuthenticated: function(req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.status(403).json({ error: 'You are already authenticated' });
  }
};