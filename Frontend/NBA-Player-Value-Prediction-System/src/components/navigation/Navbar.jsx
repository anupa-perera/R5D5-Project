import { Link } from 'react-router-dom';
import './nav.css';


function Navbar(){
    return (
        <nav className='nav'>
            <ul className='navigation-menu'>
                <li className='navigation-item-left'>
                    <Link to="/" className='navigation-link'>
                        Home
                    </Link>
                </li>
                <li className='navigation-item-left'>
                    <Link to="/clubpage" className='navigation-link'>
                        Clubs
                    </Link>
                </li>
                <li className='navigation-item-left'>
                    <Link to ='https://forms.gle/fHUfNVm4hLCZCcuW6' className='navigation-link' target='_blank'>
                        Rate Us
                    </Link>
                </li>
                <li className='navigation-item-left'>
                    <Link to="/about" className='navigation-link'>
                        About
                    </Link>
                </li>
                <li className='navigation-item-right'>
                    <form className='navigation-search-form'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='navigation-search-input'
                        />
                        <button type="submit" className='navigation-search-button'>
                            <i>Search</i>
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
