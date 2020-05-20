import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : dialogsReducer,
    bestFriends : sitebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;
