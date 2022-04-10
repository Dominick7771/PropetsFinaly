import React from 'react';
import love from '../../../../assets/png/love.png'
import style from '../../../../css_moduls/start_css/section_coming.module.css'

const Logo = () => {
    return (
        <div className={`${style.logoLove} col-3`}>
            <img src={love}/>
            <p className={`${style.pLove}`}>LOVE</p>
        </div>
    );
};

export default Logo;