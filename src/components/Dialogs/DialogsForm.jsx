import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Textarea} from './../FormsControl/FormsControl'
import {maxLengthCreator, requiredField} from './../../utils/validators/validators'


let maxLength100 = maxLengthCreator(100);
const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
             name="newMessageBody"
            cols="30" rows="5" validate={[requiredField,maxLength100]}></Field>
            <button >Add Message</button>
        </form>
    );
}

const DialogsReduxForm = reduxForm({form : 'login'})(DialogsForm);

export default DialogsReduxForm;