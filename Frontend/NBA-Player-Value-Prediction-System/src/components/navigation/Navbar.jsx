import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './nav.css';

function SearchForm({ onSubmit, value, onChange }) {
    return (
        <form className='navigation-search-form' onSubmit={onSubmit}>
            <input
                type="text"
                id="search-input"
                placeholder="Search players..."
                className='navigation-search-input'
                value={value}
                onChange={onChange}
            />
            <button type="submit" className='navigation-search-button' aria-label='Submit Search'>
                <i>Search</i>
            </button>
        </form>
    );
}

function Navbar() {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchText.trim() !== '') {
            try {
                const response = await fetch(`http://localhost:8080/clubs/clubplayers/${searchText}`);
                if (response.status === 200) {
                    const data = await response.json();
                    navigate(`/clubs/clubplayers/${data.playerinfo.full_name}`);
                    setSearchText('');
                } else {
                    alert('No matching player found in the database. Try Capitalisation');
                }
            } catch (error) {
                console.error(error);
                alert('An error occurred while searching for the player. Try Capitalisation');
            }
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
                    <NavLink to="/clubs" className='navigation-link'>
                        Clubs
                    </NavLink>
                </li>
                <li className='navigation-item-left'>
                    <Link to='https://forms.gle/fHUfNVm4hLCZCcuW6' className='navigation-link' target='_blank'>
                        Rate Us
                    </Link>
                </li>
                <li className='navigation-item-left'>
                    <Link to="/about" className='navigation-link'>
                        About
                    </Link>
                </li>
                <li className='navigation-item-right'>
                    <SearchForm onSubmit={handleSearch} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
