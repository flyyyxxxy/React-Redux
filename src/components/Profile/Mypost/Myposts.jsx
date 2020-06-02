import React from 'react';
import Post from './Post/Post'
import classes from './Myposts.module.css';
import ReduxFormMyPost from './FormMyPost';

function Myposts(props) {

    const addPost = (value) => {
        props.addPost(value.postBody);
    }
    

     

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classes.postBlock}>
            <h3>Моя стена</h3>
            <div>
                <ReduxFormMyPost onSubmit={addPost}/>
            </div>
            <div className={classes.posts}>
               {postsElement}
            </div>
        </div>
    );
}


export default Myposts;