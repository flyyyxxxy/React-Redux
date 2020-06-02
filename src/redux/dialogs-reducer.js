
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
      { id: 4, message: 'Yes' },

    ],
  }
const dialogsReducer = (state = initReducer, action)=> {
    
    
    switch(action.type){
        
        case ADD_MESSAGE:{
              return  {...state,
              messages: [...state.messages, {id: 5, message: action.message}]
              }
              
            }
        default: 
        return state;
    }
    
}
  


export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;