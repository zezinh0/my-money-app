import '../common/template/dependencies';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import App from './app';
import Auth from '../auth/Auth';
import { validateToken } from '../auth/authActions';

const AuthOrApp = (props) => {
    // Access auth state from Redux store
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    console.log('AKKKKKKKKKKKKKKK')
    // Run side effect on component mount to validate the token
    useEffect(() => {
        if (auth.user) {
            dispatch(validateToken(auth.user.token));
        }
    }, [auth.user, dispatch]);

    // Extract user and token validation status
    const { user, validToken } = auth;

    // Conditionally render based on user and token validation
    if (user && validToken) {
        axios.defaults.headers.common['authorization'] = user.token;
        console.log('OIOIOIO')
        return <App>{props.children}</App>;
    } else if (!user && !validToken) {
        console.log('ASADASDSA')
        return <Auth />;
    } else {
        return false; // Return nothing if the user is in an intermediate state
    }
};

export default AuthOrApp;
