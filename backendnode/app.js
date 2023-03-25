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
    const NBATeamtable =  database.collection('NBA_Teams');
    const results = await NBATeamtable.find({}).toArray();
    res.json({nbaresults:results})
});

app.get('/clubs/:clubname',async(req,res)=>{    
    const database = client.db('NBA_DB');
    const NBATeamtable =  database.collection('NBA_Player_Info');
    const results = await NBATeamtable.find({"team":`${req.params.clubname}`}).toArray();
    res.json({players:results})
});

app.get('/clubs/clubplayers/:full_name',async(req,res)=>{
    // const playerid = req.id.full_name; 
    // NBATeamtable.findById(playerid)
    // return res.status(200).json(playerid);
    // });
    console.log(req.params.full_name);  
    const playername = req.params.full_name;  
    const database = client.db('NBA_DB');
    const NBATeamtable =  database.collection('NBA_Player_Info');
    const results = await NBATeamtable.find({'full_name':playername});
    res.status(200).json({playerinfo:results})
});



app.listen(8080,console.log("Listning to port 8080"));
