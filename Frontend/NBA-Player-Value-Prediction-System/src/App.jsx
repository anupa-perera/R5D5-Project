import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState } from 'react';
import './App.css';
import Pagefooter from './components/footer/Pagefooter';
import Home from './pages/home/home';
import Navbar from './components/navigation/Navbar';
import Ourteam from  './pages/ourTeam/ourTeam';
import Clubs from './pages/clubs/clubs';


import MyApp from './pages/dummypage/dummypage';
import Clubplayers from './pages/players/clubplayers';


function App() {
  const [count, setCount] = useState(0)
  const [club, setClub] = useState('')


  return (
    <div className="App">
          <BrowserRouter> 
            <Navbar/>
            <Routes>
                <Route path="/about" element={<Ourteam/>} />
                <Route path="/playervalueprediction" element={<MyApp/>} />
                <Route>
                  <Route index path="/clubpage" element={<Clubs  setClub={setClub}/>}/>
                  <Route>
                    <Route index path="/clubpage/clubplayers" element={<Clubplayers club={club}/>}/>
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
