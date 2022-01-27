require('dotenv').config()
const mongoose = require('mongoose')

const URI = process.env.MONGODB_URL
mongoose.connect(
  URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
    if (err) throw err
    console.log('Mongodb connection')
  }
)
module.exports = mongoose
