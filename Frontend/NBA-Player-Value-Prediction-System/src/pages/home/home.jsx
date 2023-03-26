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
            
            <div className="card">
            <img src="https://image.cnbcfm.com/api/v1/image/107105973-1660838433781-GettyImages-1185445815.jpg?v=1664363093&w=1600&h=900" alt="Card Image"/>
            <h3>LeBron James</h3>
            <p>Earning : $528,992,480</p>
            </div>
            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwBut6IZC1P1CwUq2J5FH3J_nyTITfh6ubZse4WaO0ffpVaHRvxJplLIqVAly0wbxTTU&usqp=CAU" alt="Card Image"/>
            <h3>Kevin Durant</h3>
            <p>Earning : $498,688,653</p>
            </div>
            <div className="card">
            <img src="https://cdn.vox-cdn.com/thumbor/4IasTaCSj3PUGB0gfYjkvfN1LOU=/0x0:5646x3764/1200x800/filters:focal(2372x1431:3274x2333)/cdn.vox-cdn.com/uploads/chorus_image/image/71941986/usa_today_19926783.0.jpg" alt="Card Image"/>
            <h3>Stephen Curry</h3>
            <p>Earning : $470,090,010</p>
            </div>
            <div className="card">
            <img src="https://cdn.nba.com/manage/2023/03/damian-lillard-iso-looks.jpg" alt="Card Image"/>
            <h3>Damian Lilard</h3>
            <p>Earning : $449,910,157</p>
            </div>
            <div className="card">
            <img src="https://cdn.vox-cdn.com/thumbor/FwN7NDMOW9j2wKjthC18plpoPow=/0x0:4178x2786/1200x800/filters:focal(1486x213:2154x881)/cdn.vox-cdn.com/uploads/chorus_image/image/71715092/1446524643.0.jpg" alt="Card Image"/>
            <h3>Bradley Beal</h3>
            <p>Earning : $428,874,362</p>
            </div>
            <div className="card">
            <img src="https://media.premiumtimesng.com/wp-content/files/2021/07/Chris-Paul.jpeg" alt="Card Image"/>
            <h3>Chris Paul</h3>
            <p>Earning : $419,909,419</p>
            </div>
        </div>
        <h3>Explore clubs</h3>
        <div class="carousel">
            <div class="tiles-wrapper">
            <div class="tile">Los Angeles Lakers</div>
            <div class="tile">Brooklyn Nets </div>
            <div class="tile">Boston Celtics </div>
            <div class="tile">Chicago Bulls</div>
            <div class="tile">Miami Heat</div>
            <div class="tile">Cleveland Cavaliers</div>
            <div class="tile">San Antonio Spurs</div>
            <div class="tile">Dallas Mavericks</div>
            <div class="tile">New York Knicks</div>
            </div>
        </div>
    </React.Fragment>
    );
};

export default Home;



