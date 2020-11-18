var path = require('path');
module.exports = function (app){
  
  
  //sned to index html
  app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })

  //send to exercise html
  app.get("/exercise", function(req,res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  })

  //send to stats html
  app.get("/stats", function(req,res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  })



}

