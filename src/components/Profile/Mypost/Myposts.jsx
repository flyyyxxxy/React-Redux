import React from 'react';
import Post from './Post/Post'
import classes from './Myposts.module.css';

function Myposts(props) {

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.onPostChange(text);
    }

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={classes.posts}>
               {postsElement}
            </div>
        </div>
    );
}


export default Myposts;