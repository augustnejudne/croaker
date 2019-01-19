module.exports = mongoose => {
  mongoose.connect('mongodb://localhost:27017/Croaker', {useNewUrlParser: true});
};
