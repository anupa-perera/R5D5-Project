import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function comparePlayers() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            try {
                const response = await fetch(`http://localhost:8080/clubs/clubplayers/${searchText}`);
                if (response.status === 200) {
                    const data = await response.json();
                    setPlayer2Info(data.playerinfo); // set the fetched data to player2Info state
                } else if(response.status === 404){
                    alert('No player found, Check if the name you entered is correct, Try Capitalisation of first letters on first and last name');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while searching for the player. Try Capitalisation');
            }
        }
    };
    


  const { player1, player2} = useParams();
  const [player1Info, setPlayer1Info] = useState([]);
  const [player2Info, setPlayer2Info] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/clubs/clubplayers/${player1}`)
      .then((response) => {
        console.log(response.data.playerinfo);
        setPlayer1Info(response.data.playerinfo);
      })
      .catch((error) => {
        console.log(error);
      });
   
  }, [player1]);




  return (
    <React.Fragment>
      <div>
        <h3 className='page-title'>Comparing players: {player1} vs {player2Info.full_name}</h3>
      </div>
      <TableContainer component={Paper} align="center" >
        <Table sx={{ maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">{player1Info.full_name}</TableCell>
              <TableCell align="right">{player2Info.full_name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Rating</TableCell>
              <TableCell align="right">{player1Info.rating}</TableCell>
              <TableCell align="right">{player2Info.rating}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jersey</TableCell>
              <TableCell align="right">{player1Info.jersey}</TableCell>
              <TableCell align="right">{player2Info.jersey}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell align="right">{player1Info.team}</TableCell>
              <TableCell align="right">{player2Info.team}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="right">{player1Info.position}</TableCell>
              <TableCell align="right">{player2Info.position}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthday</TableCell>
              <TableCell align="right">{player1Info.b_day}</TableCell>
              <TableCell align="right">{player2Info.b_day}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Height</TableCell>
              <TableCell align="right">{player1Info.height}</TableCell>
              <TableCell align="right">{player2Info.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weight</TableCell>
              <TableCell align="right">{player1Info.weight}</TableCell>
              <TableCell align="right">{player2Info.height}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Salary</TableCell>
              <TableCell align="right">$ {player1Info.salary}</TableCell>
              <TableCell align="right">{'$ '+ player2Info.salary}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country</TableCell>
              <TableCell align="right">{player1Info.country}</TableCell>
              <TableCell align="right">{player2Info.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft year</TableCell>
              <TableCell align="right">{player1Info.draft_year}</TableCell>
              <TableCell align="right">{player2Info.draft_year}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft round</TableCell>
              <TableCell align="right">{player1Info.draft_round}</TableCell>
              <TableCell align="right">{player2Info.draft_round}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Draft peak</TableCell>
              <TableCell align="right">{player1Info.draft_peak}</TableCell>
              <TableCell align="right">{player2Info.draft_peak}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>College</TableCell>
              <TableCell align="right">{player1Info.college}</TableCell>
              <TableCell align="right">{player2Info.college}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Twitter followers count in million</TableCell>
              <TableCell align="right">{player1Info.TWITTER_FOLLOWER_COUNT_MILLIONS}</TableCell>
              <TableCell align="right">{player2Info.TWITTER_FOLLOWER_COUNT_MILLIONS}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Game version</TableCell>
              <TableCell align="right">{player1Info.version}</TableCell>
              <TableCell align="right">{player2Info.version}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <form onSubmit={handleSearch}>
                        <input placeholder='See the difference' type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{width:500,padding:10,margin:20,fontSize:30}}/>
                        <Button type="submit" sx={{ m: '1rem' }} size='medium' variant="contained" color="success">COMPARE</Button>
                    </form>
      </React.Fragment>
  )
  

  }
