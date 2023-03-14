const express = require('express');
const app = express();
const mongodb = require('mongodb');
const cors = require('cors');
app.use(cors())
app.use(express.json())

const url ="mongodb+srv://r5d5:OGCwYLw0gu3BDvLk@nbadb.xxuctxp.mongodb.net";

const client = new mongodb.MongoClient(url);
client.connect();

app.get("/",async(req,res)=>{
    const database = client.db('NBA_DB');
    const NBATeamtable =  database.collection('NBA Teams');
    const results = await NBATeamtable.find({}).toArray();
    res.json({nbaresults:results})
});

app.listen(8080,console.log("Listning to port 8080"));
