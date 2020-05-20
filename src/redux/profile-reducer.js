const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';



let initState = {
    posts: [
      { id: 1, message: 'Hi how are you?', likeCounts: 20 },
      { id: 2, message: 'Its my first post', likeCounts: 25 },
    ],
    newPostText: 'it camasutra'
  }
const profileReducer = (state = initState, action) => {
    switch  (action.type){
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts,
                     newPost ],
                     newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return  {
                ...state,
            newPostText: action.newText};
            // stateCopy.newPostText = action.newText;
        
        default: return state;
    };
}

export const addPOstActionCreator = () => ({ type: ADD_POST });
export const updateTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
