import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return(
        <header className={classes.header}>
        <div className={classes.logo}>
          FACEBOOK
        </div>
        
        <div className={classes.loginAuth}>
        {props.isAuth === false ? <NavLink to='/login'> LOGIN </NavLink>: <div>{props.login}</div> }
        
        </div>
      </header>
    );
}

export default Header;