const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 5000;

app.set("view engine","ejs");
app.set("views","./views");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("assets"));

let taskArr = [
    {
        description : "hello",
        date:"30th Aug 2021",
        category:"personal",
        _id:1234,
    },
    {
        description : "hi",
        date:"31th Aug 2021",
        category:"school",
        _id:2345,
    },
];

app.get("/",(req,res)=>{
    return res.render("home",{
        title:"ToDoApp",
        taskArr:taskArr,
    });
});
app.post("/addtask",(req,res)=>{
    taskArr.push(req.body);
    res.redirect("/");
});

app.get("/deletetask",(req,res)=>{
    var id = req.query._id;
    for(let i=0;i<taskArr.length;i++){
        if(taskArr[i]._id == id){
            taskArr.splice(i,1);
        }
    }
    res.redirect("/");
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(`Your app successfully started at port ${port}`);
});

