import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pageheader from "./../../assets/images/playerpage.jpg";

//following page list players in each club with a button to to see each players attibutes

export default function Clubplayers({ club, setPlayer }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("players");
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/clubs/${club}`)
      .then((response) => {
        //console.log(response.data);
        setPlayers(response.data.players);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [club]);

  return (
    <div>
      <div className="header">
        <img src={pageheader} className="main-header-image" />
      </div>
      <h3 className="page-title"> List of Players in {club} Club</h3>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        {players.map((player) => {
          return (
            <Card sx={{ width: "20rem" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {player.full_name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/clubs/clubplayers/${player.full_name}`}
                  onClick={() => {
                    setPlayer(player.full_name);
                  }}
                >
                  <Button size="small">Details</Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </div>
  );
}
