import React from 'react';
import classes from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div className={classes.content}>
                <img src='https://lux.fm/uploads/800x450_DIR/media_news/2019/12/5e07071a44b8f090207200.jpg' alt='' />
            </div>
            <div className={classes.discriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;