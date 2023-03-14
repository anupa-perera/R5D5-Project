// import styles from './App.module.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MeetTheTeam } from './pages/meet-the-team/meet-the-team';
import { Home } from './pages/home/home';
import { Playerpage } from './pages/playerpage/playerpage';
import { PlayerValuePredictionPage } from './pages/player-value-prediction-page/player-value-prediction-page';
import { NavigationBarOne } from './components/navigation-bar-one/navigation-bar-one';
import { Footer } from './components/footer/footer';
import { Club } from './pages/club/clubs';

function App() {
    return (
        <div>
            <BrowserRouter> 
                <NavigationBarOne />
                <Routes>
                    <Route path="/about" element={<MeetTheTeam />} />
                    <Route path="/clubpage" element={<Club />} />
                    <Route path="/playerpage" element={<Playerpage />} />
                    <Route path="/playervalueprediction" element={<PlayerValuePredictionPage />} />
                    <Route path="/" element={<Home />} />
                </Routes> 
                <Footer />
            </BrowserRouter>   
        </div>
    );
}

export default App;
