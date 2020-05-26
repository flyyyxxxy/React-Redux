
import Dialogs from './Dialogs';
import { updateMessageActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
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

export default compose(
    connect(mapStateToProps,mapDispatchToPtops),
    withAuthRedirect
)(Dialogs)