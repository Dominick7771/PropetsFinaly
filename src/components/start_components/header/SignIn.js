import React from 'react';
import style from '../../../css_moduls/start_css/header.module.css'
import {useDispatch} from "react-redux";

const SignIn = () => {

    const dispatch = useDispatch()

    return (
        <button className={`${style.btnSign}`} onClick={() => dispatch({type: 'SET_MODAL', payload: true})}>
            Sign in
        </button>
    );
};

export default SignIn;