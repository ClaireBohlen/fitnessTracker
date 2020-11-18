var path = require("path");

//We have to render three differnt html pages so a seperate html-routes is needed

module.exports = function (app){
//sending to the index html
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/index.html"))
})
//sending to the exercise html
app.get("/exercise", function(req,res){
  res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/exercise.html"))
})

//sedning to the stats html
app.get("/stats", function(req,res){
  res.sendFile(path.join(__dirname, "homework/MONGO/Develop/public/stats.html"))
})
}

