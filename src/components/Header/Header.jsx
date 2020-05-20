import React from 'react';
import classes from './Header.module.css';

function Header () {
    return(
        <header className={classes.header}>
        <img src = 'https://cdn2.iconfinder.com/data/icons/social-network-logo-collection-2/512/14-512.png' alt='' ></img>
      </header>
    );
}

export default Header;