import React from 'react';
import style from "../../css_moduls/home_css/home.module.css";

const OneImage = (props) => {
    return (
        <div className={`col-6 overflow-hidden text-center`}>
            <img className={`${style.imgPreviewPost}`} src={props.item} alt={''}/>
        </div>
    );
};

export default OneImage;