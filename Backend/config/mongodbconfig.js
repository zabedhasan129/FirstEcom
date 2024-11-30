const mongoose = require('mongoose');   
let mongodbconfig = ()=>{
    mongoose.connect('mongodb+srv://hasan:fBNVZ5e0PYVFN38Y@cluster0.yddjriz.mongodb.net/firstEcom?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database Connected!'));
}

module.exports = mongodbconfig;

