import React from 'react';
import style from "../../../css_moduls/home_css/home.module.css";
import plus from "../../../assets/png/plus.png";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const BtnHomeHeader = () => {

    const dispatch = useDispatch()

    return (
        <NavLink to={'/newpost'} className={`${style.btnHeader}`}
                 onClick={() => dispatch({type: 'SET_DROPDOWN', payload: {dropdown: false}})}>
            <img className={`${style.iconBtn}`} src={plus} alt={'plus'}/>
            <span className={'m-auto'}>Add new</span>
        </NavLink>
    );
};

export default BtnHomeHeader;