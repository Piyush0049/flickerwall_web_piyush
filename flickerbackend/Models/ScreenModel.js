const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  screenName: {
    type: String,
    required: true,
  },
  orgNumber: {
    type: Number,
    required: true,
  }
});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
