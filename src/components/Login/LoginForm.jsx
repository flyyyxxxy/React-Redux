import React from 'react';
import {Field, reduxForm} from 'redux-form';


const LoginForm = (props) => {
    return (<form action="" onSubmit={props.handleSubmit}>
        
        <div>
            <Field placeholder={'Login'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={'input'} name={'password'}/>
        </div>
        <div>
            <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
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

