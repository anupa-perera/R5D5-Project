import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Clubplayers({club}) {

    
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/clubs/${club}`)
          .then((response) => {
            console.log(response.data);
            setPlayers(response.data.players);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);



  return (
    <div>

    <h3>List of Players in {club} Club</h3>

   <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0.5rem'}}>
    {players.map((player) => {
       return(
         <Card sx={{ width:'20rem'}}>
             <CardContent>
               <Typography variant="h5" component="div">
                 {player.full_name}
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small">Details</Button>
             </CardActions>
         </Card>
         );
    })}
   </Box> 
 </div>
  )
}
