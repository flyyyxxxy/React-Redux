import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import DialogsReduxForm from './DialogsForm';



function Dialogs(props) {
   
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}<div />
                    <div>
                        <DialogsReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;