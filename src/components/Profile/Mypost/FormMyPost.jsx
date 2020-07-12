import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {requiredField, maxLengthCreator} from './../../../utils/validators/validators'
import {Textarea} from './../../FormsControl/FormsControl'

const maxLength10 = maxLengthCreator(100);
const FormMyPost = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <span>
                    <Field component={Textarea} name={"postBody"} validate={[requiredField, maxLength10]}/>
            </span>
            <span><button>Поделится</button></span>
        </form>
    );
}

const ReduxFormMyPost = reduxForm({form: "post"})(FormMyPost);

export default ReduxFormMyPost;