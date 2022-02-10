const mongoose = require('../config/dbConfig')
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
  name: {
    type: String
    // required: [true, 'Please, enter your lastname!']
  },
  email: {
    type: String,
    // required: [true, 'Please, enter your email!'],
    unique: true,
    trim: true,
    lowercase: true
  },
  facebookId: {
    type: String,
    unique: true
  },
  spotifyId: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})

userSchema.plugin(findOrCreate);

const users = mongoose.model('Users', userSchema)

module.exports = users
