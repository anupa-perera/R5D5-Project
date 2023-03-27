import './ourTeam.css';
import sasiru from '../../assets/images/sasiru-dp.png';
import header from '../../assets/images/header.jpg';
import malith from '../../assets/images/malith.jpg';
import anupa from '../../assets/images/anupa.png';
import dulara from '../../assets/images/dulara.jpg';
import mojitha from '../../assets/images/mojitha.webp';

function MeetTheTeam(){
    return (
        <div className='root'>
            <div className="all-content">
                <div className='header'>
                    <img src={header} className='meettheteamimage'/>
                    <h1 className='header-text'>Meet the Team</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='area'>
                    <div className='team'>
                        <div className='member'>
                            <img src={anupa} alt="Member photo Anupa" />
                            <h3>Anupa <br/>Perera</h3>
                            <p>Software Developer
                            <br />
                                w1867689
                            </p>
                        </div>
                        <div className='member'>
                            <img src={sasiru} alt="Member photo Sasiru" />
                            <h3>Sasiru <br/>Vishmika</h3>
                            <p>
                                Software Developer
                                <br />
                                w1899317
                            </p>
                        </div>
                        <div className='member'>
                            <img src={malith} alt="Member photo Malith" />
                            <h3>Malith <br/>alexander</h3>
                            <p>Software Developer
                                <br />
                                w1867418
                            </p>
                        </div>
                        <div className='member'>
                            <img src={dulara} alt="Member photo Dulara" />
                            <h3>Dulara <br/>Chathuska</h3>
                            <p>
                                Software Developer
                                <br />
                                w1912934
                            </p>
                        </div>
                        <div className='member'>
                            <img src={mojitha} alt="Member photo Mojitha" />
                            <h3>Mojitha <br/>Gunaratne</h3>
                            <p>Software Developer
                                <br/>
                                w1867439
                            </p>
                        </div>
                    </div>
                </div>
                <div className='after-statement'>
                    <p className="afterstatement-text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <i>
                            This web application is developed to simplify the negotiation process between
                            player agents and club managers to maximise profit for both parties. All the NBA 
                            League popular players and clubs are included. 
                        </i>
                        <br />
                        <i>
                            Developed using MERN Stack - MongoDB, Express.js, React.js and Node.js
                        </i>
                        <br />
                        <br />
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;
