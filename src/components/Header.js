import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    // use Link for most parts of site,
    // except for navigation (where use NavLink instead)
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;