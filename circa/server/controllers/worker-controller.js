const User = require("../model/User");
const { MongoClient } = require('mongodb');



const worker = async (req, res, next) => {
    try {
   
        const { city, contact, type, skills } = req.body;
      
        let isworker = true

        User.findByIdAndUpdate(req.id, { city, contact, type, skills, isworker }, { new: true }, (err, user) => {
            if (err) {
              console.error("Error updating user:", err);
              // Handle error
            } else {
              if (user) {
                //console.log("User updated successfully:", user);
                return res.status(201).json({ user });
                // Send response indicating success
              } else {
                console.log("User not found with ID:", req.id);
                // Handle case where user with specified ID is not found
              }
            }
          });
        
    } catch (error) {
        console.log(error)
    }
  };

  const getAllworker = async (req,res) =>{
    try {
        User.find({isworker:true}, (err, users) => {
            if (err) {
              console.error("Error retrieving users:", err);
              // Handle error
            } else {
              if (users.length > 0) {
                //console.log("Users found:", users);
                // Send response with the list of users
                return res.status(201).json({ users});
              } else {
                console.log("No users found in the database.");
                // Handle case where no users are found
                res.status(404).send("No users found");
              }
            }
          });
        
    } catch (error) {
        console.log(error)
    }
  }

const getWorkerById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find worker by ID in the database
      const worker = await User.findById(id);
  
      if (!worker) {
        return res.status(404).json({ error: 'Worker not found' });
      }
  
      // Send worker data as response
      res.json(worker);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };



  const unliveworker = async (req, res, next) => {
    try {
   
  
        let isworker = false;
        console.log("hii")

        User.findByIdAndUpdate(req.id, { isworker }, { new: true }, (err, user) => {
            if (err) {
              console.error("Error updating user:", err);
              // Handle error
            } else {
              if (user) {
                //console.log("User updated successfully:", user);
                return res.status(201).json({ user });
                // Send response indicating success
              } else {
                console.log("User not found with ID:", req.id);
                // Handle case where user with specified ID is not found
              }
            }
          });
        
    } catch (error) {
        console.log(error)
    }
  };


  const pricing = async (req, res, next) => {
    try {
      const client = new MongoClient("mongodb+srv://rawift:84LSnr4EQREZIO8s@cluster0.psky9qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      const database = client.db('new_database');
      const collection = database.collection('workers');
      const result = await collection.find({}).toArray();

      const user = result.find(item => item.email_id === req.body.email);
      //console.log(user.price,req.body.email);
       return res.status(200).json({price:user.price})
        
    } catch (error) {
        console.log(error)
    }
  };

  exports.pricing= pricing

exports.unliveworker = unliveworker
  exports.getAllworker = getAllworker;

  exports.getWorkerById = getWorkerById;
  
  exports.worker = worker;  