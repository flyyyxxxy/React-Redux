import {usersApi} from './../api/api';
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
                ...action.data,
                isAuth: true
            }
        }
        default :
            return state;
    }
}

export const setUserAuthData = (userId, email, login)=> ({type : SET_USER_DATA, data: {userId, email, login}}); 


export const getAuth = () => {
    return (dispatch) => {
        usersApi.getAuthInfo()
        .then(data=>{
            if(data.resultCode === 0){
                let {id, login, email} = data.data;
                dispatch(setUserAuthData(id, email, login));
            }
        })
    }
}

export default authReducer;