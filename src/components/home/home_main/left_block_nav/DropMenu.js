import React from 'react';
import style from "../../../../css_moduls/home_css/home.module.css";
import megafonImg from "../../../../assets/png/megafon.png";
import hotelsImg from "../../../../assets/png/hotels.png";
import walkingImg from "../../../../assets/png/walking.png";
import fosteringImg from "../../../../assets/png/fostering.png";
import vetHelpImg from "../../../../assets/png/vetHelp.png";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const DropMenu = () => {

    const drop = useSelector(state => state.map.dropdown)
    const dispatch = useDispatch()
    let disp = drop ? 'd-block' : 'd-none'

    return (
        <>
            <NavLink to={'/hotels'} className={`${style.navBtn} d-flex mb-2 p-0 ps-1`}
                     onClick={() => dispatch({type:'SET_DROPDOWN', payload: {dropdown: true}})}>
                <div>
                    <img className={`${style.iconBtn} me-2`} src={megafonImg} alt={'Services'}/>
                    <span>Services</span>
                </div>
            </NavLink>
            <div className={`${style.dropdownContainer} ${disp} d-flex flex-column mb-2`}>
                <NavLink className={`${style.navBtn} d-flex mb-2 ps-1`} to='/hotels'>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={hotelsImg} alt={'Hotels'}/>
                            </div>
                            <span>Hotels</span>
                        </div>
                </NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 ps-1`} to='/walking'>
                        <div className={`d-flex`}>
                            <div className={`${style.widthImg} me-2`}>
                                <img src={walkingImg} alt={'Walking'}/>
                            </div>
                            <span>Walking</span>
                        </div>
                </NavLink>
                <NavLink className={`${style.navBtn} d-flex mb-2 ps-1`} to={'/fostering'}>
                    <div className={`d-flex`}>
                        <div className={`${style.widthImg} me-2`}>
                            <img src={fosteringImg} alt={'Fostering'}/>
                        </div>
                        <span>Fostering</span>
                    </div>
                </NavLink>
                <NavLink className={`${style.navBtn} d-flex ps-1`} to={'/vethelp'}>
                    <div className={`d-flex`}>
                        <div className={`${style.widthImg} me-2`}>
                            <img src={vetHelpImg} alt={'VetHelp'}/>
                        </div>
                        <span>VetHelp</span>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default DropMenu;