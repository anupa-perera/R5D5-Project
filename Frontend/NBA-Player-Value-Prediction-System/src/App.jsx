import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState } from 'react';
import './App.css';
import Pagefooter from './components/footer/Pagefooter';
import Home from './pages/home/home';
import Navbar from './components/navigation/Navbar';
import Ourteam from  './pages/ourTeam/ourTeam';
import Clubs from './pages/clubs/clubs';
import Clubplayers from './pages/players/clubplayers';
import OnePlayer from './pages/onePlayer/onePlayer';
import Compare from './pages/compare/Compare';

function App() {
  const [club, setClub] = useState('')
  const [player, setPlayer] = useState('')

  return (
    <div className="App">
          <BrowserRouter> 
            <Navbar/>
            <Routes>
                <Route path="/about" element={<Ourteam/>} />
                <Route path="/compare/:player1" element={<Compare/>} />
                <Route>
                  <Route index path="/clubs" element={<Clubs  setClub={setClub}/>}/>
                  <Route>
                    <Route>
                      <Route index path="/clubs/clubplayers" element={<Clubplayers club={club} setPlayer={setPlayer}/>}/>
                      <Route>
                          <Route path="/clubs/clubplayers/:playerName" element={<OnePlayer />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>

                <Route path="/" element={<Home />} />
            </Routes> 
            <Pagefooter />
        </BrowserRouter>   
    </div>
  )
}

export default App;
