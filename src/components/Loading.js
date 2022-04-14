import React from 'react';
import style from "../css_moduls/loading.module.css";

const Loading = () => {
    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.cf}`}>
                <div className={`${style.timer}`}/>
            </div>
        </div>
    );
};

export default Loading;