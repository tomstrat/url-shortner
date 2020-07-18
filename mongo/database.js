const mongoose = require('mongoose');
const keys = require('../keys/keys');

mongoose.connect(keys.mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});