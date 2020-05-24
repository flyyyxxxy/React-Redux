import React from 'react';
import Post from './Post/Post'
import classes from './Myposts.module.css';

function Myposts(props) {

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateText(text);
    }

    let postsElement = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classes.postBlock}>
            <h3>Моя стена</h3>
            <div>
                <span>
                    <textarea  onChange={onPostChange} value={props.newPostText}/>
                    </span>
                <span><button onClick={addPost}>Поделится</button></span>
            </div>
            <div className={classes.posts}>
               {postsElement}
            </div>
        </div>
    );
}


export default Myposts;