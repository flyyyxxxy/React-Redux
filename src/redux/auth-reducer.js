import {usersApi} from './../api/api';
import {stopSubmit} from 'redux-form'
const SET_USER_DATA ='SET_USER_DATA';

let initState = {
    
    userId: null,
    email: null,
    login : null,
    isAuth : false 
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload,
            }
        }
        default :
            return state;
    }
}

export const setUserAuthData = (userId, email, login, isAuth)=> ({type : SET_USER_DATA, 
    payload: {userId, email, login, isAuth}}); 


export const getAuth = () => {
    return (dispatch) => {
        usersApi.getAuthInfo()
        .then(data=>{
            if(data.resultCode === 0){
                let {id, login, email} = data.data;
                dispatch(setUserAuthData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        usersApi.login(email, password, rememberMe)
        .then(data=>{
            if(data.resultCode === 0){
                dispatch(getAuth())
            }
            else { 
                let message = data.messages.length > 0 ? data.messages[0]: "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        usersApi.logout()
        .then(data=>{
            if(data.resultCode === 0){
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
    }
}

export default authReducer;