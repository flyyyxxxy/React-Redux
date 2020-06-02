import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sitebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMidlware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : dialogsReducer,
    bestFriends : sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMidlware));
window.store = store;

export default store;
