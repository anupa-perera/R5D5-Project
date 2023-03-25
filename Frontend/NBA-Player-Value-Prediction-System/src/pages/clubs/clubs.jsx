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
                      <Link to="/clubpage/clubplayers" onClick={()=>{setClub(team.TeamName)}}>
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


// {/* {teams ? teams.map(item => ({
//     <div key={item._id}>
//     <h2>{item.Team_Name}</h2>
//     <p>{item.Opening_Year}</p>
//     </div>
// }
// )} */}


