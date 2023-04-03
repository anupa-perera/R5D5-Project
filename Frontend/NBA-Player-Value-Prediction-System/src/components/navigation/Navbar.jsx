import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './nav.css';


function Navbar(){
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            navigate(`/clubs/clubplayers/${searchText}`);
            setSearchText('');
        }
    };

    return (
        <nav className='nav'>
            <ul className='navigation-menu'>
                <li className='navigation-item-left'>
                    <Link to="/" className='navigation-link'>
                        Home
                    </Link>
                </li>
                <li className='navigation-item-left'>
                    <Link to="/clubs" className='navigation-link'>
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
                    <form className='navigation-search-form' onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search players..."
                            className='navigation-search-input'
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
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
