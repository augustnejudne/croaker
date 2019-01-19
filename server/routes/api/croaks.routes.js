const requireLogin = require('../../middleware/requireLogin.middleware.js');

module.exports = (app, mongoose) => {
  const Croak = mongoose.model('croak');
  app.post('/api/croaks', requireLogin, (req, res) => {
    const croak = new Croak(req.body);
    croak.save()
      .then(croak => res.send(croak))
      .catch(e => console.log(e));
  });

  app.get('/api/croaks', requireLogin, (req, res) => {
    Croak.find({})
      .then(croaks => res.send(croaks))
      .catch(e => console.log(e));
  });
};

