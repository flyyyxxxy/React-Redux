import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMidlware from 'redux-thunk';

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : dialogsReducer,
    bestFriends : sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMidlware));
window.store = store;

export default store;
