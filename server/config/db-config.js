var mongoose = require('mongoose')

var db_url = process.env.MONGODB_URI ||'mongodb://localhost:27017/Furniture' //step 2
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });