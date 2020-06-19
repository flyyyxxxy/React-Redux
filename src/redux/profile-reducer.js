import {usersApi, ProfileApi} from './../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'


let initState = {
    posts: [
      { id: 1, message: 'Hi how are you?', likeCounts: 20 },
      { id: 2, message: 'Its my first post', likeCounts: 25 },
    ],
    profile : null,
    status : ""
  }
const profileReducer = (state = initState, action) => {
    switch  (action.type){
        case ADD_POST: 
            return {
                ...state,
            posts: [...state.posts, {id:3, message: action.postBody, likeCounts: 0}]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile : action.profile
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status : action.status
                
            }
        }

        
        default: return state;
    };
}

export const addPost = (postBody) => ({ type: ADD_POST, postBody });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})


export const getProfilePage = (userId) => {
    return (dispatch) => {

        usersApi.getProfile(userId)
        .then(data => {
          dispatch(setUserProfile(data));
        });
    }
}

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        ProfileApi.getStatus(userId).then(res=>{
            dispatch(setStatusProfile(res.data))
        })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        ProfileApi.updateStatus(status).then(data=>{
            if(data.resultCode === 0){
                debugger;
                dispatch(setStatusProfile(status))
            }
            
        })
    }
}

export default profileReducer;
