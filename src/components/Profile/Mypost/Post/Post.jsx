import React from 'react';
import classes from './Post.module.css';


function Post(props) {
    return(
        <div className={classes.item}>
            <img src="https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-10-3-128.png" alt=""/>
            {props.message}
            <div className='like'>
            <span>Like {props.likeCounts}</span>
            </div>
         </div>
    );
}


export default Post;