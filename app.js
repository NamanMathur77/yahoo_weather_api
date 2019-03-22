var express=require("express");
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.get("/",function(req,res){
  res.render("home.ejs");
});

app.listen(3000,function(){
  console.log("Running naman server");
});
