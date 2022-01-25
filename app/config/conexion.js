let mongoose = require('mongoose');
// solucion que encontre agregando authSource 
//mongoose.connect('mongodb://root:example@mongo:27017/acamica', { useMongoClient: true }) //mongodb://localhost:27017/crud
const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    mongoose.connect('mongodb://mongo:27017/acamica',options)
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(`Error: ${err}`));
/* 
mongoose.connect('mongodb://root:example@mongo:27017/acamica?authSource=admin')
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(`Error: ${err}`)); 
 */
module.exports = mongoose;