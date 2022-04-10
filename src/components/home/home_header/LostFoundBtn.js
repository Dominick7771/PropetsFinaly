import React from 'react';
import lost_black from '../../../assets/png/lost_black.png';
import found from '../../../assets/png/found.png';
import style from '../../../css_moduls/home_css/lost_found_btn.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

const LostFoundBtn = () => {

    const dispatch = useDispatch()

    return (
        <div className={'col-4 d-flex justify-content-evenly'}>
            <NavLink to={'/lostpet'} className={`${style.btnLost}`} onClick={() => dispatch({type: 'SET_MAP_ACTIVE', payload: {map: false, header: true}})}>
                    <img className={`${style.iconBtnDark}`} src={lost_black} alt={'lost'}/>
                    <span className={'m-auto'}>I lost my pet</span>
            </NavLink>
            <NavLink to={'/foundpet'} className={`${style.btnFound}`} onClick={() => dispatch({type: 'SET_MAP_ACTIVE', payload: {map: false, header: true}})}>
                    <img className={`${style.iconBtn}`} src={found} alt={'found'}/>
                    <span className={'m-auto'}>I found a pet</span>
            </NavLink>

        </div>
    );
};

export default LostFoundBtn;