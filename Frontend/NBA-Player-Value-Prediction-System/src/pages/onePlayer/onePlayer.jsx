import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';

//following page is for each player to showcase their attibutes and stats

export default function onePlayer() {
    const { playerName } = useParams();

  const [playerInfo, setPlayerInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/clubs/clubplayers/${playerName}`)
          .then((response) => {
            console.log(response.data.playerinfo);
            setPlayerInfo(response.data.playerinfo);
          })
          .catch((error) => {
            console.log(error);
          });
        }, [playerName]);


  return (
    <React.Fragment>
      <div><h3 className='page-title'>Player name : {playerName}</h3></div>
      <TableContainer component={Paper}  align="center" >
      <Table sx={{ maxWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">{playerInfo.full_name}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Rating</TableCell>
              <TableCell align="right">{playerInfo.rating}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jersey</TableCell>
              <TableCell align="right">{playerInfo.jersey}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell align="right">{playerInfo.team}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="right">{playerInfo.position}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthday</TableCell>
              <TableCell align="right">{playerInfo.b_day}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell align="right">{playerInfo.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight</TableCell>
              <TableCell align="right">{playerInfo.weight}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Salary</TableCell>
              <TableCell align="right">$ {playerInfo.salary}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">{playerInfo.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft year</TableCell>
              <TableCell align="right">{playerInfo.draft_year}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft round</TableCell>
              <TableCell align="right">{playerInfo.draft_round}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft peak</TableCell>
              <TableCell align="right">{playerInfo.draft_peak}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>College</TableCell>
              <TableCell align="right">{playerInfo.college}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Twitter followers count in million</TableCell>
              <TableCell align="right">{playerInfo.TWITTER_FOLLOWER_COUNT_MILLIONS}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Game version</TableCell>
              <TableCell align="right">{playerInfo.version}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Button sx={{ m: '2rem' }} size='medium' variant="contained" color="success" onClick={()=>{alert('wait palyer value been predicted')}} >
    Calculate Player Value
  </Button>
  <div>
  <Link to={`/compare/${playerInfo.full_name}`} onClick={() => {setPlayer(player.full_name)}}>
      <Button variant="outlined" color="primary">
        Compare with another player
      </Button>
    </Link>
  </div>
</div>

    <div style={{color:red}}align="center">
        <h3>Value Predicted display here</h3>
    </div>

  </React.Fragment>
  )
}
