import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => (
    <header>
        <nav>
            <Link to="/">Main</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    </header>
);

export default Header;
