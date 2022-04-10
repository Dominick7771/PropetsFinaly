import React from 'react';
import style from '../../../../css_moduls/start_css/section_welcome.module.css';
import {useDispatch} from "react-redux";

const JoinText = () => {
    const dispatch = useDispatch()

    return (
        <div className={'col-10 mt-4 mb-4'}>
            <p className={`m-0`}>I'm okay, just want to <span className={`${style.join}`} onClick={() => dispatch({type: 'SET_MODAL', payload: true})}>join</span> the pawsome community</p>
        </div>
    );
};

export default JoinText;