import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './clubs.css'
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import pageheader from '../../assets/images/clubpage.jpg'
import teams from './teams.json';
import Card from './Cards';

export default function Club({setClub}){

    const cards = teams.map(item => {
        return (
            <Card 
                key={item.ID}  
                name={item.TeamName}
                logo={item.Logo}
                arena={item.ArenaName}
                location={item.ArenaLocation}
                seating={item.SeatingCapacity}
                year={item.OpeningYear}
            />
        )
    })        

    return (
      <React.Fragment>
        <div className='header'>
            <img src={pageheader} className='main-header-image'/>
        </div>
        <div className='clubs'>
        <h3>Explore NBA Clubs</h3>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'0.5rem'}}>
        {cards}
        <Link to="/clubpage/clubplayers" onClick={()=>{setClub(team.TeamName)}}>
          <Button size="small">Players</Button>
          </Link>
          </Box> 
        </div>
      </React.Fragment>
    );
};


