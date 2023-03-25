import './home.css';
import React from 'react';
import Mainheader from '../../assets/images/mainpageheader.jpg'

function Home(){
    return (
    <React.Fragment>
        <div className='header'>
            <img src={Mainheader} className='main-header-image'/>
        </div>
        <h3>Most Popular</h3>
        <div className="container">
            <a href='https://www.nba.com/player/2544/lebron-james' target='_blank'>
            <div className="card">
            <img src="https://image.cnbcfm.com/api/v1/image/107105973-1660838433781-GettyImages-1185445815.jpg?v=1664363093&w=1600&h=900" alt="Card Image"/>
            <h3>LeBron James</h3>
            <p>Earning : $528,992,480</p>
            </div>
            </a>
            <a href='https://www.nba.com/player/201142/kevin-durant' target='_blank'>
            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwBut6IZC1P1CwUq2J5FH3J_nyTITfh6ubZse4WaO0ffpVaHRvxJplLIqVAly0wbxTTU&usqp=CAU" alt="Card Image"/>
            <h3>Kevin Durant</h3>
            <p>Earning : $498,688,653</p>
            </div>
            </a>
            <a href='https://www.nba.com/player/201939/stephen-curry' target='_blank'>
            <div className="card">
            <img src="https://cdn.vox-cdn.com/thumbor/4IasTaCSj3PUGB0gfYjkvfN1LOU=/0x0:5646x3764/1200x800/filters:focal(2372x1431:3274x2333)/cdn.vox-cdn.com/uploads/chorus_image/image/71941986/usa_today_19926783.0.jpg" alt="Card Image"/>
            <h3>Stephen Curry</h3>
            <p>Earning : $470,090,010</p>
            </div>
            </a>
            <a href='https://www.nba.com/player/203081/damian-lillard' target='_blank'>
            <div className="card">
            <img src="https://cdn.nba.com/manage/2023/03/damian-lillard-iso-looks.jpg" alt="Card Image"/>
            <h3>Damian Lilard</h3>
            <p>Earning : $449,910,157</p>
            </div>
            </a>
            <a href='https://www.nba.com/player/203078/bradley-beal' target='_blank'>
            <div className="card">
            <img src="https://cdn.vox-cdn.com/thumbor/FwN7NDMOW9j2wKjthC18plpoPow=/0x0:4178x2786/1200x800/filters:focal(1486x213:2154x881)/cdn.vox-cdn.com/uploads/chorus_image/image/71715092/1446524643.0.jpg" alt="Card Image"/>
            <h3>Bradley Beal</h3>
            <p>Earning : $428,874,362</p>
            </div>
            </a>
            <a href='https://www.nba.com/player/101108/chris-paul' target='_blank'>
            <div className="card">
            <img src="https://media.premiumtimesng.com/wp-content/files/2021/07/Chris-Paul.jpeg" alt="Card Image"/>
            <h3>Chris Paul</h3>
            <p>Earning : $419,909,419</p>
            </div>
            </a>
        </div>
        <h3>Explore clubs</h3>
        <div class="carousel">
            <div class="tiles-wrapper">
            <a href='https://www.nba.com/lakers' target='_blank'><div class="tile">Los Angeles Lakers</div></a>
            <a href='https://www.nba.com/nets' target='_blank'><div class="tile">Brooklyn Nets </div></a>
            <a href='https://www.nba.com/celtics' target='_blank'><div class="tile">Boston Celtics </div></a>
            <a href='https://www.nba.com/bulls' target='_blank'><div class="tile">Chicago Bulls</div></a>
            <a href='https://www.nba.com/heat/' target='_blank'><div class="tile">Miami Heat</div></a>
            <a href='https://www.nba.com/team/1610612739/cavaliers' target='_blank'><div class="tile">Cleveland Cavaliers</div></a>
            <a href='https://www.nba.com/spurs' target='_blank'><div class="tile">San Antonio Spurs</div></a>
            <a href='https://www.nba.com/team/1610612742/mavericks' target='_blank'><div class="tile">Dallas Mavericks</div></a>
            <a href='https://www.nba.com/knicks' target='_blank'><div class="tile">New York Knicks</div></a>
            </div>
        </div>
    </React.Fragment>
    );
};

export default Home;



