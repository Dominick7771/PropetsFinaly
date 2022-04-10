import React from 'react';
import style from '../../../css_moduls/start_css/header.module.css'
import Logo from "./Logo";
import SignIn from "./SignIn";

const Header = () => {
    return (
        <header className={`${style.header} container-fluid`}>
            <div className={'row justify-content-center align-items-center h-100'}>
                <div className={'col-10 d-flex justify-content-between'}>
                    <Logo/>
                    <SignIn/>
                </div>
            </div>
        </header>
    );
};

export default Header;