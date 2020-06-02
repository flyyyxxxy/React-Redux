import React from 'react'
import {Field, reduxForm} from 'redux-form';

const FormMyPost = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <span>
                    <Field component="textarea" name={"postBody"}/>
            </span>
            <span><button>Поделится</button></span>
        </form>
    );
}

const ReduxFormMyPost = reduxForm({form: "post"})(FormMyPost);

export default ReduxFormMyPost;