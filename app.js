var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");
var searchArray=[];
var parsedData;
var search;

//routes
app.get("/",function(req,res){
  var OAuth = require('oauth');
  var header = {
      "X-Yahoo-App-Id": "2u7LeR36"
  };
  var request = new OAuth.OAuth(
      null,
      null,
      'dj0yJmk9eWlza0hiN3RaekxhJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTkx',
      'aaaf26009f490b6fdbbda200e22e269dfcf59def',
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
  );
  request.get(
      'https://weather-ydn-yql.media.yahoo.com/forecastrss?location='+search+'&format=json',
      null,
      null,
      function (err, data, result) {
          if (err) {
              console.log(err);
          } else {
              var parsedData=JSON.parse(data);
              res.render("home.ejs",{search:parsedData});
              console.log(parsedData);
          }
      }
  );

});


app.post("/search",function(req,res){

  search=req.body.search;
  res.redirect("/",);
});



app.listen(3000,function(){
  console.log("Running naman server");
});
