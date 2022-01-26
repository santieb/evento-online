let mongoose = require('mongoose');
const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    mongoose.connect('mongodb+srv://admin:admin@cluster0.rw9xe.mongodb.net/acamica?retryWrites=true&w=majority',options)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(`Error: ${err}`));

    module.exports = mongoose;