const requireLogin = require('../../middleware/requireLogin.middleware');

module.exports = (app, passport) => {
  app.get(
    '/auth/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  );

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/auth/failed'
    }),
    (req, res) => {
      res.redirect('/front');
    }
  );

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email '] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/failed' }),
    (req, res) => {
      res.redirect('/front');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/me', requireLogin, (req, res) => {
    res.send(req.user);
  });
};
