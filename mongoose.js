//require the library
const mongoose = require('mongoose');
// connect to the data base
mongoose.connect('mongodb://localhost/todo_list_db');
// acquire the connection(to check if it is success)
const db = mongoose.connection;
//error
db.on('error',console.error.bind(console,'error conncecting to db'));
//up and running then print the mssgs
db.once('open',function(){
    console.log('successfully');
});