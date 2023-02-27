// import styles from './App.module.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MeetTheTeam } from './pages/meet-the-team/meet-the-team';
import { Home } from './pages/home/home';
import { Clubpage } from './pages/clubpage/clubpage';
import { NavigationBarOne } from './components/navigation-bar-one/navigation-bar-one';
import { Footer } from './components/footer/footer';

function App() {
    return (
        <div>
            <BrowserRouter> 
                <NavigationBarOne />
                <Routes>
                    <Route path="/about" element={<MeetTheTeam />} />
                    <Route path="/clubpage" element={<Clubpage />} />
                    <Route path="/" element={<Home />} />
                </Routes> 
                <Footer />
            </BrowserRouter>   
        </div>
    );
}

export default App;
