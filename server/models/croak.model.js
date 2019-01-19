module.exports = mongoose => {
  mongoose.model('croak', {
    text: {
      type: String,
      required: true
    },
    _croaker: {
      // type: mongoose.Schema.ObjectId,
      type: String,
      required: true
    }
  });
};
