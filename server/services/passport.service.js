module.exports = (passport, FacebookStrategy, GoogleStrategy, mongoose) => {
  const Croaker = mongoose.model('croaker');
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: '/auth/facebook/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log('========================');
        console.log('passport.service.js');
        console.log('profile');
        console.log(profile);
        console.log('========================');
        Croaker.findOne({ croakerId: profile.id }).then(user => {
          if (!user) {
            return new Croaker({
              croakerId: profile.id,
              name: profile.displayName
            })
              .save()
              .then(user => done(null, user));
          }

          return done(null, user);
        });
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        Croaker.findOne({ croakerId: profile.id }).then(user => {
          if (!user) {
            return new Croaker({
              croakerId: profile.id,
              name: profile.displayName
            })
              .save()
              .then(user => done(null, user));
          }

          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    Croaker.findById(id).then(user => done(null, user));
  });
};
