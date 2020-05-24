
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRES = 'TOOGLE_IS_FOLLOWING_PROGRES';

let initState = {
    users: [
        
    ],
    pageSize: 60,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching : false,
    followingInProgress: false
    
}


const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:{
            return {...state,
            users: state.users.map(u => {
                if (u.id === action.userID){
                    return {...u, followed: true}
                }
                return u;
            })}
        }
            
        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u=> {
                    if (u.id === action.userID){
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, 
                users : action.users
            }
        }
        case SET_CURRENT_PAGE : {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
        }
        case SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case TOOGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        case TOOGLE_IS_FOLLOWING_PROGRES:{
            return{
                ...state, 
                followingInProgress: action.followProgres

            }  
        }
        default:
            return state;
    }
}


export const follow = (userID) => ({ type: FOLLOW, userID: userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersCount = (totalCount) => ({type: SET_USERS_COUNT, totalCount: totalCount});
export const setFetching = (fetching) => ({type: TOOGLE_IS_FETCHING, fetching: fetching});
export const setFollowingProgress = (followProgres) => ({type: TOOGLE_IS_FOLLOWING_PROGRES, followProgres})


export default usersReducer;