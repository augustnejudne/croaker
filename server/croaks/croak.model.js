const mongoose = require('mongoose');

const CroakSchema = new mongoose.Schema({
  croak: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  
});
