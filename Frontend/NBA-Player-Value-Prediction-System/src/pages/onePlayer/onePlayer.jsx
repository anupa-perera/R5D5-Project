import React from 'react'
import { useEffect, useState } from 'react';
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

export default function onePlayer({player}) {


  const [playerInfo, setPlayerInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/clubs/clubplayers/${player}`)
          .then((response) => {
            console.log(response.data);
            setPlayerInfo(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


  return (
    <React.Fragment>
      <div><h3>Player name : {player}</h3></div>
      <TableContainer component={Paper}  align="center" >
      <Table sx={{ maxWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="right">{player}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Rating</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jersey</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthday</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Salary</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft year</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft round</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft peak</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>College</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TWITTER_FOLLOWER_COUNT_MILLIONS</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Version</TableCell>
              <TableCell align="right">age</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div align="center">
      <Button sx={{ m: '2rem' }} size='medium' variant="contained" color="success" onClick={()=>{alert('wait palyer value been predicted')}} >
            Calculate Player Value
       </Button>
    </div>
    <div style={{color:red}}align="center">
        <h3>Value Predicted display here</h3>
    </div>
  </React.Fragment>
  )
}
