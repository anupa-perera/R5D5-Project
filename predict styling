import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import background from "./predictbcimg.jpg";
import Box from "@mui/material";
import Card from "@mui/material";

//this page contains predict salary function

export default function predict({ predictedPlayer }) {
  const [playerInfomodel, setplayerInfomodel] = useState([]);
  const [predictedValue, setPredictedValue] = useState("");
  //console.log(predictedPlayer);

  const handlePredictionClick = () => {
    fetch(`http://localhost:8080/clubs/predictedClubPlayers/${predictedPlayer}`)
      .then((responsemodel) => {
        return responsemodel.json();
      })
      .then((data) => {
        //console.log(data.playerinfomodel);
        const {
          rating,
          draft_year,
          TWITTER_FOLLOWER_COUNT_MILLIONS,
          Experience,
          Age,
        } = data.playerinfomodel;

        const Data_for_prediction = {
          rating,
          draft_year,
          TWITTER_FOLLOWER_COUNT_MILLIONS,
          Experience,
          Age,
        };
        console.log(Data_for_prediction);

        axios
          .post(
            "https://r5d5veflaskapi.azurewebsites.net/api/HttptrigerV3",
            JSON.stringify(Data_for_prediction)
          )
          .then((result) => {
            setPredictedValue(result.data);

            console.log(result);
          });
      })
      .catch((error) => {
        console.log("not allowed!");
      });
  };
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div align="center">
            <Button
              sx={{ m: "2rem" }}
              size="large"
              variant="contained"
              color="primary"
              onClick={() => {
                handlePredictionClick();
              }}
            >
              Calculate Player Value
            </Button>
          </div>
          <div style={{ color: red }} align="center" >
            <h1>
              the Predicted value of {predictedPlayer} is : $ {predictedValue}
            </h1>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}
