import React from 'react';
import style from '../../../../css_moduls/start_css/section_info.module.css'

const Info = () => {
    return (
        <div className={`pt-5`}>
            <h2 className={`${style.sizeH2} pb-4`}>Here is collected everything that your pet needs:</h2>
            <ul className={`${style.sizeUl}`}>
                <li className={`${style.sizeLi}`}>professional veterinarian tips </li>
                <li className={`${style.sizeLi}`}>useful information about education and care;</li>
                <li className={`${style.sizeLi}`}>fostering home search;</li>
                <li className={`${style.sizeLi}`}>information about pet-sitting and walking service; </li>
                <li className={`${style.sizeLi}`}>and of course, great communication with new friends in your social network!</li>
            </ul>
        </div>
    );
};

export default Info;