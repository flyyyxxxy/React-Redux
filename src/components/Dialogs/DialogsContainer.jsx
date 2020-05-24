
import Dialogs from './Dialogs';
import { updateMessageActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        auth: state.auth.isAuth
    }
}
let mapDispatchToPtops = (dispatch) => {
    return {
        updateMessage : (text)=>{
            dispatch(updateMessageActionCreator(text));
        },
        sendMessage : ()=>{
            dispatch(addMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToPtops)(Dialogs);

export default DialogsContainer;