
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';

let initState = {
    users: [
        
    ],
    pageSize: 60,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching : false
    
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
        default:
            return state;
    }
}


export const followAC = (userID) => ({ type: FOLLOW, userID: userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID: userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setUsersCountAC = (totalCount) => ({type: SET_USERS_COUNT, totalCount: totalCount});
export const setFetchingAC = (fetching) => ({type: TOOGLE_IS_FETCHING, fetching: fetching});


export default usersReducer;