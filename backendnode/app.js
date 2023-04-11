const express = require("express");
const app = express();
const mongodb = require("mongodb");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const axios = require("axios");

const url = "mongodb+srv://r5d5:OGCwYLw0gu3BDvLk@nbadb.xxuctxp.mongodb.net";

const client = new mongodb.MongoClient(url);
client.connect();
let database;

app.get("/", async (req, res) => {
  const database = client.db("NBA_DB");
  const NBATeamtable = database.collection("NBA_Teams");
  const results = await NBATeamtable.find({}).toArray();
  res.json({ nbaresults: results });
});

app.get("/clubs/:clubname", async (req, res) => {
  const database = client.db("NBA_DB");
  const NBATeamtable = database.collection("NBA_Player_Info");
  const results = await NBATeamtable.find({
    team: `${req.params.clubname}`,
  }).toArray();
  res.json({ players: results });
});

app.get("/clubs/clubplayers/:full_name", async (req, res) => {
  const playername = req.params.full_name;
  const database = client.db("NBA_DB");
  const NBATeamtable = database.collection("NBA_Player_Info");
  const results = await NBATeamtable.findOne({ full_name: playername });
  if (results) {
    res.status(200).json({ playerinfo: results });
  } else {
    res.status(404).json({ message: "Player not found" });
  }
});

app.get("/clubs/predictedClubPlayers/:full_name", async (req, res) => {
  try {
    const playermodel = req.params.full_name;
    console.log(playermodel);
    const database = client.db("NBA_DB");
    const NBATeamtablemodel = database.collection("NBAPlayerInfoMLModel");
    const resultsmodel = await NBATeamtablemodel.findOne({
      full_name: playermodel,
    });
    res.status(200).json({ playerinfomodel: resultsmodel });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

let data = JSON.stringify({
  text: "request.json",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://r5d5veflaskapi.azurewebsites.net/api/HttptrigerV3",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(8080, () => {
  console.log("Server is running and listening on port 8080");
});
