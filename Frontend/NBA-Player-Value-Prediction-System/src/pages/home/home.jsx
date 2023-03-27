import React from 'react';
import Mainheader from '../../assets/images/mainpageheader.jpg';
import './home.css';
import celtics from './components/logos/boston-celtics.png';
import nets from './components/logos/brooklyn-nets.png';
import bulls from './components/logos/chicago-bulls.png';
import cavaliers from './components/logos/cleveland-cavaliers.png';
import mavericks from './components/logos/dallas-mavericks.png';
import lakers from './components/logos/los-angeles-lakers.png';
import heat from './components/logos/miami-heat.png';
import knicks from './components/logos/new-york-knicks.png';
import spurs from './components/logos/san-antonio-spurs.png';
import warriors from './components/logos/golden-state-warriors.png';

function Home() {
    return (
        <React.Fragment>
            <div className='header'>
                <img src={Mainheader} className='main-header-image' />
            </div>
            <h2 className='title1'>Most Popular</h2>
            <div className="container">
                <a href='https://www.nba.com/player/2544/lebron-james' target='_blank'>
                    <div className="card">
                        <img src="https://image.cnbcfm.com/api/v1/image/107105973-1660838433781-GettyImages-1185445815.jpg?v=1664363093&w=1600&h=900" alt="Card Image" />
                        <h3>LeBron James</h3>
                        <p>Earning : $528,992,480</p>
                    </div>
                </a>
                <a href='https://www.nba.com/player/201142/kevin-durant' target='_blank'>
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwBut6IZC1P1CwUq2J5FH3J_nyTITfh6ubZse4WaO0ffpVaHRvxJplLIqVAly0wbxTTU&usqp=CAU" alt="Card Image" />
                        <h3>Kevin Durant</h3>
                        <p>Earning : $498,688,653</p>
                    </div>
                </a>
                <a href='https://www.nba.com/player/201939/stephen-curry' target='_blank'>
                    <div className="card">
                        <img src="https://cdn.vox-cdn.com/thumbor/4IasTaCSj3PUGB0gfYjkvfN1LOU=/0x0:5646x3764/1200x800/filters:focal(2372x1431:3274x2333)/cdn.vox-cdn.com/uploads/chorus_image/image/71941986/usa_today_19926783.0.jpg" alt="Card Image" />
                        <h3>Stephen Curry</h3>
                        <p>Earning : $470,090,010</p>
                    </div>
                </a>
                <a href='https://www.nba.com/player/203081/damian-lillard' target='_blank'>
                    <div className="card">
                        <img src="https://cdn.nba.com/manage/2023/03/damian-lillard-iso-looks.jpg" alt="Card Image" />
                        <h3>Damian Lilard</h3>
                        <p>Earning : $449,910,157</p>
                    </div>
                </a>
                <a href='https://www.nba.com/player/203078/bradley-beal' target='_blank'>
                    <div className="card">
                        <img src="https://cdn.vox-cdn.com/thumbor/FwN7NDMOW9j2wKjthC18plpoPow=/0x0:4178x2786/1200x800/filters:focal(1486x213:2154x881)/cdn.vox-cdn.com/uploads/chorus_image/image/71715092/1446524643.0.jpg" alt="Card Image" />
                        <h3>Bradley Beal</h3>
                        <p>Earning : $428,874,362</p>
                    </div>
                </a>
                <a href='https://www.nba.com/player/101108/chris-paul' target='_blank'>
                    <div className="card">
                        <img src="https://media.premiumtimesng.com/wp-content/files/2021/07/Chris-Paul.jpeg" alt="Card Image" />
                        <h3>Chris Paul</h3>
                        <p>Earning : $419,909,419</p>
                    </div>
                </a>
            </div>

            <h2>Explore clubs</h2>


            <div class="carousel">
                <div class="tiles-wrapper">
                    <div className='i-tile'>
                        <a href='https://www.nba.com/lakers' target='_blank'>
                            <img src={lakers} className="i-image" ></img>
                            <div class="tile">Los Angeles Lakers</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/nets' target='_blank'>
                            <img src={nets} className="i-image" ></img>
                            <div class="tile">Brooklyn Nets </div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/celtics' target='_blank'>
                            <img src={celtics} className="i-image" ></img>
                            <div class="tile">Boston Celtics </div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/bulls' target='_blank'>
                            <img src={bulls} className="i-image" ></img>
                            <div class="tile">Chicago Bulls</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/heat/' target='_blank'>
                            <img src={heat} className="i-image" ></img>
                            <div class="tile">Miami Heat</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/team/1610612739/cavaliers' target='_blank'>
                            <img src={cavaliers} className="i-image" ></img>
                            <div class="tile">Cleveland Cavaliers</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/spurs' target='_blank'>
                            <img src={spurs} className="i-image" ></img>
                            <div class="tile">San Antonio Spurs</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/team/1610612742/mavericks' target='_blank'>
                            <img src={mavericks} className="i-image" ></img>
                            <div class="tile">Dallas Mavericks</div></a></div>
                    <div className='i-tile'>
                        <a href='https://www.nba.com/knicks' target='_blank'>
                            <img src={knicks} className="i-image" ></img>
                            <div class="tile">New York Knicks</div></a></div>
                            <div className='i-tile'>
                        <a href='https://www.nba.com/warriors' target='_blank'>
                            <img src={warriors} className="i-image" ></img>
                            <div class="tile">Golden State Warriors</div></a></div>
                </div>
                
            </div>
        </React.Fragment>
    );
};

export default Home;



