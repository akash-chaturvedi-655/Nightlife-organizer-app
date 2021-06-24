const express=require("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-Parser");
const mongoose=require("mongoose");
const mongodb=require("mongodb");
const path = require('path'); 
var search_red=require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
*/
//app.use("/search",search_red);

app.use(express.static('client/public'));

app.get("/",function(req,res)
{
    res.send(__dirname+"index.html");
    console.log("Hello World !");
    //res.send("Hello World !");
})

app.post("/search",function(req,res,next)
{
    console.log("Data was posted via post !!"+req.body);
    //res.json("Hello from the Post method !" + req.body+req.params+req.query)
    res.json({"body":req.body.searched})
    
})

app.get("/search",function(req,res,next)
{
    console.log("Get request was sent : !"+ req.body);
    res.json({"Input" : req.body })
})



const listener = app.listen(5000 , function()
{
    console.log("Your application is listening on port : " +listener.address().port);
})
