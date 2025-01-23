import './auth.css';
import React, { useState } from 'react';
import { reduxForm, Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { login, signup } from './authActions';
import Row from '../common/layout/row';
import Grid from '../common/layout/Grid';
import If from '../common/operator/If';
import Messages from '../common/msg/messages';
import Input from '../common/form/InputAuth';

const Auth = (props) => {
    // Local state for login mode
    const [loginMode, setLoginMode] = useState(true);

    // Redux dispatch
    const dispatch = useDispatch();

    // Toggle between login and signup modes
    const changeMode = () => {
        setLoginMode(!loginMode);
    };

    // Handle form submission
    const onSubmit = (values) => {
        loginMode ? dispatch(login(values)) : dispatch(signup(values));
    };

    const { handleSubmit } = props;

    return (
        <div className="login-box">
            <div className="login-logo"><b>My</b> Money</div>
            <div className="login-box-body">
                <p className="login-box-msg">Bem vindo!</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        component={Input}
                        type="input"
                        name="name"
                        placeholder="Nome"
                        icon="user"
                        hide={loginMode}
                    />
                    <Field
                        component={Input}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        icon="envelope"
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        placeholder="Senha"
                        icon="lock"
                    />
                    <Field
                        component={Input}
                        type="password"
                        name="confirm_password"
                        placeholder="Confirmar Senha"
                        icon="lock"
                        hide={loginMode}
                    />
                    <Row>
                        <Grid cols="4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block btn-flat"
                            >
                                {loginMode ? 'Entrar' : 'Registrar'}
                            </button>
                        </Grid>
                    </Row>
                </form>
                <br />
                <a onClick={changeMode}>
                    {loginMode
                        ? 'Novo usuário? Registrar aqui!'
                        : 'Já é cadastrado? Entrar aqui!'}
                </a>
            </div>
            <Messages />
        </div>
    );
};

export default reduxForm({ form: 'authForm' })(Auth);
