const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  registered: {
    type: String,
    default: Date.now
  }
});




module.exports = Item = mongoose.model('Users', UsersSchema);
