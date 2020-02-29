import React from 'react';
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/movie">movie</Link>
            <Link to="/book">book</Link>
            <Link to="/music">music</Link>
            <Link to="/code">code</Link>
        </div>
    );
}

export default Menu;