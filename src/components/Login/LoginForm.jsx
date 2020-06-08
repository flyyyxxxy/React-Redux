import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../FormsControl/FormsControl';
import {requiredField, maxLengthCreator} from './../../utils/validators/validators'

let maxLength = maxLengthCreator(30);
const LoginForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
        
        <div>
            <Field validate={[requiredField, maxLength]} placeholder={'Email'} component={Input} name={'email'}/>
        </div>
        <div>
            <Field validate={[requiredField, maxLength]} placeholder={'Password'} component={Input} name={'password'} type={'password'}/>
        </div>
        <div>
            <Field validate={[requiredField, maxLength]} type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
    </div>
        <div>
            <button>Sign in</button>
        </div>
    </form>);
}
const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

  export default LoginReduxForm;

