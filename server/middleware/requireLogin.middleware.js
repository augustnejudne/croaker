module.exports = (req, res, next) => {
  console.log('========================');
  console.log('requireLogin.middleware.js');
  console.log('req.user');
  console.log(req.user);
  console.log('========================');
  if (!req.user) {
    return res.status(401).send({ error: 'You must login to do this!' });
  }
  next();
};
