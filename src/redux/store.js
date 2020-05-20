import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sidebar-reducer";


let rerender;
let store = {
  getState() {
    return this._state;
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi how are you?', likeCounts: 20 },
        { id: 2, message: 'Its my first post', likeCounts: 25 },
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'Ilya' },
        { id: 2, name: 'Slava' },
        { id: 3, name: 'Mark' },
        { id: 4, name: 'Olga' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Oleg' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'This' },
        { id: 3, message: 'YO' },
        { id: 3, message: 'Yes' },

      ],
      newMessageText: ''

    },

    bestFriends: {
      friends: [
        { id: 1, name: 'Slava' },
        { id: 2, name: 'Mark' },
        { id: 3, name: 'Gena' },
      ]
    }
  },

  subscripe(observer) {
    rerender = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.bestFriends = sitebarReducer(this._state.bestFriends, action);

    rerender(this._state);
  }
}



export default store;
window.store = store;