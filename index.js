const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/mongoose");
const Task = require("./models/task");
const port = 5000;

app.set("view engine","ejs");
app.set("views","./views");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("assets"));

app.get("/",(req,res) =>{
    Task.find({},function(err,tasks){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{
            title:"ToDoApp",
            taskArr: tasks,
        });
    })
});

app.post("/addtask",(req,res)=>{
    Task.create({
        description:req.body.description,
        date:(req.body.date)?req.body.date:"NO DEADLINE",
        category:req.body.category,
    },(err,taskCreated)=>{
        if(err){
            console.log(err);
            return;
        }
    });
    return res.redirect("/");
});

app.get("/deletetask",(req,res)=>{
    var id = req.query._id;
    Task.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log(err);
            return;
        }
    });
    res.redirect("/");
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Your app successfully started at port ${port}`);
});

