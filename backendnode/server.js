// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');


// // connect to the database
// // mongoose.connect('mongodb+srv://r5d5:OGCwYLw0gu3BDvLk@nbadb.xxuctxp.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('MongoDB connected!');
// //   })
// //   .catch((error) => {
// //     console.log('MongoDB connection error:', error);
// //   });
  
  
  
// //get the model
// const NBATeams = require('./models/data1');
// const NBAPlayersInfo = require('./models/data2');

// // Create an Express app
// const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// mongoose.connect('mongodb+srv://r5d5:OGCwYLw0gu3BDvLk@nbadb.xxuctxp.mongodb.net/NBA_DB', { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     console.log('MongoDB connected!');
// })
// .catch((error) => {
//     console.log('MongoDB connection error:', error);
// });

// const db = mongoose.connection;
// db.once("open", function () {
//     console.log("Connected successfully");
//   });
// console.log(db);


// // Get all data
// app.get('/api/data', async(req, res) => {
//     const users = await NBATeams.find({});
//     users.forEach((user)=>{
//       console.log(user);
//     })
    
//   });


//   //output of the data
// console.log("Logginig all data in model taken from database !!!");

// // NBATeams.find({}).exec()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // NBAPlayersInfo.find({}).exec()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// app.listen(8080,console.log("Listeaning on port 8080"));

//   // Post data
// //   app.post('/api/data', (req, res) => {
// //     const newData = new Data(req.body);
// //     newData.save()
// //       .then(() => {
// //         res.json({ message: 'Data saved!' });
// //       })
// //       .catch((error) => {
// //         console.log('Error:', error);
// //       });
// //   });
  