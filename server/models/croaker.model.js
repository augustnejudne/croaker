module.exports = mongoose => {
  mongoose.model('croaker', {
    croakerId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 140,
      trim: true,
    },
    createdOn: {
      type: Date,
      default: new Date()
    }
  });
};


