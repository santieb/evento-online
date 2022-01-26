const mongoose = require('../config/dbConfig')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please, enter your name!']
  },
  lastname: {
    type: String,
    required: [true, 'Please, enter your lastname!']
  },
  email: {
    type: String,
    required: [true, 'Please, enter your email!'],
    unique: true,
    trim: true,
    lowercase: true
  }
}, {
  timestamps: true
})

const users = mongoose.model('Users', userSchema)

module.exports = users
