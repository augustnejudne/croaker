module.exports = app => {
  /**
   * @route         GET /test
   * @description   test route
   * @access        Public
   */
  app.get('/test', (req, res) => {
    res.json({ message: 'TEST MESSAGE' });
  });

  app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to the croaker API' });
  });
};

