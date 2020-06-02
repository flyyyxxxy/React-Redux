
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
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
        sendMessage : (message)=>{
            dispatch(addMessageActionCreator(message));
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToPtops),
    withAuthRedirect
)(Dialogs)