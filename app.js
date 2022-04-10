const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost:27017/infosdb',{useNewUrlParser: true});
app.get("/",function(req,res){
  res.sendFile(__dirname +"/signup.html") });

const infoSchema = new mongoose.Schema({

  fname: String,
  lname: String,
  email: String,
  password: String

});
const Info = mongoose.model("Info",infoSchema);




  app.post("/",function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
      var password = req.body.password;
      var data= new Info({
        fname: fname,
        lname: lname,
        email: email,
        password: password

      })
      data.save().then(doc => {
        res.send(doc)
      }).catch(err => {
        res.send(err)
      })
    });

app.listen(3000,function(){
  console.log("lestin on port 3000");
});
