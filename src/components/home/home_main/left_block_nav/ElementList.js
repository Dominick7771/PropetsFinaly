import React from 'react';
import style from "../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";

const ElementList = (props) => {

    const dispatch = useDispatch()

    const reduc = props.reduc

    return (
        <>
            <img className={`${style.iconBtn} me-2`} src={props.img} alt={props.name} onClick={() => dispatch(reduc)}/>
            <span>{props.name}</span>
        </>
    );
};

export default ElementList;