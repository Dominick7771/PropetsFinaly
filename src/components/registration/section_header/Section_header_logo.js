import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import close from '../../../assets/png/close.png';
import style from '../../../css_moduls/registration_css/section_header.module.css';
import {useDispatch} from "react-redux";

const SectionHeaderLogo = () => {

    const dispatch = useDispatch()

    return (
        <div className={'d-flex flex-row justify-content-between mb-2'}>
            <img className={`${style.logoHeader}`} src={logo} alt={'logo'}/>
            <img className={`${style.close}`} src={close} alt={'close'} onClick={() => dispatch({type: 'SET_MODAL', payload: false})}/>
        </div>
    );
};

export default SectionHeaderLogo;