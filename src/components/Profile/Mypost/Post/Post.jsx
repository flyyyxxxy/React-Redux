import React from 'react';
import classes from './Post.module.css';


function Post(props) {
    return(
        <div className={classes.item}>
            <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_male_avatar_portrait-128.png" alt=""/>
            {props.message}
            <div className='like'>
            <span>Like {props.likeCounts}</span>
            </div>
         </div>
    );
}


export default Post;