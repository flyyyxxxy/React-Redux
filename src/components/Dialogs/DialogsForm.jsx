import React from 'react';
import {Field, reduxForm} from 'redux-form'

const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody"
                            cols="30" rows="5"></Field>
            <button >Add Message</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form : 'login'})(DialogsForm);

export default DialogsReduxForm;