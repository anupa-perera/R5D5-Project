import { Button } from "@mui/material";
import { lightGreen, red } from "@mui/material/colors";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import background from "./predictbcimg.jpg";

//this page contains predict salary function

export default function predict({ predictedPlayer }) {
  const [playerInfomodel, setPlayerInfomodel] = useState([]);
  const [predictedValue, setPredictedValue] = useState("");

  const handlePredictionClick = () => {
    fetch(`http://localhost:8080/clubs/predictedClubPlayers/${predictedPlayer}`)
      .then((responsemodel) => {
        console.log(predictedPlayer);
        console.log("responsemodel:", responsemodel);
        return responsemodel.json();
      })
      .then((data) => {
        console.log("data:", data);
        console.log(data.playerinfomodel);
        const {
          rating,
          draft_year,
          TWITTER_FOLLOWER_COUNT_MILLIONS,
          Experience,
          Age,
        } = data.playerinfomodel;

        console.log(rating);

        const Data_for_prediction = {
          rating,
          draft_year,
          TWITTER_FOLLOWER_COUNT_MILLIONS,
          Experience,
          Age,
        };
        //console.log(Data_for_prediction);

        axios
          .post(
            "https://r5d5veflaskapi.azurewebsites.net/api/HttptrigerV3",
            JSON.stringify(Data_for_prediction),
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((result) => {
            console.log(result.data);
            setPredictedValue(result.data);

            //console.log(result);
          });
      })
      .catch((error) => {
        console.log("error: " + error);
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
        <div style={{ color: red }} align="center">
          <h1>
            the Predicted value of {predictedPlayer} is : $ {predictedValue}
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
}
