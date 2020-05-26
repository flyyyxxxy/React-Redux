import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



function Dialogs(props) {
    let newMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateMessage(text);
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
                        <div><textarea onChange={onMessageChange}
                            
                            value={props.messagesPage.newMessageText}
                            cols="30" rows="5"></textarea></div>
                        <div><button onClick={newMessage}>Add Message</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Dialogs;