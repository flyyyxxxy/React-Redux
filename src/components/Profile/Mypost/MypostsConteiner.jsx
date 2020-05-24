import React from 'react';
import { addPost, updateText, setUserProfile } from './../../../redux/profile-reducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';

// function MypostsContainer(props) {

//     let state = props.store.getState();

//     let addPost = () => {
//         props.store.dispatch(addPOstActionCreator());
//     }
//     let onPostChange = (text) => {
//         let action = updateTextActionCreator(text)
//         props.store.dispatch(action);
//     }



//     return (<Myposts onPostChange={  onPostChange } addPost={ addPost } posts={state.profilePage.posts}
//     newPostText={state.profilePage.newPostText} />);
// }
const mapStateToProps= (state)=>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         onPostChange: (text)=>{
//             let action = updateTextActionCreator(text)
//             dispatch(action);
//         },
//         addPost : ()=>{
//             dispatch(addPOstActionCreator());
//         }

//     }
// }

const MypostsContainer = connect(mapStateToProps,{addPost, updateText,setUserProfile})(Myposts);

export default MypostsContainer;