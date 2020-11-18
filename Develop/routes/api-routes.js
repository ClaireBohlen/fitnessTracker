const db = require("../models");

module.exports = function(app){
  


 app.get("/api/workout", function(req,res){
        const data =  db.Workout.find()
        res.json(data)
      })
      
      app.put("/api/workout/:id", function(req,res){
        var id = req.params.id
        var data = req.body
        const updated =  db.Workout.findByIdAndUpdate(id, {$push:{exercises: data}})
        res.json(updated)
      })
      
      app.post("/api/workout", function(req,res){
        const newWorkout =  db.Workout.create({})
        res.json(newWorkout)
      })
      
      app.get("/api/workout/range", function(req,res){
        const data =  db.Workout.find().limit(7)
        res.json(data)
      })
    

    }