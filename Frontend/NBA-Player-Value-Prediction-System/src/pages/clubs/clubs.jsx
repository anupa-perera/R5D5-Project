import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './clubs.css'
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pageheader from '../../assets/images/clubpage.jpg'

//This page showcase the NBA clubs list them with a button that take user to players in each club.

export default function Club({setClub}){

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
          .then((response) => {
            setTeams(response.data.nbaresults);
            console.log(teams);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


    return (
      <React.Fragment>
        <div className='header'>
            <img src={pageheader} className='main-header-image'/>
        </div>
        <div className='clubs'>
        <h3>Explore NBA Clubs</h3>

          <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0.5rem'}}>
           {teams.map((team) => {
              return(
                <Card sx={{ width:'20rem'}}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {team.TeamName}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="/clubs/clubplayers" onClick={()=>{setClub(team.TeamName)}}>
                        <Button size="small">Players</Button>
                      </Link>
                    </CardActions>
                </Card>
                );
           })}
          </Box> 
        </div>
      </React.Fragment>
    );
};


