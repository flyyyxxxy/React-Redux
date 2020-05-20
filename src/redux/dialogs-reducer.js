const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initReducer = {
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
    newMessageText: "it-camasutra"

  }
const dialogsReducer = (state = initReducer, action)=> {
    
    
    switch(action.type){
        
        case ADD_MESSAGE:{
            let newMessage = {
                id: 5,
                message: state.newMessageText
              }
              return  {...state,
                messages : [...state.messages, newMessage],
                newMessageText : ""
              };
              
            }
        case UPDATE_NEW_MESSAGE:{
              return {...state,
                newMessageText: action.newText
              };
              
        }
        default: 
        return state;
    }
    
}
  

export const updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newText: text });
export const addMessageActionCreator = (text) => ({ type: ADD_MESSAGE, });

export default dialogsReducer;