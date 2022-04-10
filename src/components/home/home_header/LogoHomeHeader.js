import React from 'react';
import logo from '../../../assets/svg/logo.svg';
import style from '../../../css_moduls/home_css/home.module.css'

const LogoHomeHeader = () => {
    return (
        <img className={`${style.logoHeader}`} src={logo} alt={'logo'}/>
    );
};

export default LogoHomeHeader;