const mongoose = require('mongoose')

const URI = process.env.MONGODB_URL || 'mongodb://localhost:27017/online-event'
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
