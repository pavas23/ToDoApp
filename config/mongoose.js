const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todolist");

// to check the connection( if we connected to mongoDB or not)
const db = mongoose.connection;

// error
db.on("error",console.error.bind(console,"error in connecting to mongodb"));

// if it is up and running then print the following message
db.once('open',()=>{
    console.log("Successfully connected to mongoDB!!");
});
