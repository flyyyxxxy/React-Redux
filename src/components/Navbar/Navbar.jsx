import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
    return(
        <nav className={classes.nav}>
          <div className={classes.avatar}>
            <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-128.png' alt=""/>
          </div>
        <div  className={classes.item}> 
          <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink  to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink  to='/users' activeClassName={classes.activeLink}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink  to='news' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink  to='music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink  to='settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>


        
      </nav>
    );
}

export default Navbar;