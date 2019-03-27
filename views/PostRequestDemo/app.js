var express= require("express");
var app=express();
var bodyParser=require("body-parser");
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

var friendName=["naman","arpit","raju"];
app.get("/",function(req,res){
  res.render("home");
});

app.get("/friends",function(req,res){

  res.render("friends",{friendName:friendName});
});

app.post("/addfriend",function(req,res){
  var newfriend=req.body.newfriend;
  friendName.push(newfriend);
  res.redirect("/friends",);
});

app.listen(3000,function(){
  console.log("Running server");
});
