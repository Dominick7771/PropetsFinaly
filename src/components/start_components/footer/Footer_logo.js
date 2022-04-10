import React from 'react';
import logo from "../../../assets/svg/logo.svg";
import style from '../../../css_moduls/start_css/footer.module.css'

const FooterLogo = () => {
    return (
        <div>
            <img src={logo} className={`${style.footerLogo}`} alt='logo'/>
        </div>
    );
};

export default FooterLogo;