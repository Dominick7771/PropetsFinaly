import React from 'react';
import Footer_logo from "./Footer_logo";
import Social from "./Social";
import Links from "./Links";
import style from '../../../css_moduls/start_css/footer.module.css'

const Footer = () => {
    return (
        <footer className={`container-fluid`}>
            <div className={`${style.heightFooter} row justify-content-center align-items-center`}>
                <div className={`${style.justifyContent} col-10 d-flex align-items-center flex-wrap`}>
                    <Footer_logo/>
                    <Social/>
                    <Links/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;