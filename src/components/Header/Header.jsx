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
        {props.isAuth ?
         <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
         <NavLink to='/login'> LOGIN </NavLink>
        }
        </div>
      </header>
    );
}

export default Header;