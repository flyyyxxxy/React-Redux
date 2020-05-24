import {usersApi} from './../api/api';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initState = {
    posts: [
      { id: 1, message: 'Hi how are you?', likeCounts: 20 },
      { id: 2, message: 'Its my first post', likeCounts: 25 },
    ],
    profile : null,
    newPostText: 'it camasutra'
  }
const profileReducer = (state = initState, action) => {
    switch  (action.type){
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts,
                     newPost ],
                     newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
            newPostText: action.newText};
            // stateCopy.newPostText = action.newText;
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile : action.profile
            }
        }
        
        default: return state;
    };
}

export const addPost = () => ({ type: ADD_POST });
export const updateText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getProfilePage = (userId) => {
    return (dispatch) => {
        if(!userId){
          userId =2;
        }
        usersApi.getProfile(userId)
        .then(data => {
          dispatch(setUserProfile(data));
        });
    }
}

export default profileReducer;
