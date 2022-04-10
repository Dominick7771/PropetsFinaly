import React from 'react';
import RegisterPage from "../pages/RegisterPage";
import {useSelector} from "react-redux";

const Modal = (props) => {

    const state = useSelector(state => state.modal)

    return (
        <div className={`modal__wrapper ${state.modal ? 'open' : 'close'}`} style={{...props.style}}>
            <RegisterPage/>
        </div>
    );
};

export default Modal;